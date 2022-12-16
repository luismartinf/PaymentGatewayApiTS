import { UsersDetail } from "./users-detail.model";

export class RolesDetail {
    RolesId:number = -1;
    RoleName:string = "";
    Users!: UsersDetail[];
}
