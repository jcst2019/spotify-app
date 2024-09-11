import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit {

mockCover:any={
  cover:'https://www.hola.com/horizon/landscape/701889d25af9-shakira-z.jpg',
  album:'Gioli & Assi',
  name:'BEBE(OFICIAL)',
}

  constructor(){

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
