import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Crudlist } from '../crudlist';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm = this.builder.group({
    fname: [''],
    phoneNo: ['']
  })

  constructor(private builder: FormBuilder,private customerService:CustomerService) { }

  ngOnInit() {
  }

  addCustomer(){
    console.log(this.addForm.value.fname);
    console.log(this.addForm.value.phoneNo);
    this.customerService.addCustomer(this.addForm.value.fname,this.addForm.value.phoneNo);
  }

}
