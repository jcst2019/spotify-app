import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit {

mockCover:TrackModel={
  cover:'https://www.hola.com/horizon/landscape/701889d25af9-shakira-z.jpg',
  album:'Gioli & Assi',
  name:'BEBE(OFICIAL)',
  url:'http://localhost/track.mp3',
  _id:1
}

  constructor(){

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
