import { Component, OnInit } from '@angular/core';
import { ConstantPool } from '@angular/compiler';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public commonService:CommonService) { }
 
  ngOnInit() {
    
  }

  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };

  onToolbarMenuToggle(){
    console.log('toggle', this.commonService.isMenuOpen);
    this.commonService.toggleMenu();
  }

}
