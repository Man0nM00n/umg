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
    imageSrc: "total.png",
  },
  {
    name: "EPIROC",
    imageSrc: "epiroc.png",
  },
  {
    name: "ENDEAVOUR",
    imageSrc: "Endeavour.png",
  },
  {
    name: "NEC SYSTEMS",
    imageSrc: "BE.png",
  }
];
}
