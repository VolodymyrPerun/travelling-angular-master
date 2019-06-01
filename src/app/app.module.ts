import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { ContactsComponent } from './components/contacts/contacts.component';


const appRoutes: Routes = [
 
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostPageComponent,
    PageNotFoundComponent,
    ScrollTopComponent,
    ContactsComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
