import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { MisionComponent } from './pages/mision/mision.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { VisionComponent } from './pages/vision/vision.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'nosotros', component:NosotrosComponent,
  children: [
    {path: 'mision', component:MisionComponent},
    {path: 'vision', component:VisionComponent}
  ]},
  {path:'contacto', component:ContactoComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
