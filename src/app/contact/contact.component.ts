import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
partners:any[]=[
  {
    name: "TOTAL",
    imageSrc: "partners/total.png",
  },
  {
    name: "EPIROC",
    imageSrc: "partners/epiroc.png",
  },
  {
    name: "ENDEAVOUR",
    imageSrc: "partners/Endeavour.png",
  },
  {
    name: "NEC SYSTEMS",
    imageSrc: "partners/BE.png",
  }
];
}
