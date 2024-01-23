import { Component, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, Routes } from '@angular/router';
import { roles } from '../core/models/roles';
import { navRoutes } from '../nav-routing';
import { NavigationService } from '../services/navigation/navigation.service';
import { User } from '../core/models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  /* represents the result of a media query. */
  public isHandSet: MediaQueryList;
  public isLoggedIn!: boolean;
  public userRole!: string
  /* callback function when the media query changes. */
  public homeAccess: boolean = environment.homeAccess;
  public aboutAccess: boolean = environment.aboutAccess;
  public servicesAccess!: boolean
  public contactAccess!: boolean
  public subscription: Subscription = new Subscription()
  public routes !: Routes
  @ViewChild('snav') snav!: MatSidenav

  /* Listening of changes in screen width*/
  constructor(media: MediaMatcher, private authService: AuthService, public router: Router, private navigationService : NavigationService) {

    // checks if the screen size is of max-width:768px
    this.isHandSet = media.matchMedia('(max-width: 768px)');

    const authServiceSubscription = this.authService.isLoggedSource.subscribe((isLogged) => {
      this.isLoggedIn = isLogged;
    });

    this.subscription.add(authServiceSubscription)
  }

  ngOnInit(): void {
    const userRoleAccessSubscription = this.authService.userRole.subscribe((userRole) => {
      if(userRole !== undefined){
        // Getting the role of the user
        this.userRole = userRole;
      }
    });

    this.subscription.add(userRoleAccessSubscription)
    this.routes = navRoutes
  }

  public topNavigationItems(): Routes {
    
    let finallist = this.navigationService.getNavigationItems();
      return finallist.filter(item => item.path === 'logout');
    }

  public sideNavigationItems(): Routes {
    // if the role is "ADMIN" then return all the navigation routes or else returns all the desired routes
    let finallist = this.navigationService.getNavigationItems();
      if(this.userRole!==roles.ROLE_ADMIN) {
        return finallist = finallist.filter(item => (item.data as User) ?.role !== roles.ROLE_ADMIN && item.path !=='logout')
      } else {
        return finallist.filter(item => item.path !=='logout')
      }
  }

  /* logouts the existing user*/
  public logout() {
    this.authService.logout()
  }

  /* Cleaning up the resources */
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
