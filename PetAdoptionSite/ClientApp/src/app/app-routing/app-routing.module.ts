import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

//Components
import { HomeComponent } from '../home/home.component';
import { CounterComponent } from '../counter/counter.component';
import { FetchDataComponent } from '../fetch-data/fetch-data.component';
import { FindComponent } from '../find/find.component';
import { PostComponent } from '../logged-in/post/post.component';
import { SignupComponent } from '../signup/signup.component';
import { ViewComponent } from '../view/view.component';



const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'find', component: FindComponent },
    { path: 'post', component: PostComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'view/:id', component: ViewComponent },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompontents = [
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FindComponent,
    PostComponent,
    SignupComponent,
    ViewComponent,
]
