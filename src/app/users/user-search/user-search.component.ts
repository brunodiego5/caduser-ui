import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Title } from '@angular/platform-browser';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../user';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatSnackBar, MatTable, MatTableDataSource } from '@angular/material';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  // @ViewChild('tabela', {static: true}) myTable: MatTable<any>;
  @ViewChild('tabela', {static: true}) grid;

  // datasource = new UserDataSource(this.userService);

  datasource = new MatTableDataSource<User>();

  displayedColumns = ['name', 'email', 'actions'];

  constructor(private userService: UserService,
              private title: Title,
              public dialog: MatDialog,
              private matsnackBar: MatSnackBar) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de usuários');
    this.loadUser();
  }

  loadUser() {
    this.userService.getAll().
      subscribe(result => {
      this.datasource.data = result;
    });
  }

  acceptDelete(user: User) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Tem certeza que deseja excluir?'
        });

    dialogRef.afterClosed(
    ).subscribe(result => {
      if (result) {
        this.delete(user);
      }
    });
  }

  delete(user: User) {
    this.userService.delete(user.id)
      .subscribe(() => {
        this.matsnackBar.openFromComponent(SnackbarComponent, {
          duration: 5 * 1000,
        });
        this.loadUser();
      });
  }


}

/* export class UserDataSource extends DataSource<User> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getAll();
  }
  disconnect() {}
}
*/
