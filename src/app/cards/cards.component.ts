import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards: any[] = [
    { image: '../assets/images/Teen.png', text:"2020 TEENPATTI"},
    { image: '../assets/images/Ace.png', text:"1 DAY TEENPATTI"},
    { image: '../assets/images/thrice.png', text:"MUFLIS TEENPATTI"},
    { image: '../assets/images/thrice.png', text:"20-20 TEENPATTI"},
    { image: '../assets/images/thrice-ace.png', text:"EU TEENPATTI"},
    { image: '../assets/images/seven-heart.png', text:"LUCKY 7-A"},
    { image: '../assets/images/seven-twos.png', text:"LUCKY 7-B"},
    { image: '../assets/images/dragon-ace.png', text:"DRAGON TIGER B"},
    { image: '../assets/images/tiger-dragon.png', text:"20-20 DRAGON TIGER"},
    { image: '../assets/images/ten.png', text:"32 Cards"},
    { image: '../assets/images/eleven.png', text:"BACCARAT 1"},
    { image: '../assets/images/twelve.png', text:"BACCARAT 2"},
    { image: '../assets/images/thirteen.png', text:"EZUGI"},
    { image: '../assets/images/fourteen.png', text:"EVOLUTION"},
    { image: '../assets/images/fifteen.png', text:"TVBET"},
    { image: '../assets/images/sixteen.png', text:"VIVO"},
    { image: '../assets/images/seventeen.jpg', text:"SUPER SPADE CASINO"},
    { image: '../assets/images/eighteen.png', text:"BETGAMES CASIONO"},
    
  ];
}
