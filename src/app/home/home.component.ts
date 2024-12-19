import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface block{
  class:string;
  text:boolean;
  imageSrc?:string;
  imageClass?:string;
  title?:string;
  paragraphs?:string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private _router:Router
  ){}

  slides:any[]=[
    {
      name:"slide1",
      src:"slide1.jpg"
    },
    {
      name:"slide2",
      src:"slide2.jpg"
    },
  ]; 

  responsiveOptions: any[] =[
    {
      breakpoint: '920px',
      numVisible: 1,
      numScroll: 1
  },
  {
      breakpoint: '920px',
      numVisible: 2,
      numScroll: 1
  },
  ];

  cards:any[]=[
    {
      name: "OUR SERVICES OFFERRING",
      url: "/umg/services/presentation",
      description: "DRILL & BLAST, GRADE CONTROL ...",
    },
    {
      name: "OUR COMPANY",
      url: "/umg/about/company",
      description: "An incredibly efficient hand in work!",
    },
    {
      name: "OUR LOCATIONS",
      url: "/umg/projects",
      description: "Efficient work gives big results !",
    }
  ];

  services:any[]=[
    {
      name: "DRILL & BLAST",
      url: "/services/drill",
      imageSrc: "drill.jpg",
    },
    {
      name: "GRADE CONTROL",
      url: "/services/grade",
      imageSrc: "grader.png",
    },
    {
      name: "FLEET LOCATION",
      url: "/services/rental",
      imageSrc: "locate.jpg",
    }
  ];

  addings:any[]=[
    {
      class:"full-width two-blocks",
      blocks:[
        {
          class: "left-block text-block",
          text:true,
          title:"A process made for better results",
          paragraphs:[
            { 
              text: "In the feasibility and pre-production stages, our technical experts combine metallurgical expertise with our experience in plant design and engineering to deliver on-time, proven and cost effective solutions for small-scale plant upgrades, retrofits, greenfield and brownfield projects."
            },
            { 
              text: "Our inspection and sampling services support both buyers and sellers of high value cargos.  We carry out cargo and carrying vessel inspection, stockpile monitoring equipment testing and commercial analysis."
            },
            { 
              text: "In addition to providing a full range of standard analysis and testing services, we can supply state-of-the-art mobile laboratories and even install and staff on-site laboratories to give you your own customized testing facilities – anywhere in the world."
            }
          ],

        },
        {
          class: "right-block ",
          text:false,
          imageSrc: "show.jpg",
          imageClass:"block-img",
          
        }
      ],

    },
    // {
    //   class:"full-width two-blocks",
    //   blocks:[
    //     {
    //       class: "left-block",
    //       text:false,
    //       imageSrc: "shows.jpg",
    //       imageClass:"block-img",
    //     },
    //     {
    //       class: "right-block text-block",
    //       text:true,
    //       title:"A process made for better results",
    //       paragraphs:[
    //         { 
    //           text: "In the feasibility and pre-production stages, our technical experts combine metallurgical expertise with our experience in plant design and engineering to deliver on-time, proven and cost effective solutions for small-scale plant upgrades, retrofits, greenfield and brownfield projects."
    //         },
    //         { 
    //           text: "Our inspection and sampling services support both buyers and sellers of high value cargos.  We carry out cargo and carrying vessel inspection, stockpile monitoring equipment testing and commercial analysis."
    //         },
    //         { 
    //           text: "In addition to providing a full range of standard analysis and testing services, we can supply state-of-the-art mobile laboratories and even install and staff on-site laboratories to give you your own customized testing facilities – anywhere in the world."
    //         }
    //       ],
          
    //     }
    //   ],

    // }

  ];

  navigateTo(page:string){
    console.log(page);
    
    this._router.navigate([page]);
  }


}

