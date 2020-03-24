import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HatCarouselComponent } from './hat-carousel/hat-carousel.component';
import { HatComponent } from './hat/hat.component';


const routes: Routes = [
  {path: '', component: HatCarouselComponent },
  {path: 'hat/:id', component: HatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
