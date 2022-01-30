import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { Store } from "@ngrx/store";
import { map, Observable, take } from "rxjs";
// import { AppState } from "../store/app.reducer";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router,) { } //private store: Store<AppState>

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // return false
    // return this.store.select(AppState => AppState.auth).pipe(
    //   take(1),
    //   map((authState) => {
    //     const isAuth = !!authState.user
    //     if (isAuth) {
    //       return isAuth
    //     }
    return this.router.createUrlTree(["/auth"])
    //   }))
  }
}