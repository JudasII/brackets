import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetidoresComponent } from './components/competidores/competidores.component';
import { CombatesComponent } from './components/combates/combates.component';

const routes: Routes = [
  {
    path: 'competidores',
    component: CompetidoresComponent
  },
  {
  path: 'combates',
  component: CombatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
