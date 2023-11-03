import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Router,NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  ionicForm: FormGroup;

  constructor(private navCtrl :NavController, private dataService: DataService,private router: Router,private route: ActivatedRoute,public formBuilder: FormBuilder) { 
    this.ionicForm=this.formBuilder.group({
      name:"",
      fatherName:"",
      email:"",
      dob:"",
      mobile:""
    })
  }
  
  def(){
    this.navCtrl.navigateBack('/inner-page');
  }

  abc(){
    this.navCtrl.navigateRoot('/inner-page');
  }
  outer(){
    console.log("inside submit form")
    this.navCtrl.navigateRoot('/outer-page')
  }
  testForm = () => {
    if (this.ionicForm.valid) {
      // console.log(this.ionicForm.value.name);
      console.log(this.ionicForm,"ionic-form-test form data")
    let user = {
      name:this.ionicForm.value.name,
      fathername:this.ionicForm.value.fatherName,
      email:this.ionicForm.value.email,
      dob:this.ionicForm.value.dob,
      mobile:this.ionicForm.value.mobile
    }
    console.log(user,"user-test-form-data")
    // console.log(user,'user1');
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(user)
        // special: JSON.stringify(this.ionicForm)
      }
    };
    console.log(JSON.stringify(user),"stringify-test-form -data")
    console.log(navigationExtras,"nav-test-from -data")
    this.router.navigate(['/test-form-send-data'], navigationExtras);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };


  // submitForm() {
  //   console.log("inside submit form")
  //   this.dataService.formData = this.formData;
  //   this.navCtrl.navigateForward('/outer-page');
  //   console.log(this.dataService.formData)
  // }
  // submitForm() {
  //   this.dataService.formData = this.formData;
  //   this.router.navigate(['/outer-page'], {
  //     queryParams: this.formData
  //   });
  // }
  // submitForm() {
  //   console.log("inside submit form")
  //   this.dataService.formData = this.formData;
  //   this.navCtrl.navigateForward(['/outer-page'], {
  //     queryParams: this.formData
  //   });
  // }
  submitForm = () => {
    if (this.ionicForm.valid) {
      // console.log(this.ionicForm.value.name);
      console.log(this.ionicForm,"ionic-form")
    let user = {
      name:this.ionicForm.value.name,
      fathername:this.ionicForm.value.fatherName,
      email:this.ionicForm.value.email,
      dob:this.ionicForm.value.dob,
      mobile:this.ionicForm.value.mobile
    }
    console.log(user,"user")
    // console.log(user,'user1');
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(user)
        // special: JSON.stringify(this.ionicForm)
      }
    };
    console.log(JSON.stringify(user),"stringify")
    console.log(navigationExtras,"nav")
    this.router.navigate(['/outer-page'], navigationExtras);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };


}
