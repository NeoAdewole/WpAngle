import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../authenticate.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthenticateService,
        private router: Router
    ) {}
    canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
            // get guarded url to use for redirects
            let url: string = state.url;
            const loggedIn = this.authService.isUserLoggedIn();
            if (!loggedIn) {
                this.router.navigate(['/login'],{queryParams:{'redirectURL':state.url}});
                return false;
            }
        return true;
    }
}
