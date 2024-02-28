import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const localData = sessionStorage  .getItem('loggedInUsers');

  if(localData != null){
    return true
  }else{

    // const alertDiv = document.createElement('div');
    // alertDiv.className = 'alert alert-warning alert-dismissible fade show';
    // alertDiv.role = 'alert';
    // alertDiv.innerHTML = `
    //   This is a warning alert—check it out!
    //   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    //     <span aria-hidden="true">&times;</span>
    //   </button>
    // `;
    // document.body.appendChild(alertDiv);
    return false;
  }

};
