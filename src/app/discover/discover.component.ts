import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css', './additional.css']
})
export class DiscoverComponent {
  constructor(
    private route: ActivatedRoute,
    private _router:Router
      ){
        this.route.paramMap.pipe(
          switchMap((params: ParamMap) =>
            this.activePage = params.get('page')!
          )
        );
        this.pages.forEach(page => {
          if(page.value!=this.activePage){
            page.active=false;
          }
          else{
            page.active=true;
          }
        });
    }
    activePage:string="";
    pages:any[]=[
      {
        name:"Our Services",
        value:"presentation",
        active:true,
      },
      {
        name:"Drill & Blast",
        value:"drill",
        active:false,
      },
      {
        name:"Grade Control",
        value:"grade",
        active:false,
      },
      {
        name:"Equipment Rental",
        value:"rental",
        active:false,
      },
      {
        name:"Others",
        value:"others",
        active:false,
      },
    ];

    contents:any[] =[
      {
        name: "Our Services",
        value:"presentation",
        content:{
          slogan:"We are specialized in surface mining !",
          paragraphs:[
            {
              text: "Unified Mining Group is trusted company that offers top-notch surface mining and exploration drilling services from Burkina Faso throughout West Africa.",
              class:"full paragraph"
            },
            {
              text: "As a leading contractor specialized in surface mining and drilling exploration, our company is committed to delivering high-quality, efficient, and safe drilling and grade control solutions and services to meet the needs of our clients in the mining industry. With years of experience and a focus on innovation, we ensure the success of your project from exploration to core extraction.",
              class:"full paragraph"
            },
            {
              text: "We are also enthousiast to contract for other mining related services \n Load & Haul ,\n Drill and Blast, Equipment Rental, Tailings Dums construction, Exploration & Grade control drilling and technical assistance throughout West Africa when given the opportunity. Unified Mining Group (UMG) welcomes the opportunity to provide a submission for the provision of the pre-split and production drilling services.",
             class:"full paragraph"
            },
  
          ],
          addings:[
            {
              class:"full-width cards",
              type: "card",
              cards:[
                {
                  name: "DRILL & BLAST",
                  url: "drill",
                  imageSrc: "drill.jpg",
                },
                {
                  name: "GRADE CONTROL",
                  url: "grade",
                  imageSrc: "grader.png",
                },
                {
                  name: "FLEET LOCATION",
                  url: "rental",
                  imageSrc: "locate.jpg",
                },
                {
                  name: "OTHERS",
                  url: "others",
                  imageSrc: "locate.jpg",
                }    
              ]
            }

          ],
            },
        more:{
          text: "You might also be interested in ",
          content:[
            {
              name: "OUR COMPANY",
              url: "/about/company",
              imageSrc: "drilling.jpg",
            },
            {
              name: "OUR PROJECTS",
              url: "/projects",
              imageSrc: "drill.jpg",
            },
            {
              name: "OUR PARTNERS",
              url: "/partners",
              imageSrc: "locate.jpg",
            }
          ],
        },

      },
      {
        name: "Drill & Blast",
        value:"drill",
        content:{
          slogan:"We offers all types of services in surface mining !",
          paragraphs:[
            {
              text: "At Unified Mining Group, we provides efficient and cost-effective drilling operations, prioritizing safety, environmental protection, and productivity.",
              class:"full paragraph"
            },
            {
              text: "As a leading contractor specialized in surface mining and drilling exploration, our company is committed to delivering high-quality, efficient, and safe drilling and grade control solutions and services to meet the needs of our clients in the mining industry. With years of experience and a focus on innovation, we ensure the success of your project from exploration to extraction. With years of experience and a focus on innovation, we ensure the success of your project from exploration to core extraction.",
              class:"full paragraph"
            },
            {
              text: "Our commitment to environmental stewardship guides every phase of our work, while advanced technologies enable us to deliver valuable insights on subsurface formations. Ultimately, we aim to maximize productivity and contribute to the sustainable development of West-African mining industry. ",
              class: "quote paragraph"
            }
          ],
          addings:[
            {
              class:"full-width two-blocks",
              type: "block",
              blocks:[
                {
                  class: "left-block text-block",
                  text:true,
                  title:"Drilling Services",
                  paragraphs:[
                    { 
                      // text: "As a leading mining contractor specializing in production drilling and grade control, our company is committed to delivering high-quality, efficient, and safe drilling solutions to meet the needs of our clients in the mining industry. With years of experience and a focus on innovation, we ensure the success of your project from exploration to core extraction."
                      text: "By carefully selecting optimal operating conditions and equipments, we ensure minimal costs in reaching target depths without compromising personnel safety or the quality of geological data. Our commitment to environmental stewardship guides every phase of our work, while advanced technologies enable us to deliver valuable insights on subsurface formations. Ultimately, we aim to maximize productivity and contribute to the sustainable development of Burkina Faso's mining industry."
                    },
                    { 
                      text: "We provide a range of processing and refining services to help you extract the maximum value from your mineral resources.",
                      class: "quote"
                    },
                    { 
                      text: "UMG can also manage the entire logistics chain, ensuring that your project's materials and products reach their destinations on time and within budget."
                    },
                    // {
                    //   text: "Our commitment to environmental stewardship guides every phase of our work, while advanced technologies enable us to deliver valuable insights on subsurface formations. Ultimately, we aim to maximize productivity and contribute to the sustainable development of Burkina Faso's mining industry. ",
                    //   class: "quote"
                    // }
                  ],
        
                },
                {
                  class: "right-block ",
                  text:false,
                  imageSrc: "fleet4.jpg",
                  imageClass:"block-img",
                  phrase:"Maximizing Your Mining Project's Potential"
                  
                }
              ],
        
            },
          ],
            },
        more:{
          text: "You might also be interested in ",
          content:[
            {
              name: "OUR COMPANY",
              url: "/about/company",
              imageSrc: "drilling.jpg",
            },
            {
              name: "OUR PROJECTS",
              url: "/projects",
              imageSrc: "drill.jpg",
            },
            {
              name: "OUR PARTNERS",
              url: "/partners",
              imageSrc: "locate.jpg",
            },
            {
              name: "FLEET RENTAL",
              url: "/services/rental",
              imageSrc: "fleet5.jpg",
            }
          ],
        },

      },
      {
        name: "Grade Control",
        value:"grade",
        content:{
          slogan:"We offers great grade control services !",
          paragraphs:[
            {
              text: "At Unified Mining Group, we offer comprehensive grade control services and techniques from Burkina Faso throughout West Africa.",
              class:"full paragraph"
            },
            {
              text: "As a leading contractor with years of experience, our company has developped techniques that are critical to optimizing the efficiency and profitability of mining operations on our clients projects. ",
              class:"full paragraph"
            },
            {
              text: "Our grade control approach involves precise sampling, detailed analysis, and real-time data to ensure accurate ore delineation and prevent dilution, enabling our clients to maximize the value of their resources.",
              class:"full paragraph"
            }
          ],
          addings:[
            {
              class:"full-width two-blocks",
              type: "block",
              blocks:[
                {
                  class: "left-block text-block",
                  text:true,
                  title:" GRADE CONTROL & SAMPLING",
                  paragraphs:[
                    { 
                      text: "Through experience we developped our techniques for better efficiency espicially under West-African geological and weather conditions."
                    },
                    { 
                      text: "We use these advanced techniques, geological modeling, assaying, and on-site monitoring, to deliver reliable information that informs mining decisions and enhances recovery rates. Our commitment to accuracy and efficiency in grade control not only reduces operational risks but also ensures sustainable and responsible resource extraction.."
                    }
                  ],
        
                },
                {
                  class: "right-block ",
                  text:false,
                  imageSrc: "grade.png",
                  imageClass:"block-img",
                  phrase:"Great Control techniques for better decisionning"
                  
                }
              ],
        
            },
          ],
            },
        more:{
          text: "You might also be interested in ",
          content:[
            {
              name: "OUR COMPANY",
              url: "/about/company",
              imageSrc: "drilling.jpg",
            },
            {
              name: "OUR PROJECTS",
              url: "/projects",
              imageSrc: "drill.jpg",
            },
            {
              name: "OUR PARTNERS",
              url: "/partners",
              imageSrc: "locate.jpg",
            }
          ],
        },

      },
      {
        name: "Equipment Rental",
        value:"rental",
        content:{
          slogan:"We rent equipments for all your mining related projects !",
          paragraphs:[
            {
              text: "Unified Mining Group, through its partnership with major equipments providers also provide a comprehensive fleet of rental machinery for all surface mining operations.",
              class:"full paragraph"
            },
            {
              text: "Our diverse range of equipment includes everything from excavators, bulldozers, and wheel loaders to dump trucks, graders, and drilling rigs, all designed to meet the demanding needs of the mining industry.",
              class:"full paragraph"
            },
          ],
          addings:[
            {
              class:"full-width two-blocks",
              type: "block",
              blocks:[
                {
                  class: "left-block text-block",
                  text:true,
                  title:"FLEET RENTAL",
                  paragraphs:[
                    { 
                      text: "Unified Mining Group has developped partnership with equipments providers ensuring that every piece of machinery in our rental fleet is maintained to the highest standards of safety and performance, providing reliability and efficiency on site."
                    },
                    { 
                      text: "Whether for short-term projects or long-term operations, our flexible rental solutions help mines reduce capital expenditures while accessing the latest technology and equipment to maximize productivity and minimize downtime."
                    },
                  ],
        
                },
                {
                  class: "right-block ",
                  text:false,
                  imageSrc: "fleet5.jpg",
                  imageClass:"block-img",
                  phrase:"BEST EQUIPMENTS AT AFFORDABLE PRICES !"
                  
                }
              ],
        
            },
            {
              class:"full-width partners",
              type:"slide",
              blocks:[
                {
                  name:"bia"
                },
                {
                  name: "corica"
                },
                {
                  name: "epiroc"
                }, 
                {
                  name: "neemba"
                },
                {
                  name: "prd"
                },
                {
                  name: "sandvik"
                }
              ]
            }
          ],
            },
        more:{
          text: "You might also be interested in ",
          content:[
            {
              name: "DRILL & BLAST",
              url: "/services/drill",
              imageSrc: "drill.jpg",
            },{
              name: "OUR COMPANY",
              url: "/about/company",
              imageSrc: "drilling.jpg",
            },
            {
              name: "OUR PROJECTS",
              url: "/projects",
              imageSrc: "drill.jpg",
            },
            {
              name: "OUR PARTNERS",
              url: "/partners",
              imageSrc: "locate.jpg",
            }
          ],
        },

      },
      {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        name: "Others",
        value:"others",
        content:{
          slogan:"We also contract concerning others mining services !",
          paragraphs:[
            {
            text: "Unified Mining Group also offers services for mining projects such as  Load & Haul , Technical Support, QHSE Services, Tailings Dums construction, Exploration...",
              class:"full paragraph"
            },
            {
              text: "We have the experience and the expertise to provide all types of mining related services and we are eager to work for small and bigger projects. Depending of the need we can operate on site as full operator and as part of a bigger team to get the job done.",
              class:"full paragraph"
            },
          ],
          
            },
        more:{
          text: "You might also be interested in ",
          content:[
            {
              name: "OUR COMPANY",
              url: "/about/company",
              imageSrc: "drilling.jpg",
            },
            {
              name: "OUR PROJECTS",
              url: "/projects",
              imageSrc: "drill.jpg",
            },
            {
              name: "OUR PARTNERS",
              url: "/partners",
              imageSrc: "locate.jpg",
            }
          ],
        },

      },
      
    ];

  // slogan="We are specialized in drill & blast and grade control !";


  navigate(npage:any){
    //console.log(page);
     this.activePage=npage.value;
    this.pages.forEach(page => {
      if(page.value!=npage.value){
        page.active=false;
      }
      else{
        page.active=true;
      }
    });
    //console.log(this.pages); 
    this._router.navigate(['/services/'+npage.value]);
  }
  navigateTo(page:string){
    this.activePage=page;
    this._router.navigate(['/services/'+page]);
    this.pages.forEach(pg => {
      if(pg.value!=page){
        pg.active=false;
      }
      else{
        pg.active=true;
      }
    });
  }

  goTo(page:any){
    console.log(page);
    this._router.navigate([page.url]);
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.activePage = params.get('page')!
      )
    );
    if(this.activePage==""){
      this.activePage="presentation";
      this._router.navigate(['/services/presentation']);
    }
    this._router.navigate(['/services/'+this.activePage]);

  }
}
