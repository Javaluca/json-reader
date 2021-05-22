import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonPageComponent } from './pages/json-page/json-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'json', pathMatch: 'full' },
  { path: 'json', component: JsonPageComponent },
  { path: 'table', component: TablePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
