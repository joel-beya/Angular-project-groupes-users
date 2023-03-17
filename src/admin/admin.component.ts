
import { Component, Input, OnInit } from '@angular/core';
import { Groupe } from 'src/groupe';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  id: string = "admin";
  mdp: string = "admin";
  //Liste de groupes
  groupes: Groupe[] = [];

  //Recevoir en entrée le nombre d'utilisateurs
  nbUsers: string = "";
  nbGroupes: string = "";

  //Choisir en entrée une configuration LASTMIN ou LASTMAX
  config: string ="";

  constructor() { }

  ngOnInit() {
  }

  //Méthode pour vérifier si l'admin est connecté
  //Si oui, on affiche la page admin
  //Sinon, on affiche un message d'erreur
  connecter() {
    if (this.id == "admin" && this.mdp == "admin") {
      console.log("Connecté");
    }
    else {
      console.log("Erreur");
    }
  }
  //recuperer le nombre d'utilisateurs
  getNbUsers() {
    return this.nbUsers;
  }
  //modifier le nombre d'utilisateurs
  setNbUsers(nbUsers: string) {
    this.nbUsers = nbUsers;
  }
  //recuperer le nombre de groupes
  getNbGroupes() {
    return this.nbGroupes;
  }
  //modifier le nombre de groupes
  setNbGroupes(nbGroupes: string) {
    this.nbGroupes = nbGroupes;
  }
  //recuperer la configuration
  getConfig() {
    return this.config;
  }
  //modifier la configuration
  setConfig(config: string) {
    this.config = config;
  }
  //Affiche le nombre d'utilisateurs, de groupes et la configuration depuis le fichier admin.component.html
  onSubmit() {
    console.log("Nombre d'utilisateurs: " + this.nbUsers);
    console.log("Nombre de groupes: " + this.nbGroupes);
    console.log("Configuration: " + this.config);
  }


  //
  creerGroupe(): Promise<Groupe[]>{
    return new Promise((resolve) => {
      //convertir le nombre de groupes en entier
      let nbrG = parseInt(this.nbGroupes);
      //convertir le nombre de user en entier
      let nbrU = parseInt(this.nbUsers);
      //initialiser l'interface Groupe
      let groupe: Groupe = {
        id_groupe: 0,
        nbr_user: 0,
        liste_user: []
      };

      if(nbrU % nbrG == 0){
        //ceéer la liste de groupe selon le nombre de groupes
        for(let i = 1; i <= nbrG; i++){
          groupe.id_groupe = i;
          groupe.nbr_user = nbrU/nbrG;
          this.groupes.push(groupe);
          groupe = {
            id_groupe: 0,
            nbr_user: 0,
            liste_user: []
          };

        }
      }
      else{
        // Si la configuration vaut LAST_MIN, le dernier groupe a moins d’utilisateurs que les autres (ex : 19 utilisateurs et 5 groupes => 4 groupes de 4 et 1 groupe de 3)
        if(this.config ==="LAST_MIN"){
          let cptU = 0;
          if(nbrU % nbrG == 1){
            for(let i = 1; i <= nbrG; i++){
              groupe.id_groupe = i;
              groupe.nbr_user = Math.floor(nbrU/nbrG);
              cptU += groupe.nbr_user;
              this.groupes.push(groupe);
              groupe = {
                id_groupe: 0,
                nbr_user: 0,
                liste_user: []
              };
            }
           this.groupes[nbrG-1].nbr_user -=cptU-nbrU;
          }
          else{
            for(let i = 1; i <= nbrG; i++){
              groupe.id_groupe = i;
              groupe.nbr_user = Math.floor(nbrU/nbrG) + 1;
              cptU += groupe.nbr_user;
              this.groupes.push(groupe);
              groupe = {
                id_groupe: 0,
                nbr_user: 0,
                liste_user: []
              };
            }
            this.groupes[nbrG-1].nbr_user -=cptU-nbrU;
          }
        }
        else if(this.config === "LAST_MAX"){
          let cptU = 0;
          for(let i = 1; i <= nbrG; i++){
            groupe.id_groupe = i;
            groupe.nbr_user = Math.floor(nbrU/nbrG);
            cptU += groupe.nbr_user;
            this.groupes.push(groupe);
            groupe = {
              id_groupe: 0,
              nbr_user: 0,
              liste_user: []
            };
          }
          this.groupes[nbrG-1].nbr_user -=cptU-nbrU;
        }
        else{
          console.log("Erreur configuration");
        }
      }
      resolve(this.groupes);
    });
  }
   //Afficher la liste des groupes
   afficherGroupe(){
    this.creerGroupe().then((groupes) => {
      console.log(groupes);
    });
  }
  //afficher la configuration, le nombre d'utilisateurs et de groupes
  afficherConfig(){
    console.log("Nombre d'utilisateurs: " + this.nbUsers);
    console.log("Nombre de groupes: " + this.nbGroupes);
    console.log("Configuration: " + this.config);
  }
  //recuperer la liste des groupes
  getGroupes(){
    return this.groupes;
  }
}

