import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';

/* PrimeNG Modules */
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipsModule } from 'primeng/chips';
import { DividerModule } from 'primeng/divider';

import { GalleriaModule } from 'primeng/galleria';

import { ImageModule } from 'primeng/image';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';

import { MenubarModule } from 'primeng/menubar';


import { PanelModule } from 'primeng/panel';
import { PickListModule } from 'primeng/picklist';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';

import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';




/*     Components       */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TopBarComponent } from './wrapper/top-bar/top-bar.component';
import { FooterComponent } from './wrapper/footer/footer.component';
import { NewsLetterComponent } from './wrapper/news-letter/news-letter.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiscoverComponent,
    ContactComponent,
    AboutComponent,
    TopBarComponent,
    FooterComponent,
    NewsLetterComponent
  ],
  imports: [
    AccordionModule,
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    CommonModule,
    ChipsModule,
    DividerModule,

    GalleriaModule,

    ImageModule,
    InplaceModule,
    InputTextModule,

    MenubarModule,

    PanelModule,
    PickListModule,

    ScrollPanelModule,
    ScrollTopModule,

    TabViewModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
