import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tnc',
  templateUrl: './tnc.component.html',
  styleUrls: ['./tnc.component.css']
})
export class TncComponent implements OnInit {

  constructor(private titleService:Title) {
    const title = ['T&C'];
    // console.log(this.titleService.getTitle());

    if(this.titleService.getTitle().indexOf('|') !== -1){
      this.titleService.setTitle(([this.titleService.getTitle().split(' | ')[0] , title]).join(' | '));

    }else{
      this.titleService.setTitle(([this.titleService.getTitle() , title]).join(' | '));
    }
}

  ngOnInit(): void {
  }

}
