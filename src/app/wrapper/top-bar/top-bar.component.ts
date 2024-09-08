import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

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

  menus: MenuItem[]=[
    {
      label: 'Home',
      icon: 'p-menuitem-icon pi pi-home',
      url:""

    },
    {
      label: 'About Us',
      icon: 'p-menuitem-icon pi pi-info-circle',
      url:"about"
    },
    {
      label: 'Our Services',
      icon: 'p-menuitem-icon pi pi-verified',
      url:"services"
    },
    {
      label: 'Partners',
      icon: 'p-menuitem-icon pi pi-briefcase',
      url: "partners"
    },
    {
      label: 'Contact',
      icon: 'p-menuitem-icon pi pi-id-card',
      url:"contacts"
    },
  ]

}
