import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Crudlist } from '../crudlist';
import { CustomerService } from '../service/customer.service';
import { Observable } from 'rxjs';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateC:Crudlist ;
  list:Crudlist= new Crudlist(sessionStorage.getItem('updatename'),Number.parseInt(sessionStorage.getItem('updatephone')));

  updateForm = this.builder.group({
    fname: [],
    phoneNo: []
  })

  constructor(private builder: FormBuilder,private customerService:CustomerService) {
  }

  updateCustomer(){
    this.updateC= new Crudlist(this.updateForm.value.fname,this.updateForm.value.phoneNo);
    this.customerService.updateCustomer(this.list,this.updateC);
  }

  ngOnInit() {
  }

}
