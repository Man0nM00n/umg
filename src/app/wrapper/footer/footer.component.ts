import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', './additional.css']
})
export class FooterComponent {
  menus: MenuItem[]=[
    {
      label: 'Home',
      icon: 'pi pi-home',
      url:"/umg"
    },
    {
      label: 'About-Us',
      icon: 'pi pi-info-circle',
      url:'/umg/about/company'
    },
    {
      label: 'Services',
      icon: 'pi pi-verified',
      url:"/umg/services/presentation"
    },
    {
      label: 'Partners',
      icon: 'pi pi-briefcase',
      url:"/umg/partners"
    },
    {
      label: 'Contact',
      icon: 'pi pi-id-card',
      url:"/umg/contacts"
    },
  ]
}
