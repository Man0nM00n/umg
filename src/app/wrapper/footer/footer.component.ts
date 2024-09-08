import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  menus: MenuItem[]=[
    {
      label: 'Home',
      icon: 'pi pi-home',
      url:"/"
    },
    {
      label: 'About-Us',
      icon: 'pi pi-info-circle',
      url:'/about'
    },
    {
      label: 'Services',
      icon: 'pi pi-verified',
      url:"/services"
    },
    {
      label: 'Partners',
      icon: 'pi pi-briefcase',
      url:"/partners"
    },
    {
      label: 'Contact',
      icon: 'pi pi-id-card',
      url:"/contacts"
    },
  ]
}
