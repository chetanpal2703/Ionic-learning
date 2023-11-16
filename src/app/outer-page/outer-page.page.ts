import { Component, OnInit,Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-outer-page',
  templateUrl: './outer-page.page.html',
  styleUrls: ['./outer-page.page.scss'],
})
export class OuterPagePage implements OnInit {
  receivedData: any;
  @Input() item = '';
  
  

  constructor(private navCtrl :NavController,private dataService: DataService, private route: ActivatedRoute) { 
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
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const receivedDatas = JSON.parse(params['special']);
      this.receivedData = receivedDatas;
    });
    
console.log(this.receivedData.password1,"received data on outer-page")


  }

}
