import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  user = new User();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    const idUser = this.route.snapshot.params['id'];

    this.title.setTitle('Novo usuário');

    if (idUser) {
      this.loadUser(idUser);
    }
  }

  updateTitleEdit() {
    this.title.setTitle(`Edição de usuário: ${this.user.name}`);
  }

  loadUser(id: number) {
    this.userService.getOne(id)
      .subscribe(user => {
        this.user = user;

        this.updateTitleEdit();
      });
  }

  get editing() {
    return Boolean(this.user.id);
  }

  addUser(form: FormControl) {
    this.userService.newUser(this.user)
      .subscribe(newUserAdd => {
        this.router.navigate(['/users', newUserAdd.id]);
      });
  }

  updateUser(form: FormControl) {
    this.userService.update(this.user)
      .subscribe(user => {
        this.user = user;

        this.updateTitleEdit();
      });
  }


  save(form: FormControl) {
    if (this.editing) {
      this.updateUser(form);
    } else {
      this.addUser(form);
    }
  }

  newUser(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.user = new User();
    }.bind(this), 1);

    this.router.navigate(['/users/new']);
  }

}
