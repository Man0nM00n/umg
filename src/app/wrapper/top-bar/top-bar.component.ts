import { Component } from '@angular/core';
import { MenuItem, MegaMenuItem } from 'primeng/api';

//import { ToolbarModule } from 'primeng/toolbar';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  contacts:any[]=[
    {
      name: "Telephone",
      icon: "contact-icon icon pi pi-phone",
      value: "55 99 00 00"
    },
    {
      name: "   Mail",
      icon: "contact-icon icon pi pi-envelope",
      value: "info@umg.bf"
    }
  ];

  menus: MegaMenuItem[]=[
    {
      label: 'Who We Are',
      root: true,
      items: [
          [
              {
                  items: [
                      { label: 'Our Company', icon: 'pi pi-list', subtext: 'Subtext of item',url:"about/company" },
                      { label: 'Our Team', icon: 'pi pi-users', subtext: 'Subtext of item', url:"about/team" },
                      // { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
                  ]
              }
          ],
          // [
          //     {
          //         items: [{ image: 'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
          //     }
          // ]
      ]
  },
  {
      label: 'What We Do',
      root: true,
      items:[
        [
          {
            items:[
              { label: 'Services Offerring', icon: 'pi pi-file', subtext: 'Subtext of item', url: "services/presentation" }
            ]
          }
        ],
        [
          {
              items: [
                  { label: 'Drill & Blast', icon: 'pi pi-list', subtext: 'Subtext of item', url: "services/drill" },
                  { label: 'Grade Control', icon: 'pi pi-users', subtext: 'Subtext of item', url: "services/grade" },
                  { label: 'Equipment Rental', icon: 'pi pi-file', subtext: 'Subtext of item', url: "services/rental" },
                  { label: 'Other Services', icon: 'pi pi-file', subtext: 'Subtext of item' , url: "services/others"},
              ]
          }
      ],
      ]
  },
  {
      label: 'Our Projects',
      root: true,
      url: "projects"
  },
  {
    label: 'Our Partners',
    root: true,
    url: "partners"
  },
  {
    label: 'Contact',
    root: true,
    url: "contacts"
  }

  ];

  barmenus: MenuItem[]=[
    {
      label: 'Who We Are',
      icon: 'p-menuitem-icon pi pi-info-circle',
      tooltip:'about',
      tooltipPosition:'bottom' ,
      tooltipOptions:{
        tooltipPosition: 'bottom',
        tooltipEvent: 'focus',
        appendTo: 'subModal'
              },
      // url:"/about?page=company",
      items:[
        {     
          label: '<div class="subMenu menu1"> <div> <h3>Our Company</h3> <h6> UMG is a trusted company that offers top-notch services for all your mining related projects ! </h6> </div> <img class="subMenu-img" src="logo.svg"/> </div>',
          url:"about/company"
        },
        {
          label: '<div class="subMenu menu1"> <div><h3> Our Team </h3> <h6> Discover our managing team and their leadership and vision ! </h6> </div> <img class="subMenu-img" src="team.jpg"/> </div>',
          url: "about/team"
        }
      ]
    },
    {
      label: 'What We Do',
      icon: 'p-menuitem-icon pi pi-verified',
      tooltip:'services',
      tooltipPosition:'bottom' ,
      tooltipOptions:{
        tooltipPosition: 'bottom',
        tooltipEvent: 'focus',
        appendTo: 'services'
              },
      // url:"services/presentation",
      items: [
        {
          label: '<div class="subMenu menu2"> <div><h3>Drilling Services</h3> <h6> We offer the best cost-effective and efficient drilling services and techniques ! </h6> </div> <img class="subMenu-img" src="drilling.jpg"/> </div>',
          url: "services/drill"
        },
        {
          label: '<div class="subMenu menu2"> <div> <h3>Fleet Rental</h3> <h6> We also support others compagnies by locating some of our machinery ! </h6>  </div> <img class="subMenu-img" src="fleet.jpg"/> </div>',
          url: "services/rental"
        }
      ]

    },
    {
      label: 'Our projects',
      icon: 'p-menuitem-icon pi pi-verified',
      tooltip:'projects',
      tooltipPosition:'bottom' ,
      tooltipOptions:{
        tooltipPosition: 'bottom',
        tooltipEvent: 'focus',
        appendTo: 'projects'
              },
      url:"projects",
      // items: [
      //   {
      //     label: '<div class="subMenu menu3"> <div><h3>Current Projects</h3> <h6> Discover our current projects ! </h6> </div> <img class="subMenu-img" src="drilling.jpg"/> </div>'
      //   },
      //   {
      //      label: '<div class="subMenu menu3"> <div> <h3>Our Locations</h3> <h6> All the locations you can find us at ! </h6>  </div> <img class="subMenu-img" src="fleet.jpg"/> </div>'
      //   }
      // ]

    },
    {
      label: 'Partners',
      icon: 'p-menuitem-icon pi pi-briefcase',
      tooltip:'partners',
      tooltipPosition:'bottom' ,
      tooltipOptions:{
        tooltipPosition: 'bottom',
        tooltipEvent: 'focus',
        appendTo: 'partners'
              },
      url: "partners"
    },
    {
      label: 'Contact',
      icon: 'p-menuitem-icon pi pi-id-card',
      tooltip:'contact',
      tooltipPosition:'bottom' ,
      tooltipOptions:{
        tooltipPosition: 'bottom',
        tooltipEvent: 'focus',
        appendTo: 'contact'
              },
      url:"contacts"
    },
  ]
}
