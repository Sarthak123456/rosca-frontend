import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedInUser:string|null = 'None';
  token:string|null = 'None';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    this.loggedInUser = localStorage.getItem("loggedInUser");
    const currentPath = this.route.snapshot.url[0].path;

    if(!this.token && currentPath !== 'signup' && currentPath !== 'tnc'){
      this.router.navigate(['/login']);


    }


    // console.log("this.loggedInUser ngOnInit = " ,this.loggedInUser);

  }

  ngAfterContentInit(){


    //   this.loggedInUser = localStorage.getItem("loggedInUser");

    // console.log("this.loggedInUser ngAfterContentInit = " ,this.loggedInUser);



  }

  // ngAfterContentChecked(){
  //   if(this.loggedInUser != undefined || this.loggedInUser != 'None'){
  //     this.loggedInUser = localStorage.getItem("loggedInUser");
  //   }
  //   console.log("this.loggedInUser after checked = " ,this.loggedInUser);

  // }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    // this.router.navigate(['/']);
  }
}
