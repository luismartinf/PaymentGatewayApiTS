import { UsersDetail } from "./users-detail.model";

export class PaymentDetail {
    PaymethodId:number = -1;
    TypePayment:string = "";
    PaymentNum:number = 0;
    BillingAdress:string = "";
    UserId:number = 0;
    UserPaymethod!: UsersDetail|null;
}
