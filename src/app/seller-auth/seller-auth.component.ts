import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

showLogin=false;

akshay1=new FormGroup({
  Name:new FormControl(''),
  Password:new FormControl(''),
  Email:new FormControl('')
})
akshay2=new FormGroup({
  Name:new FormControl(''),
  Password:new FormControl(''),

})
constructor(){}



openlogin(){
  this.showLogin=true
}
opensingup(){
  this.showLogin=false
}
}
