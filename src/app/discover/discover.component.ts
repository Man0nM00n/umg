import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
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
            // {
            //   class:"full-width two-blocks",
            //   type: "block",
            //   blocks:[
            //     {
            //       class: "left-block text-block",
            //       text:true,
            //       title:"Exploration Drilling",
            //       paragraphs:[
            //         { 
            //           text: "As a leading mining contractor specializing in production drilling and grade control, our company is committed to delivering high-quality, efficient, and safe drilling solutions to meet the needs of our clients in the mining industry. With years of experience and a focus on innovation, we ensure the success of your project from exploration to core extraction."
            //         },
            //         { 
            //           text: "We provide a range of processing and refining services to help you extract the maximum value from your mineral resources."
            //         },
            //         { 
            //           text: "UMG can also manage the entire logistics chain, ensuring that your project's materials and products reach their destinations on time and within budget."
            //         }
            //       ],
        
            //     },
            //     {
            //       class: "right-block ",
            //       text:false,
            //       imageSrc: "production.avif",
            //       imageClass:"block-img",
            //       phrase:"Maximizing Your Mining Project's Potential"
                  
            //     }
            //   ],
        
            // },
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
              name: "DRILL & BLAST",
              url: "services/drill",
              value: "drill",
              imageSrc: "drill.jpg",
            },
            {
              name: "GRADE CONTROL",
              url: "",
              value: "grade",
              imageSrc: "grader.png",
            },
            {
              name: "FLEET RENTAL",
              url: "/services",
              value: "rental",
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
                  title:"Exploration Drilling",
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
                  imageSrc: "production.avif",
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
              name: "DRILL & BLAST",
              url: "services",
              value: "drilling",
              imageSrc: "drill.jpg",
            },
            // {
            //   name: "GRADE CONTROL",
            //   url: "",
            //   imageSrc: "grader.png",
            // },
            {
              name: "FLEET RENTAL",
              url: "/services",
              value: "rental",
              imageSrc: "locate.jpg",
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
                  imageSrc: "production.avif",
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
              name: "DRILL & BLAST",
              url: "services",
              value: "drilling",
              imageSrc: "drill.jpg",
            },
            // {
            //   name: "GRADE CONTROL",
            //   url: "",
            //   imageSrc: "grader.png",
            // },
            {
              name: "FLEET RENTAL",
              url: "/services",
              value: "rental",
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
                  imageSrc: "production.avif",
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
              url: "services",
              value: "drilling",
              imageSrc: "drill.jpg",
            },
            // {
            //   name: "GRADE CONTROL",
            //   url: "",
            //   imageSrc: "grader.png",
            // },
            {
              name: "FLEET RENTAL",
              url: "/services",
              value: "rental",
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
              name: "DRILL & BLAST",
              url: "services",
              value: "drilling",
              imageSrc: "drill.jpg",
            },
            // {
            //   name: "GRADE CONTROL",
            //   url: "",
            //   imageSrc: "grader.png",
            // },
            {
              name: "FLEET RENTAL",
              url: "/services",
              value: "rental",
              imageSrc: "locate.jpg",
            }
          ],
        },

      },
      

      // {
      //   name: "Our team",
      //   value:"team",
      //   content:{
      //     slogan:"Our leadership team",
      //     blocks:[
      //       {
      //         imageSrc: "opm.png",
      //         name: "SAMUEL PAWENDTAORE KABRE",
      //         position: "OPERATIONS MANAGER",
      //         paragraphs:[
      //           {
      //             text: "He is the founder of the company and Operations Manager with a demonstrated history of working in the mining and construction industry. He is a seasoned mining engineer with over 7 years extensive training and working experience in drill and blast, logistics and haulage projects. He is an innovator who is enthusiastic.",
      //             class:"quote paragraph"
      //           },
      //           {
      //             text: "He led, direct, and control the activities of multiple business units and all their ongoing operations within a variety of entities in Burkina Faso and Africa at large so that the organisations achieve their short and long term financial and operating objectives as set by the overall corporate business plan.",
      //             class:"quote paragraph"
      //           },
      
      //         ]
      //       },
      //       {
      //         imageSrc: "tsm.png",
      //         name: "MAXWELL BENON-IB KUUZUME",
      //         position: "TECHNICAL SERVICES MANAGER",
      //         paragraphs:[
      //           {
      //             text: "Maxwell Benon-ib Kuuzume brings extensive local and expatriate experience in mining operations most especially drill and blast in west Africa and Africa at large, including managing diverse teams, expert technology and logistics, implementing effective strategies and building relationships with stakeholders.",
      //             class:"quote paragraph"
      //           },
      //           {
      //             text: "He has demonstrated exceptional leadership in overseeing mining operations in multiple African countries. Maxwell’s technical expertise and strategic thinking have been widely recognized in the mining industry, and he continues to inspire and mentor young professionals in the field. Finally, it is a delight to announce that Maxwell is also certified project Management professional (PMP) with sound experience in executing projects across West Africa.",
      //             class:"quote paragraph"
      //           },
      
      //         ]
      //       },
  
      //     ],
      //       },
      //   more:{
      //     text: "You might also be interested in ",
      //     content:[
      //       {
      //         name: "DRILL & BLAST",
      //         url: "services",
      //         value: "drilling",
      //         imageSrc: "drill.jpg",
      //       },
      //       // {
      //       //   name: "GRADE CONTROL",
      //       //   url: "",
      //       //   imageSrc: "grader.png",
      //       // },
      //       {
      //         name: "FLEET RENTAL",
      //         url: "/services",
      //         value: "rental",
      //         imageSrc: "locate.jpg",
      //       }
      //     ],
      //   },
      // }
    ];

  // slogan="We are specialized in drill & blast and grade control !";
  addings:any[]=[
    {
      class:"full-width two-blocks",
      blocks:[
        {
          class: "left-block text-block",
          text:true,
          title:"Exploration Drilling",
          paragraphs:[
            { 
              text: "As a leading mining contractor specializing in production drilling and grade control, our company is committed to delivering high-quality, efficient, and safe drilling solutions to meet the needs of our clients in the mining industry. With years of experience and a focus on innovation, we ensure the success of your project from exploration to core extraction."
            },
            { 
              text: "We provide a range of processing and refining services to help you extract the maximum value from your mineral resources."
            },
            { 
              text: "UMG can also manage the entire logistics chain, ensuring that your project's materials and products reach their destinations on time and within budget."
            }
          ],

        },
        {
          class: "right-block ",
          text:false,
          imageSrc: "production.avif",
          imageClass:"block-img",
          phrase:"Maximizing Your Mining Project's Potential"
          
        }
      ],

    },
    {
      class:"full-width two-blocks",
      blocks:[
        {
          class: "left-block text-block",
          text:true,
          title:"Production Drilling",
          paragraphs:[
            { 
              text: "As a leading mining contractor specializing in production drilling and grade control, our company is committed to delivering high-quality, efficient, and safe drilling solutions to meet the needs of our clients in the mining industry. With years of experience and a focus on innovation, we ensure the success of your project from exploration to core extraction."
            },
            { 
              text: "We provide a range of processing and refining services to help you extract the maximum value from your mineral resources."
            },
            { 
              text: "UMG can also manage the entire logistics chain, ensuring that your project's materials and products reach their destinations on time and within budget."
            }
          ],

        },
        {
          class: "right-block ",
          text:false,
          imageSrc: "production.avif",
          imageClass:"block-img",
          phrase:"Maximizing Your Mining Project's Potential"
          
        }
      ],

    },
    {
      class:"full-width two-blocks",
      blocks:[
        {
          class: "left-block",
          text:false,
          imageSrc: "development.jpg",
          imageClass:"block-img",
          phrase:""
        },
        {
          class: "right-block text-block",
          text:true,
          title:"DEVELOPMENT OF MINING PROJECT ",
          paragraphs:[
            { 
              text: " As a leading mining entrepreneurship, we specialize in providing top-notch development services to help unlock the full potential of your mining project. Our team of experts has years of experience in the industry and is dedicated to delivering exceptional results."
            },
            { 
              text: " We offer mine design and planning services to help you optimize your project's layout, minimize risks, and maximize productivity."
            }
          ],
          
        }
      ],

    },

  ];


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
    this._router.navigate([page.url+'/'+page.value]);
    this.activePage=page.value;
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
