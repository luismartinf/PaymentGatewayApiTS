import { TransactionsDetail } from "./transactions-detail.model";
import { UsersDetail } from "./users-detail.model";

export class TransfersDetail {
    TransferId:number = -1;
    Amount:number = 0;
    TypeTranfer:string = "";
    TransferDate!: Date;
    TransactionId:number = 0;
    TransTransfers!: TransactionsDetail;
    UserId:number = 0;
    UserTransfers!: UsersDetail;
}
