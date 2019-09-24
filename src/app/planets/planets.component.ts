import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(private http: HttpClient) { }

catz = ''   
hidden = true;
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


  radius = 250

  ngOnInit() {

  
 

    console.log('ionViewDidLoad PostsPage');

  
      this.http.get('assets/posts.json').subscribe(data => {
          this.posts = data;

        
         
            
     console.log("Sposts.", this.posts);

   
  
   

   
    

     
    
  });


  

}


toggleCollapse() {
  this.show = !this.show
}

toggleWindow(title, image, video, audio, author, date, category, subtitle, description, pdf ) {
this.title = title;
this.image = image;
this.video = video;
this.audio = audio;
this.author = author;
this.date = date;
this.category = category;
this.subtitle = subtitle;
this.description = description;
this.pdf = pdf;


this.hidden = !this.hidden;

console.log(this.pdf, this.title)

}


}
