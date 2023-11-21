import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {

  constructor(private dataService: DataService, private router : Router) {}

  sendData() {
    console.log("insidesend data")

    const data:any = { message: 'Hello from Component One1' };
    localStorage.setItem('data',data.message)
    this.dataService.setData(data);
    console.log(data)
    // this.router.navigate(['/second-page'])
  
  }

  ngOnInit() {
  }

}
