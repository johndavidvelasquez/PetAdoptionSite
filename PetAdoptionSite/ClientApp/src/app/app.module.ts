import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonserviceService } from './services/commonservice.service'

//Routes
import { AppRoutingModule, routingCompontents } from './app-routing/app-routing.module';

//Material
import { AppMaterialModule} from './app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SignupComponent } from './signup/signup.component';

//Pipes
import { PetsubtypePipe } from './pipes/petsubtype.pipe';
import { PettypePipe } from './pipes/pettype.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent, 
    routingCompontents, SignupComponent, PetsubtypePipe, PettypePipe,  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    AppMaterialModule,    
    AppRoutingModule,  
    BrowserAnimationsModule
  ],
  providers: [CommonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
