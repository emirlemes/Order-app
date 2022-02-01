import { Injectable } from '@angular/core'
import { CanActivate, Router, UrlTree } from '@angular/router'
import { Store } from '@ngrx/store'
import { map, Observable, take } from 'rxjs'
import { AppState } from '../../store/app.reducer'

@Injectable({ providedIn: 'root' })
export class SignedInGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) { }
  // route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.store.select(AppState => AppState.auth).pipe(
      take(1),
      map((authState) => {
        const isAuth = !!authState.user
        if (isAuth) {
          return this.router.createUrlTree(['private/dashboard'])
        }
        return true
      }))
  }
}