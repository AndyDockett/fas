import { Component, OnInit, ChangeDetectorRef, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MapsAPILoader } from '@agm/core';


import { AgmCoreModule } from '@agm/core';




var google:any;







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 

  
  public convertStringToNumber (value: string): number {
    return +value;

  }

  isSnazzyInfoWindowOpened: boolean = false;

  constructor(private http: HttpClient, @Inject(ChangeDetectorRef) private changeDetectorRef: ChangeDetectorRef,  private mapsAPILoader: MapsAPILoader) { 

 
  

}
toggleSnazzyInfoWindow() {
  this.isSnazzyInfoWindowOpened = !this.isSnazzyInfoWindowOpened;
  console.log(`toggleSnazzyInfoWindow ${this.isSnazzyInfoWindowOpened}`);
}


snazzyInfoWindowIsToggled($isOpen: boolean) {
  console.log(`snazzyInfoWindowIsToggled ${$isOpen}`);
  // Keep isSnazzyInfoWindowOpened up-to-date (e.g. if window was closed on map click)
  this.isSnazzyInfoWindowOpened = $isOpen;
  // Force detect changes.
  // Not necessarily needed. Depends on your projet
  // Here needed if window was closed on map click
  this.changeDetectorRef.detectChanges();
}



catz = ''   
hidden = true;
hidden2 = true;
latlngBounds: any;
show:boolean = false;
post;
  posts;
  title = 'fasma';
  image;
  video;
  audio;
nexttitle;


maps;

 author;
 date;
category;
subtitle;
 description;
items;
pdf;

categoria;

proyecto = false;
equipo = false;

 styles=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
 
  lat: number = -32.931978;
  lng: number = -69.539617;

  ngOnInit() {


 

    console.log('ionViewDidLoad PostsPage');

  
      this.http.get('assets/posts.json').subscribe(data => {
          this.posts = data;

        
         
            
     console.log("Sposts.", this.posts);

   
  
   

   
    

     
    
  });


  
   
  }


  toggleCollapse() {
    this.show = !this.show

    this.proyecto = false;
    this.equipo = false;
  }

  toggleWindow(title, image, video, audio, author, date, category, subtitle, description, pdf ) {

this.image = image;
this.video = video;
this.audio = audio;
this.author = author;
this.date = date;
this.category = category;
this.subtitle = subtitle;
this.description = description;
  this.pdf = pdf  
  
  this.hidden = !this.hidden;

  }


  toggleWindowProyecto() {
    this.equipo = false;
    this.proyecto = true;
    this.hidden = !this.hidden;

      }


      toggleWindowEquipo() {
      
        this.proyecto = false;
        this.equipo = true;
        this.hidden = !this.hidden;
    
          }
    




  toggleWindow2(title, image, video, audio, author, date, category, subtitle, description ) {
    this.title = title;
    this.image = image;
    this.video = video;
    this.audio = audio;
    this.author = author;
    this.date = date;
    this.category = category;
    this.subtitle = subtitle;
    this.description = description
        
      
      this.hidden2 = !this.hidden2;
    
      }

  
catzClick(cat){

  this.catz = cat;
  this.onMapReady()
}


onMapReady() {

  if (this.posts.length) {
    this.mapsAPILoader.load().then(() => {
        this.latlngBounds = new window['google'].maps.LatLngBounds();
        this.posts.forEach((post) => {
          this.latlngBounds.extend(new window['google'].maps.LatLng(post.lat, post.lng));
        });
      }
    );
  }

}

}
