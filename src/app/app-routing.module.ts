import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WriteBlogComponent } from './write-blog/write-blog.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'write', component: WriteBlogComponent},
  {path:'details/:id', component: DetailsComponent},
  { path: '**', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
