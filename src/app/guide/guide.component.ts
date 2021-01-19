import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor() { }

 
  ngOnInit(): void {
    AOS.init();
  }


}
