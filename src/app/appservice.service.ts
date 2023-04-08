import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { google } from 'google-maps';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { }

geoCodeApi='https://maps.googleapis.com/maps/api/geocode/json?latlng=';
accessKey='AIzaSyCbWWmyq9uDpza7nI1ZPwLZT_Y2Plt_ajM'


getCurrentLocation(lat:any,long:any):Observable<any>{
  
  lat= 13.3339;
  long= 79.8927;
  console.log(this.geoCodeApi+lat+','+long+'&key='+this.accessKey);
  return this.http.get(this.geoCodeApi+lat+','+long+'&key='+this.accessKey,
  {headers: new HttpHeaders()})
  .pipe(
    tap(
      success => console.log('Success'),
      error => 
        console.log('Error -> ',this.http.get('status')))
        );
    }

    getResults(value:any){
        return new google.maps.places.Autocomplete(value);

    }

}
