declare var google:any;

import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-page',
  standalone: true,
  imports: [],
  templateUrl: './signin-page.component.html',
  styleUrl: './signin-page.component.css'
})
export class SigninPageComponent implements OnInit {
  private router = inject(Router);
  
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id :'273571977505-t5qctdb2p06rvdsbrmm9e9gib0ma9dg9.apps.googleusercontent.com',
      callback:(resp:any)=>{
        console.log(resp);
        return this.handleLogin(resp);
        
      }
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme:"filled",
      size:"large",
      shape:"pill",
      width:300,
    })

  }

  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]))
  }

  handleLogin(response:any){
      if(response){
        //decode the token 
        const payload = this.decodeToken(response.credential);

        // store ins session 
          sessionStorage.setItem("loggedInUser",JSON.stringify(payload))
        
        //navigate to home 
        this.router.navigate(["menu"])
      }
  }
} 
