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
    describe: "We trust and work with Total to get good quality fuel, oils and other goods to ensure that our equipments works fine!"
  },
  // {
  //   name: "EPIROC",
  //   imageSrc: "epiroc.png",
  //   describe: "As a partner Epiroc provide us great mining equipments and support us in maintenance and training."
  // },
  {
    name: "ENDEAVOUR",
    imageSrc: "Endeavour.png",
    describe: "We work and have worked with Endeavour Mining on their local projects, building a strong partnership!"
  },
  {
    name: "NEC SYSTEMS",
    imageSrc: "nec.png",
    describe: "We are proud to work with this innovative enterprise for their support and services in IT."
  },
  {
    name: "NEEMBA",
    imageSrc: "neemba.jpg",
    describe: "As a partner Neemba provide us great mining equipments and support us in maintenance and training."
  },
  {
    name: "BIA",
    imageSrc: "bia.svg",
    describe: "As an equipment partner of UMG, BIA GROUP provide us great mining equipments and support us in maintenance and training."
  },
  {
    name: "CORICA",
    imageSrc: "corica.svg",
    describe: "We work in partnership with Corica Mining on some local projects, building a strong partnership between mining contractors!"
  },
  {
    name: "PRD RIGS",
    imageSrc: "prd.png",
    describe: "As an equipment partner of UMG, PRD RIGS provide us great mining equipments and support us in maintenance and training."
  },
  {
    name: "ECOBANK",
    imageSrc: "ecobank.png",
    describe: "As a financial partner of UMG, Ecobank helps us in our growth."
  },
  {
    name: "SANDVIK",
    imageSrc: "sandvik.png",
    describe: "As a leading equipment provider, SANDVIK provide us great mining equipments and their support us in maintenance and training."
  },
];
}
