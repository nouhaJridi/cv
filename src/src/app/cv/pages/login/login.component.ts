import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  errorMessage: string ='';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void{

  if (this.email === 'root' && this.password === 'root'){
  this.router.navigate(['cv']);
  }
  else
  {
  this.errorMessage='Veuillez vérifier votre email et votre mot de passe';

  }
  }

}
