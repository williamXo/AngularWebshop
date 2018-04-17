
import {Product} from '../products/product';

export class Order {
  constructor(
    public order_id?: number,
    public date?: string,
    public total_amount?: string,
    public products?: Product[])  {

  }
}
