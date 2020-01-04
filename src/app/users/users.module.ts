import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

import { UsersRoutingModule } from './users-routing.module';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserCrudComponent, UserSearchComponent],
  imports: [
    CommonModule,
    FormsModule,

    UsersRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatIconModule
  ]
})
export class UsersModule { }
