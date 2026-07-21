import { ShippingQuoteUnavailableError } from 'src/domain/errors/shipping/ShippingQuoteUnavailableError'
import { ShippingService } from './shipping.service'
import { ShippingGateway } from './gateway/ShippingGateway'

const items = [{ productVariationId: 'variation-1', quantity: 2 }]
const quote = [{ carrier: 'Correios', service: 'PAC', deliveryDays: 8, price: 25.5 }]

function buildService(gateway: ShippingGateway) {
  const prisma = {
    productVariation: {
      findMany: jest.fn().mockResolvedValue([{ id: 'variation-1', price: 50 }]),
    },
  } as any

  return new ShippingService(prisma, gateway)
}

describe('dado o serviço de cotação de frete', () => {
  describe('quando a mesma cotação é solicitada novamente dentro do TTL', () => {
    it('então reutiliza o cache sem chamar o gateway novamente', async () => {
      const gateway: ShippingGateway = { calculate: jest.fn().mockResolvedValue(quote) }
      const service = buildService(gateway)

      const first = await service.quote('20040020', items)
      const second = await service.quote('20040020', items)

      expect(first).toEqual(quote)
      expect(second).toEqual(quote)
      expect(gateway.calculate).toHaveBeenCalledTimes(1)
    })
  })

  describe('quando o cache expira', () => {
    it('então consulta o gateway novamente', async () => {
      jest.useFakeTimers()
      const gateway: ShippingGateway = { calculate: jest.fn().mockResolvedValue(quote) }
      const service = buildService(gateway)

      await service.quote('20040020', items)
      jest.advanceTimersByTime(10 * 60 * 1000 + 1)
      await service.quote('20040020', items)

      expect(gateway.calculate).toHaveBeenCalledTimes(2)
      jest.useRealTimers()
    })
  })

  describe('quando o gateway falha repetidamente', () => {
    it('então abre o circuito e passa a rejeitar sem chamar o gateway', async () => {
      const gateway: ShippingGateway = {
        calculate: jest.fn().mockRejectedValue(new ShippingQuoteUnavailableError()),
      }
      const service = buildService(gateway)

      for (let i = 0; i < 3; i += 1) {
        await expect(service.quote(`2004002${i}`, items)).rejects.toBeInstanceOf(ShippingQuoteUnavailableError)
      }

      const callsBeforeCircuitOpen = (gateway.calculate as jest.Mock).mock.calls.length
      await expect(service.quote('20040099', items)).rejects.toBeInstanceOf(ShippingQuoteUnavailableError)

      expect((gateway.calculate as jest.Mock).mock.calls.length).toBe(callsBeforeCircuitOpen)
    })
  })
})
