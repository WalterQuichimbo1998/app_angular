export class IApiUserAuth {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    token?: string;
    permissions?:{
        table_user?:1|0,
        detail_user?:1|0,
    }|any
}