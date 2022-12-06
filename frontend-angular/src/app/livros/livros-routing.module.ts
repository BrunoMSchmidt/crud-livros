import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cadastrar',
    component: CadastrarComponent,
  },
  {
    path: 'editar/:id',
    component: EditarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosRoutingModule {}
