import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { simpson } from './interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'simpson';

  simpsons: simpson[] = [];
  

  constructor(private http: HttpClient) {}
 
  ngOnInit(){ this.mesSimpsons();}
  
     async mesSimpsons(){
     const reponse = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=6');
     const data: simpson[]= await reponse.json();
      console.log(data);
      
      //permet d'afficher mes donnees apres dans mon html
      this.simpsons = data;
   
   //mon bouton pour afficher mes quotes lors du clic

}

async affiche(item:any){
  let reponse = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${item.character}`);
  let data = await reponse.json();

  console.log(data[0].quote);
}
}