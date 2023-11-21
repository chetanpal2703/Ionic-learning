interface Skill {
  id: number;
  name: string;
  checked: boolean;
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-test-form-send-data',
  templateUrl: './test-form-send-data.page.html',
  styleUrls: ['./test-form-send-data.page.scss'],
})

export class TestFormSendDataPage implements OnInit {
  receivedData: any;
  filteredSkills: Skill[]; 
  isbutton:boolean=true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const receivedDatas = JSON.parse(params['special']);
      this.receivedData = receivedDatas;
      this.filteredSkills = this.receivedData.skills.filter((skill: Skill) => skill.checked === true);
    });
    console.log(this.receivedData,"recevied data came on the other page")
  }
  showbutton(){
    console.log("inside showbutton")
    this.isbutton=true;
  }
  hidebutton(){
    console.log("inside hidebutton")
    this.isbutton=false;
  }
}
