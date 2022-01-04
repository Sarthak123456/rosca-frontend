import { Component } from '@angular/core';
import{Router, NavigationEnd} from '@angular/router';

//declare gives Angular app access to ga function
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rosca';
  constructor(public router: Router){
      // this.router.events.subscribe(event => {
      //   if(event instanceof NavigationEnd){

      //     // console.log("urlAfterRedirects = " , event.urlAfterRedirects);
      //     gtag('config', 'G-QBTHH46710', {'page_path': event.urlAfterRedirects});
      //   }
      // })
  }

}
