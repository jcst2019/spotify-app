import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit{

 
  // mockTracksList=[
  //   {
  //     name:'BEBE1(REOFICIAL)'
  //   },
  //   {
  //     name:'BEBE2(REOFICIAL)'
  //   },
  //   {
  //     name:'BEBE3(REOFICIAL)'
  //   }
  // ];

  mockTracksList: Array<TrackModel> = [];

  ngOnInit(): void {
  //  console.log({data});
  //  const data: any = (dataRaw as any).default;
   const {data}: any = (dataRaw as any).default;
   console.log({data});
   this.mockTracksList=data;
   
  }


}
