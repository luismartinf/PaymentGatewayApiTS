import { PaymentDetail } from "./payment-detail.model";
import { UsersDetail } from "./users-detail.model";

export class TransactionsDetail {
    TransactionId:number = -1;
    Amount:number = 0;
    TypeTransaction:boolean = false;
    Item:string = "";
    ShippingOrder:number = 0;
    BeginTransaction!: Date;
    Status:string = "";
    FinishTransaction!: Date;
    UserId:number = 0;
    UserTrans!: UsersDetail|null;
    PaymethodTrans!: PaymentDetail|null;
}
