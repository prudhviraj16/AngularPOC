import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { getNavRoutes } from 'src/app/nav-routing';


@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private navigationItems: Routes = getNavRoutes();

    constructor() { }

    public getNavigationItems(): Routes {
        return this.navigationItems;
    }

}
