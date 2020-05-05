import { Component, OnInit, ɵConsole } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  latitude = 26.5123;
  longitude = 80.2329;
  zoom = 8;
  address: string;
  geoCoder;
  stockholderList:any = [];

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.mapService.getStockholders().subscribe( (res:any) => {
      this.stockholderList = res.results;
      console.log(this.stockholderList)
    });
  }

  selectedStockholder(stockholder:any) {
    console.log(stockholder);
  }

  onMouseOver(infoWindow,) {
    infoWindow.open();
  }

  onMouseOut(infoWindow) {
    infoWindow.close();
  }

}
