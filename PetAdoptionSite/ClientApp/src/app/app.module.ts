import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonserviceService } from './services/commonservice.service'

//Routes
import { AppRoutingModule, routingCompontents } from './app-routing/app-routing.module';

//Material
import { AppMaterialModule} from './app-material/app-material.module'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FindComponent } from './find/find.component';
import { PostComponent } from './logged-in/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent, 
    routingCompontents, FindComponent, PostComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppMaterialModule,    
    AppRoutingModule,  
  ],
  providers: [CommonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
