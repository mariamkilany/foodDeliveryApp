import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);

  const localData = sessionStorage.getItem('loggedInUser');

  if(localData){
    return true
  }else{
    router.navigate(["home"]);
    setTimeout(() => {
      const alertElement = document.createElement('div');
      alertElement.classList.add('alert', 'alert-danger', 'fixed-top' ,'position-absolute','alertSection','start-0');
      alertElement.textContent = ' You must sign in first.';
      document.body.appendChild(alertElement);

      setTimeout(() => {
        document.body.removeChild(alertElement);
      }, 3000); // Remove after 3 seconds
    }, 0);

    return false;
  }

};
