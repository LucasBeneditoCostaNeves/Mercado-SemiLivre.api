import { SellerSalesSummary } from '../order.types';

export class SellerSalesSummaryViewModel {
  static toHTTP(summary: SellerSalesSummary) {
    return {
      period: summary.period,
      totalRevenue: summary.totalRevenue,
      orderCount: summary.orderCount,
      itemsSold: summary.itemsSold,
      averageTicket: summary.averageTicket,
      topProducts: summary.topProducts.map((product) => ({
        productId: product.productId,
        title: product.title,
        thumbnail: product.thumbnail,
        quantitySold: product.quantitySold,
        revenue: product.revenue,
      })),
    };
  }
}
