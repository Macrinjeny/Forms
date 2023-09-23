import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent { 

  name : any;
  age: any;
  gender: any;
  dob: any;
  email: any;
  phno: any;
  address: any;

  samplename : any;
  sampleage : any;
  samplegender : any;
  sampledob : any;
  sampleemail : any;
  samplephno : any;
  sampleaddress : any;

  listData: any;
  selectedData: any;

  submit(){
    this.samplename = this.name;
    this.sampleage = this.age;
    this.samplegender = this.gender;
    this.sampledob = this.dob;
    this.sampleemail = this.email;
    this.samplephno = this.phno;
    this.sampleaddress = this.address;

   
  

   this.listData = [];

    this.selectedData = {
     Name: this.samplename,
     Age: this.sampleage,
     Gender: this.samplegender,
     DOB: this.sampledob,
     Email: this.sampleemail,
     Phno: this.samplephno,
    Address: this.sampleaddress
    }

    this.listData.push(this.selectedData)
    console.log(this.selectedData)
  }
  

}


