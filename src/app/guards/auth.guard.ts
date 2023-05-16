import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private auth:AuthService,private router:Router)
  {

  }
  canActivate():boolean{
    if(this.auth.isLoggedIn())
    return true;
    else
    {
      alert("Please Login First")
      this.router.navigate(['login'])
      return false
    }
  }
  
}
