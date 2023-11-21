import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Router,NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  ionicForm: FormGroup;
  gender: string = '';
  hobbies:string='';
  selectedHobby: string = '';
  passwordType:string='password';
  passwordShown:boolean=false;
  // gender: FormControl = new FormControl('');
  // webData = [

  //   { id: 1, name: 'PHP',checked: false },

  //   { id: 2, name: 'Laravel',checked: false },

  //   { id: 3, name: 'Angular',checked: false },

  //   { id: 4, name: 'React',checked: false },

  //   { id: 5, name: 'Next.js',checked: false },
    

  // ];
  // get ordersFormArray() {
  //   return this.ionicForm.controls['skills'] as FormArray;
  // }

  

  constructor(private navCtrl :NavController, private dataService: DataService,private router: Router,private route: ActivatedRoute,public formBuilder: FormBuilder) { 
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      fatherName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required, Validators.pattern('^[0-9]{2}-[0-9]{2}-[0-9]{4}$')]],
      // mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      // mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), this.validateMobile.bind(this)]],
      // gender: ['', Validators.required],
      hobbies: [true],
      password1:"",
      // skills: new FormArray([])
    });
    
    // this.addCheckboxesToForm();
  }
  
  ngOnInit() {
    //for password toggling 
    setTimeout(() => {
      const passwordControl = this.ionicForm.get('password1');
      if (passwordControl) {
        passwordControl.setValue('');
      }
    });
  }
  
  
  // private addCheckboxesToForm() {

  //   this.webData.forEach(() => this.ordersFormArray.push(new FormControl(false)));

  // }

  // togglePasswordVisibility() {
  //   const inputElement = document.querySelector('ion-input[name="password1"]');
  //   const eyeIcon = document.querySelector('.eye-icon');
  
  //   if (inputElement && eyeIcon) {
  //     const inputType = inputElement.getAttribute('type');
  //     inputElement.setAttribute('type', inputType === 'password' ? 'text' : 'password');
  //     eyeIcon.setAttribute('name', inputType === 'password' ? 'eye-off' : 'eye');
  //   }
  // }

  validateMobile(control: FormControl): {[key: string]: any} | null {
    const value = control.value;
    if (value && value.length > 10) {
      return { 'invalidMobileLength': true };
    }
    return null;
  }
  

  togglePassword(){
    console.log("inside toggle password function")
    if(this.passwordShown){
      this.passwordShown=false;
      this.passwordType='password';
    }else{
      this.passwordShown=true;
      this.passwordType='text';
    }
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
      // console.log(this.ionicForm,"ionic-form-test form data")
      // const selectedOrderIds = this.ionicForm.value.skills
      // .map((checked:any, i:number) => {
      //   this.webData[i].checked=checked;
      //   console.log(this.webData[i],"this.webData[i+1]")
      // })
      // .filter((v:any) => v !== null);
    // console.log(this.webData,"selected data ");
      // console.log(this.ionicForm.value.skills,"skiklsdfsd data ");
    let user = {
      name:this.ionicForm.value.name,
      fathername:this.ionicForm.value.fatherName,
      email:this.ionicForm.value.email,
      dob:this.ionicForm.value.dob,
      mobile:this.ionicForm.value.mobile,
      // gender: this.ionicForm.value.gender,
      // hobbies:this.ionicForm.value.hobbies,
      // skills: this.webData,
      password1:this.ionicForm.value.password1
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
      // console.log(this.ionicForm,"ionic-form")
      // const selectedOrderIds = this.ionicForm.value.skills
      // .map((checked:any, i:number) => {
      //   this.webData[i].checked=checked;
      //   console.log(this.webData[i],"this.webData[i+1]")
      // })
    let user = {
      name:this.ionicForm.value.name,
      fathername:this.ionicForm.value.fatherName,
      email:this.ionicForm.value.email,
      dob:this.ionicForm.value.dob,
      mobile:this.ionicForm.value.mobile,
      // gender:this.ionicForm.value.gender,
      // hobbies:this.ionicForm.value.hobbies,
      // skills: this.webData,
      password1:this.ionicForm.value.password1
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


