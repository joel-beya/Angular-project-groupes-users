import { Component, Input, OnInit } from '@angular/core';
import { Groupe } from 'src/groupe';

@Component({
  selector: 'app-user',
     templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id_user : string="";
  mdp : string="";
  @Input() groupes: Groupe[] = [];

  constructor() { }

  ngOnInit() {
  }
  getId_user(){
    return this.id_user;
  }

  rejoindreGroupe(idg : number){

      this.groupes.forEach(groupe => {
        if(groupe.id_groupe === idg ){
          if(groupe.liste_user.length-1 <= groupe.nbr_user){
            groupe.liste_user.push(this.id_user);
          }
          else{
            console.log("Le groupe est complet");
          }

        }


      })
  }

}
