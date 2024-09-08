import { Component } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent {
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
}
