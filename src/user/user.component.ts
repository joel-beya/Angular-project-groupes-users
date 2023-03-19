import { Component, Input, OnInit } from '@angular/core';
import { Groupe } from 'src/groupe';
import { User } from 'src/user';

@Component({
  selector: 'app-user',
     templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User = {
    id_user : 1,
    nom : "user1",
    mdp : "mdp1"
  }
  @Input() groupes: Groupe[] = [];

  constructor() { }

  ngOnInit() {
  }
  getId_user(){
    return this.user.id_user;
  }
  //verifier si un utilisateur est deja dans un groupe
  verifUserInGroupe(){
    let res : boolean = false;
    this.groupes.forEach(groupe => {
        groupe.liste_user.forEach(user => {
          if(user.id_user === this.user.id_user){
            res= true;
          }
          else{
            res= false;
          }
        });
      });

    return res;
  }

  //Dire combien il reste de place dans un groupe
  restePlace(idg : number){
    let res : number = 0;
    this.groupes.forEach(groupe => {
      if(groupe.id_groupe === idg ){
        res = groupe.nbr_user - groupe.liste_user.length;
      }
    });
    return res;
  }

  rejoindreGroupe(idg : number){

      this.groupes.forEach(groupe => {
        if(groupe.id_groupe === idg ){
          if(groupe.liste_user.length-1 <= groupe.nbr_user ){
            if(this.verifUserInGroupe() === false){
              groupe.liste_user.push(this.user);
            }
            else{
              console.log("Vous etes deja dans un groupe");
            }
          }
          else{
            console.log("Le groupe est complet");
          }

        }


      })
  }

  //Quitter un groupe
  quitterGroupe(idg : number){
    this.groupes.forEach(groupe => {
      if(groupe.id_groupe === idg ){
        groupe.liste_user.forEach(user => {
          if(user.id_user === this.user.id_user){
            groupe.liste_user.splice(groupe.liste_user.indexOf(user),1);
          }
        });
      }
    });
  }
  //Rejoindre un groupe aleatoirement
  rejoindreGroupeAlea(){
    let idg : number = Math.floor(Math.random() * this.groupes.length);
    this.rejoindreGroupe(idg);
  }
}
