import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private auth:AuthService,private router:Router,private toast:NgToastService)
  {

  }
  canActivate():boolean{
    if(this.auth.isLoggedIn())
    return true;
    else
    {
      this.toast.error({detail:"ERROR",summary:"Please Login First",duration:5000})
      this.router.navigate(['login'])
      return false
    }
  }
  
}
