import { ILeftNavMenu } from "@data/interfaces";
import { faUser, faCog, faClipboard, faComment, faHeart, faBookmark, faChartLine, faCogs } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
export const left_nav_menus: ILeftNavMenu[] = [
    {
        title: 'Mi cuenta',
        links: [
            {
                icon: faUser,
                name: 'Lista de usuarios',
                link:'/panel/user'
            },
            {
                icon: faCog,
                name: 'Detalle de usuario',
                link:'/panel/user/detail/1'
            },
            {
                icon: faClipboard,
                name: 'Historial'
            },
            {
                icon: faComment,
                name: 'Comentarios'
            }
        ]
    },
    {
        title: 'Servicios',
        links: [
            {
                icon: faYoutube,
                name: 'Videos'
            },
            {
                icon: faHeart,
                name: 'Favoritos'
            },
            {
                icon: faBookmark,
                name: 'Articulos'
            },
            {
                icon: faChartLine,
                name: 'Estadisticas'
            },
            {
                icon:faCogs,
                name:'Settings'
            }
        ]
    }
]
