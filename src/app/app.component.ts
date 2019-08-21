import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'blogger';

  constructor(public router: Router,public commonService:CommonService) {}

  ngOnInit() {
    
  }

  onToolbarMenuToggle(){
    console.log('toggle', this.commonService.isMenuOpen);
    this.commonService.toggleMenu();
  }

}
