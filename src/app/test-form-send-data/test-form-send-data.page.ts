import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-test-form-send-data',
  templateUrl: './test-form-send-data.page.html',
  styleUrls: ['./test-form-send-data.page.scss'],
})
export class TestFormSendDataPage implements OnInit {
  receivedData: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const receivedDatas = JSON.parse(params['special']);
      this.receivedData = receivedDatas;
    });
    console.log(this.receivedData,"recevied data came on the other page")
  }
}
