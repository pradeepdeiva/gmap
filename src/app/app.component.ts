import { HttpClient } from '@angular/common/http';
import { TaggedTemplateExpr } from '@angular/compiler';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AppserviceService } from './appservice.service';
import { tap } from 'rxjs/operators';
import { City } from './model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  title = 'GMap';
  mylookupservice: any;

  constructor(private http:HttpClient,private app: AppserviceService) {
  }

  // ngAfterViewInit(): void {
  //   // Load google maps script after view init
  //   const DSLScript = document.createElement('script');
  //   DSLScript.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCbWWmyq9uDpza7nI1ZPwLZT_Y2Plt_ajM';
  //   DSLScript.type = 'text/javascript';
  //   document.body.appendChild(DSLScript);
  //   document.body.removeChild(DSLScript);
  // }
  options: string[] = ['One', 'Two', 'Three'];

myControl = new FormControl('');
  ngOnInit() {
    this.results = [
      {name:'AA'},
      {name:'BB'},
      {name:'CC'},
      {name:'DD'},
      {name:'EE'}
    ];

  }

  lat:any = '';
  long:any= '';

    text: string = '';

    results: any[] = [];

    output: any[] = [];

    search(event:any){
      console.log(event.query as HTMLInputElement)
      let filtered: any[] = [];
      let query = event.query.toLowerCase() as HTMLInputElement;
      for (let i = 0; i < this.results.length; i++) {
        let country = this.results[i];
        if (country.name.toLowerCase().indexOf(query) == 0) {
          filtered.push(country);
        }
      }
  console.log(filtered)

      this.output = filtered;

      console.log(this.results)
    }

    searchMap(event:any){
      console.log(document.getElementById("value"))
      //console.log(this.app.getResults(document.getElementById("value")));

    }

  load(){

    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      resp => {
        console.log("Latitude: "+resp.coords.latitude);
        console.log("Longitude: "+resp.coords.longitude);

        this.lat = resp.coords.latitude;
        this.long = resp.coords.longitude;

      },
      err => {
        console.log("Not found Display")
      });
    }
  }

  currentLoction(){

    if(this.long != undefined && this.long != undefined){

      this.app.getCurrentLocation(this.lat,this.long).subscribe((ans) =>{
        console.log(ans.results[0].formatted_address);
      },error => {
        console.log("Failed")
      });

    }
    

  }

  display: any;
    center: google.maps.LatLngLiteral = {
        lat: 22.2736308,
        lng: 70.7512555
    };
    zoom = 6;

    moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
   
}
