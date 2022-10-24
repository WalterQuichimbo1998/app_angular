import {environment as env} from'environments/environment';

export const api_routes={
    auth:{
        login:`${env.url}api/login`,
    }
}