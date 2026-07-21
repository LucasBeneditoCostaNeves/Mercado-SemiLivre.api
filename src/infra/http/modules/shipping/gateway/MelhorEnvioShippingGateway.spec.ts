import { ShippingQuoteUnavailableError } from 'src/domain/errors/shipping/ShippingQuoteUnavailableError'
import { MelhorEnvioShippingGateway } from './MelhorEnvioShippingGateway'

const baseInput = {
  originCep: '01310930',
  destinationCep: '20040020',
  packages: [{ weightKg: 0.3, widthCm: 16, heightCm: 2, lengthCm: 11, insuranceValue: 100 }],
}

describe('dado o gateway da Melhor Envio', () => {
  const originalFetch = global.fetch
  const originalToken = process.env.MELHOR_ENVIO_TOKEN

  beforeEach(() => {
    process.env.MELHOR_ENVIO_TOKEN = 'test-token'
  })

  afterEach(() => {
    global.fetch = originalFetch
    process.env.MELHOR_ENVIO_TOKEN = originalToken
    jest.resetAllMocks()
  })

  describe('quando a Melhor Envio responde com sucesso', () => {
    it('então retorna as cotações ordenadas por valor crescente', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => [
          { id: 1, name: 'SEDEX', price: '45.00', delivery_time: 3, company: { name: 'Correios' } },
          { id: 2, name: 'PAC', price: '25.50', delivery_time: 8, company: { name: 'Correios' } },
        ],
      }) as jest.Mock

      const gateway = new MelhorEnvioShippingGateway()
      const result = await gateway.calculate(baseInput)

      expect(result).toEqual([
        { carrier: 'Correios', service: 'PAC', deliveryDays: 8, price: 25.5 },
        { carrier: 'Correios', service: 'SEDEX', deliveryDays: 3, price: 45 },
      ])
    })

    it('então descarta opções com erro reportado pela transportadora', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => [{ id: 1, name: 'Jadlog', error: 'Serviço indisponível para este CEP' }],
      }) as jest.Mock

      const gateway = new MelhorEnvioShippingGateway()
      const result = await gateway.calculate(baseInput)

      expect(result).toEqual([])
    })
  })

  describe('quando a Melhor Envio está indisponível', () => {
    it('então lança ShippingQuoteUnavailableError em erro de rede', async () => {
      global.fetch = jest.fn().mockRejectedValue(new Error('network error')) as jest.Mock

      const gateway = new MelhorEnvioShippingGateway()

      await expect(gateway.calculate(baseInput)).rejects.toBeInstanceOf(ShippingQuoteUnavailableError)
    })

    it('então lança ShippingQuoteUnavailableError em resposta 5xx', async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 503 }) as jest.Mock

      const gateway = new MelhorEnvioShippingGateway()

      await expect(gateway.calculate(baseInput)).rejects.toBeInstanceOf(ShippingQuoteUnavailableError)
    })

    it('então lança ShippingQuoteUnavailableError quando não há token configurado', async () => {
      process.env.MELHOR_ENVIO_TOKEN = ''
      global.fetch = jest.fn() as jest.Mock

      const gateway = new MelhorEnvioShippingGateway()

      await expect(gateway.calculate(baseInput)).rejects.toBeInstanceOf(ShippingQuoteUnavailableError)
      expect(global.fetch).not.toHaveBeenCalled()
    })
  })
})
