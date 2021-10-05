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
    this.titleService.setTitle(([this.titleService.getTitle() , title]).join(' | '));
}

  ngOnInit(): void {
  }

}
