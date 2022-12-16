import { RolesDetail } from "./roles-detail.model";

export class UsersDetail {
    UserId:number = -1;
    UserName:string = "";
    EmailAddress:String = "";
    Name:string = "";
    Password:string = "";
    PhoneNumber:number = 0;
    URL:string|null = null;
    AddDate = Date;
    UpdateDate = Date;
    Roles!: RolesDetail[]|null; 
}
