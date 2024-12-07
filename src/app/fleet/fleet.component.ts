import { Component } from '@angular/core';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.css'
})
export class FleetComponent {
  slides:any[]=[
    {
      name:"slide1",
      src:"fleet1.jpg"
    },
    {
      name:"slide2",
      src:"fleet2.jpg"
    },
    {
      name:"slide3",
      src:"fleet3.jpg"
    },
    {
      name:"slide4",
      src:"fleet4.jpg"
    },
    {
      name:"slide5",
      src:"fleet5.jpg"
    },
    {
      name:"slide6",
      src:"fleet6.jpg"
    },
  ];

  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
      breakpoint: '560px',
      numVisible: 4
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
}
