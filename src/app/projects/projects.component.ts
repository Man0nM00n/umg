import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(    
                private _router:Router,
                ){}

  contents:any[]=[
    {
      name: "Our Projects",
      slogan: "",
      content:{
        paragraphs:[
  
        ]
      }
    },
    {
      name: "Our Projects",
      slogan: "",
      content:{
        paragraphs:[
  
        ]
      }
    }
  ];
  more:any={
    text: "You might also be interested in ",
    content:[
      {
        name: "OUR COMPANY",
        url: "/about/company",
        imageSrc: "drilling.jpg",
      },
      {
        name: "OUR SERVICES",
        url: "/services/presentation",
        imageSrc: "drill.jpg",
      },
      {
        name: "OUR PARTNERS",
        url: "/partners",
        imageSrc: "locate.jpg",
      }
    ],
  };

  goTo(page:any){
    console.log(page);
    this._router.navigate([page.url]);
  }

}
