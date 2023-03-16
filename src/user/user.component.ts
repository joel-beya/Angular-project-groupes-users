import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id_user : string="";
  mdp : string="";

  constructor() { }

  ngOnInit() {
  }
  getId_user(){
    return this.id_user;
  }
}
