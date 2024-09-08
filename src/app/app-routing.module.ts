import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*     Components       */
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NewsLetterComponent } from './wrapper/news-letter/news-letter.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
/*   { path: '',redirectTo:'home' }, */
  { path: 'services', component: DiscoverComponent },
  { path: 'partners', component: ContactComponent },
  { path: 'contacts', component: NewsLetterComponent },
  { path: '', component: HomeComponent ,pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
