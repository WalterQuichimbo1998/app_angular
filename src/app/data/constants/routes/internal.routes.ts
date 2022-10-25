export const routes_paths={
    auth:{
        default:'auth',
        login:'login',
    },
    panel:{
        default:'panel',
        user:'user'
    },
    server:{
        e_404:'404',
        e_401:'401'
    }
}

export const internal_paths={
    auth_default:`${routes_paths.auth.default}`,
    auth_login:`${routes_paths.auth.login}`,
    panel_default:`${routes_paths.panel.default}`,
    panel_user_list:`${routes_paths.panel.user}`,
    server_e_404:`${routes_paths.server.e_404}`,
    server_e_401:`${routes_paths.server.e_401}`

}

export const internal_routes={
    auth_login:`/${internal_paths.auth_default}/${internal_paths.auth_login}`,
    panel_user_list:`/${internal_paths.panel_default}/${internal_paths.panel_user_list}`,
    server_e_404:`/${internal_paths.server_e_404}`,
    server_e_401:`/${internal_paths.server_e_401}`
};