import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserCrudComponent } from './user-crud/user-crud.component';


const routes: Routes = [
  {
    path: '',
    component: UserSearchComponent
  },
  {
    path: 'new',
    component: UserCrudComponent
  },
  {
    path: ':id',
    component: UserCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
