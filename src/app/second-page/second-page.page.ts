import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {

  receivedData: any;
  getData: any;

  constructor(private dataService: DataService) {
    this.dataService.data$.subscribe((data) => {
      console.log(this.receivedData)
      console.log(data)
      this.receivedData = data;
    
    });

    this.getData = localStorage.getItem('data')
    console.log(this.getData)

  }

  ngOnInit() {
  }

  

}
