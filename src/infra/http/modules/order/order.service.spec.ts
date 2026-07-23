import { OrderNotFoundError } from 'src/domain/errors/order/OrderNotFoundError';
import { OrderItemForbiddenError } from 'src/domain/errors/order/OrderItemForbiddenError';
import { InvalidFulfillmentTransitionError } from 'src/domain/errors/order/InvalidFulfillmentTransitionError';
import { OrderItemReviewAlreadyExistsError } from 'src/domain/errors/order/OrderItemReviewAlreadyExistsError';
import { OrderService } from './order.service';

const BASE_ITEM = {
  id: 'item-1',
  productVariationId: 'variation-1',
  fulfillmentStatus: 'RECEIVED' as const,
  order: { userId: 'user-1' },
  review: null as { id: string } | null,
};

function buildPrismaMock(item: typeof BASE_ITEM | null) {
  return {
    orderItem: {
      findUnique: jest.fn().mockResolvedValue(item),
    },
    reviewProduct: {
      create: jest.fn().mockResolvedValue({
        id: 'review-1',
        rating: 5,
        comment: 'Ótimo produto',
      }),
    },
  };
}

function buildService(prisma: unknown) {
  return new OrderService(
    prisma as never,
    undefined as never,
    undefined as never,
    undefined as never,
  );
}

describe('OrderService.createOrderItemReview', () => {
  it('Dado um item recebido e nunca avaliado, quando execute é chamado, então cria a avaliação', async () => {
    const prisma = buildPrismaMock({ ...BASE_ITEM });
    const service = buildService(prisma);

    const review = await service.createOrderItemReview({
      orderItemId: 'item-1',
      userId: 'user-1',
      rating: 5,
      comment: 'Ótimo produto',
    });

    expect(review).toEqual({ id: 'review-1', rating: 5, comment: 'Ótimo produto' });
    expect(prisma.reviewProduct.create).toHaveBeenCalledWith({
      data: {
        rating: 5,
        comment: 'Ótimo produto',
        product_variation_id: 'variation-1',
        reviewer_id: 'user-1',
        order_item_id: 'item-1',
      },
    });
  });

  it('Dado um item de pedido inexistente, quando execute é chamado, então lança OrderNotFoundError', async () => {
    const prisma = buildPrismaMock(null);
    const service = buildService(prisma);

    await expect(
      service.createOrderItemReview({
        orderItemId: 'missing',
        userId: 'user-1',
        rating: 5,
      }),
    ).rejects.toBeInstanceOf(OrderNotFoundError);
  });

  it('Dado um item de pedido de outro usuário, quando execute é chamado, então lança OrderItemForbiddenError', async () => {
    const prisma = buildPrismaMock({
      ...BASE_ITEM,
      order: { userId: 'other-user' },
    });
    const service = buildService(prisma);

    await expect(
      service.createOrderItemReview({
        orderItemId: 'item-1',
        userId: 'user-1',
        rating: 5,
      }),
    ).rejects.toBeInstanceOf(OrderItemForbiddenError);
  });

  it('Dado um item ainda não recebido, quando execute é chamado, então lança InvalidFulfillmentTransitionError', async () => {
    const prisma = buildPrismaMock({ ...BASE_ITEM, fulfillmentStatus: 'SHIPPED' as never });
    const service = buildService(prisma);

    await expect(
      service.createOrderItemReview({
        orderItemId: 'item-1',
        userId: 'user-1',
        rating: 5,
      }),
    ).rejects.toBeInstanceOf(InvalidFulfillmentTransitionError);
  });

  it('Dado um item já avaliado, quando execute é chamado, então lança OrderItemReviewAlreadyExistsError', async () => {
    const prisma = buildPrismaMock({
      ...BASE_ITEM,
      review: { id: 'existing-review' },
    });
    const service = buildService(prisma);

    await expect(
      service.createOrderItemReview({
        orderItemId: 'item-1',
        userId: 'user-1',
        rating: 5,
      }),
    ).rejects.toBeInstanceOf(OrderItemReviewAlreadyExistsError);
  });
});
