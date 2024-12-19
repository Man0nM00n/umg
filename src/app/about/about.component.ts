import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

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
      name:"Our Company",
      value:"company",
      active:true,
    },
    {
      name:"Our Team",
      value:"team",
      active:false,
    }
  ];
  contents:any[] =[
    {
      name: "Our company",
      value:"company",
      content:{
        slogan:"Greatest partner you'll find in West-Africa",
        paragraphs:[
          {
            text: "Unified Mining Group is trusted company that offers top-notch surface mining and exploration drilling services from Burkina Faso throughout West Africa.",
            class:"full paragraph"
          },
          {
            text: "As a leading contractor specialized in surface mining and drilling exploration, our company is committed to delivering high-quality, efficient, and safe drilling and grade control solutions to meet the needs of our clients in the mining industry. With years of experience and a focus on innovation, we ensure the success of your project from exploration to extraction.",
            class:"full paragraph"
          },
          {
            text: "Specialized but not limited! Our company also provide other great services.",
            class:"quote paragraph"
          },
          {
            text: "We are also enthousiast to contract for other mining related services \n Load & Haul ,\n Drill and Blast, Equipment Rental, Tailings Dums construction, Exploration & Grade control drilling and technical assistance throughout West Africa when given the opportunity. Unified Mining Group (UMG) welcomes the opportunity to provide a submission for the provision of the pre-split and production drilling services.",
            class:"full paragraph"
          },

        ]
          },
      more:{
        text: "You might also be interested in ",
        content:[
          {
            name: "DRILL & BLAST",
            url: "/services/drill",
            imageSrc: "drill.jpg",
          },
          {
            name: "GRADE CONTROL",
            url: "/services/grade",
            imageSrc: "drilling.jpg",
          },
          {
            name: "FLEET RENTAL",
            url: "/services/rental",
            imageSrc: "locate.jpg",
          }
        ],
      },
    },
    {
      name: "Our team",
      value:"team",
      content:{
        slogan:"Our leadership team",
        blocks:[
          {
            imageSrc: "opm.png",
            name: "SAMUEL PAWENDTAORE KABRE",
            position: "OPERATIONS MANAGER",
            paragraphs:[
              {
                text: "He is the founder of the company and Operations Manager with a demonstrated history of working in the mining and construction industry. He is a seasoned mining engineer with over 7 years extensive training and working experience in drill and blast, logistics and haulage projects. He is an innovator who is enthusiastic.",
                class:"quote paragraph"
              },
              {
                text: "He led, direct, and control the activities of multiple business units and all their ongoing operations within a variety of entities in Burkina Faso and Africa at large so that the organisations achieve their short and long term financial and operating objectives as set by the overall corporate business plan.",
                class:"quote paragraph"
              },
    
            ]
          },
          {
            imageSrc: "tsm.png",
            name: "MAXWELL BENON-IB KUUZUME",
            position: "TECHNICAL SERVICES MANAGER",
            paragraphs:[
              {
                text: "Maxwell Benon-ib Kuuzume brings extensive local and expatriate experience in mining operations most especially drill and blast in west Africa and Africa at large, including managing diverse teams, expert technology and logistics, implementing effective strategies and building relationships with stakeholders.",
                class:"quote paragraph"
              },
              {
                text: "He has demonstrated exceptional leadership in overseeing mining operations in multiple African countries. Maxwell’s technical expertise and strategic thinking have been widely recognized in the mining industry, and he continues to inspire and mentor young professionals in the field. Finally, it is a delight to announce that Maxwell is also certified project Management professional (PMP) with sound experience in executing projects across West Africa.",
                class:"quote paragraph"
              },
    
            ]
          },

        ],
          },
      more:{
        text: "You might also be interested in ",
        content:[
          {
            name: "DRILL & BLAST",
            url: "/services/drill",
            imageSrc: "drill.jpg",
          },
          {
            name: "GRADE CONTROL",
            url: "/services/grade",
            imageSrc: "drilling.jpg",
          },
          {
            name: "FLEET RENTAL",
            url: "/services/rental",
            imageSrc: "locate.jpg",
          }
        ],
      },
    }
  ];
  addings:any[]=[
    {
      class:"full-width two-blocks",
      blocks:[
        {
          class: "left-block text-block",
          text:true,
          title:"EXPLORATION",
          paragraphs:[
            { 
              text: "Exploration is the key for evaluating the project and deciding the methods and equipments to use on the site. UMG offers top-notch exploration drilling services designed to meet the unique needs of your mining project. "
            },
            { 
              text: "So we provide a full range of exploration methods and standard analysis and testing services, including drilling fluids, water quality, geology, and rock mechanics."
            },
            { 
              text: " With our expertise, commitment to safety, and cost-effective approaches, we are confident in delivering exceptional results that will help unlock the full potential of your project. "
            }
          ],

        },
        {
          class: "right-block ",
          text:false,
          imageSrc: "explo2.webp",
          imageClass:"block-img",
          phrase: "Unlocking the Potential of Your Mining Project"
          
        }
      ],

    },
    {
      class:"full-width two-blocks",
      blocks:[
        {
          class: "left-block",
          text:false,
          imageSrc: "construction.jpg",
          imageClass:"block-img",
          phrase: "Building a Strong Foundation"
        },
        {
          class: "right-block text-block",
          text:true,
          title:"CONSTRUCTION & INSTALLATION",
          paragraphs:[
            { 
              text: "A good installation is a key feature for your team comfort. So we offer the best construction services to ensure your project runs smoothly from start to finish."
            },
            { 
              text: "UMG offers comprehensive construction and site installation services designed to meet the unique needs of your mining project. With our expertise, commitment to safety, and cost-effective approaches, we are confident in delivering exceptional results that will help build a strong foundation for your project's success."
            },
          ],
          
        }
      ],

    },
    {
      class:"full-width two-blocks",
      blocks:[
        {
          class: "left-block text-block",
          text:true,
          title:"PRODUCTION PROCESS",
          paragraphs:[
            { 
              text: "UMG offers comprehensive mine operations management services, including planning, scheduling, and supervision of all mining activities."
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
    this._router.navigate(['/about/'+npage.value]);
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
      this.activePage="company";
      this._router.navigate(['/about/company']);
    }

  }
}
