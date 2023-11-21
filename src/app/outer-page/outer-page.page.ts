import { Component, OnInit,Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { ActivatedRoute , Router} from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-outer-page',
  templateUrl: './outer-page.page.html',
  styleUrls: ['./outer-page.page.scss'],
})
export class OuterPagePage implements OnInit {
  receivedData: any;
  receivingInnerpageData:any;
  outerform:FormGroup;
  @Input() item = '';
  
  

  constructor(private navCtrl :NavController,private dataService: DataService, private route: ActivatedRoute,public formBuilder: FormBuilder,private router: Router) { 
    // this.receivedData = this.dataService.formData;
  
    // console.log(this.receivedData,"receive-data")
    // this.route.queryParams.subscribe(params => {
      // console.log(route,"route")
      // console.log(params,"paramsbefore")
      // var receivedDatas = JSON.parse(params['special']);
      // console.log(receivedDatas,"receivedatas")
      // this.receivedData=receivedDatas;
      // console.log(this.receivedData,"receiveddata")
      // this.receivedData = receivedDatas.name;
      // console.log('params',this.receivedData.name)
    // });
    
    // console.log(this.receivedData)
    this.dataService.data$.subscribe((data) => {
      console.log("inside here construcor")
      this.receivingInnerpageData = data;
      console.log(this.receivingInnerpageData)
    });

    this.outerform = this.formBuilder.group({
      title: "",
      price: "",
      description: "",
      image: ""
      
    });
  }
  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   const receivedDatas = JSON.parse(params['special']);
    //   this.receivedData = receivedDatas;
    // });
    
    //   console.log(this.receivedData.password1,"received data on outer-page")
  }

  submitouterForm = () => {
    if (this.outerform.valid) {
    let user = {
      title:this.outerform.value.title,
      description:this.outerform.value.description,
      price:this.outerform.value.price,
      image:this.outerform.value.image,
    }
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     special: JSON.stringify(user)
    //     // special: JSON.stringify(this.ionicForm)
    //   }
    // };
    // this.router.navigate(['/inner-page'], navigationExtras);
    console.log(user,"user")
    const newvar:any=JSON.stringify(user)
    console.log(newvar,"newvar")
    localStorage.setItem('settingItem',newvar);


    this.outerform.reset();

  }

  
  }
  

  

}
