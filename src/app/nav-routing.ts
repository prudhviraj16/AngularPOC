import { Routes } from '@angular/router';
import { roles } from './core/models/roles';

export const navRoutes: Routes = [
    {
        data : {title : 'Home'},
        path : '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        data : {title : 'Services',role: roles.ROLE_ADMIN},
        path : 'services',
        loadChildren: () => import('./pages/services/service.module').then(m => m.ServicesModule)
    },
    {
        data : {title : 'Contact',role : roles.ROLE_ADMIN},
        path : 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
    },
    {
        data : {title : 'About'},
        path : 'about',
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) 
    },
    {
        path : 'success',
        loadChildren: () => import('./pages/success/success.module').then(m => m.SuccessModule)
    },
    { data : {title:'Logout'}, path: 'logout', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) }
];


export function getNavRoutes(): Routes {
    return navRoutes.filter(route => route.data&& route.data['title']);
}