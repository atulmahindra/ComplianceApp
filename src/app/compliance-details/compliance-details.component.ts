import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compliance-details',
  templateUrl: './compliance-details.component.html',
  styleUrls: ['./compliance-details.component.css']
})
export class ComplianceDetailsComponent implements OnInit {

  public search:any = '';
  locked: any[] = [];
  constructor() { }

  ngOnInit() {
    this.locked = [
      
      {Name: 'Rajesh Singh', User: 'Satish Tour & Travel', DLNO: 'AP265HDG236434', Gender: 'Male', registeredby: 'Rushi Indulekar', Status: 'registered',Dateofre : '07 July 2019 | 08:45 PM ',Action : 'VERIFY'},
      {Name: 'Rahul Rao', User: 'Satish Tour & Travel', DLNO: 'AP265HDG236434', Gender: 'Male', registeredby: 'Rushi Indulekar', Status: 'registered',Dateofre : '07 July 2019 | 08:45 PM ',Action : 'VERIFY'},
      {Name: 'Praveen Kumar ', User: 'Satish Tour & Travel', DLNO: 'AP265HDG236434', Gender: 'Male', registeredby: 'Rushi Indulekar', Status: 'registered',Dateofre : '07 July 2019 | 08:45 PM ',Action : 'VERIFY'},
      {Name: 'Rupali Ram ', User: 'Satish Tour & Travel', DLNO: 'AP265HDG236434', Gender: 'Female', registeredby: 'Rushi Indulekar', Status: 'registered',Dateofre : '07 July 2019 | 08:45 PM ',Action : 'VERIFY'},
      {Name: 'Purab Kadam', User: 'Satish Tour & Travel', DLNO: 'AP265HDG236434', Gender: 'Male', registeredby: 'Rushi Indulekar', Status: 'registered',Dateofre : '07 July 2019 | 08:45 PM ',Action : 'VERIFY'},
      {Name: 'Yagya Das', User: 'Satish Tour & Travel', DLNO: 'AP265HDG236434', Gender: 'Male', registeredby: 'Rushi Indulekar', Status: 'registered',Dateofre : '07 July 2019 | 08:45 PM ',Action : 'VERIFY'},
      {Name: 'Pramod Achari', User: 'Satish Tour & Travel', DLNO: 'AP265HDG236434', Gender: 'Male', registeredby: 'Rushi Indulekar', Status: 'registered',Dateofre : '07 July 2019 | 08:45 PM ',Action : 'VERIFY'},
      
  ]
  }
  

}
