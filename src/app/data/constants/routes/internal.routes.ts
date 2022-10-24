export const routes_paths={
    auth:{
        default:'auth',
        login:'login',
    },
    panel:{
        default:'panel',
        user:'user'
    }
}

export const internal_paths={
    auth_default:`${routes_paths.auth.default}`,
    auth_login:`${routes_paths.auth.login}`,
    panel_default:`${routes_paths.panel.default}`,
    panel_user_list:`${routes_paths.panel.user}`,
}

export const internal_routes={
    auth_login:`/${internal_paths.auth_default}/${internal_paths.auth_login}`,
    panel_user_list:`/${internal_paths.panel_default}/${internal_paths.panel_user_list}`
};