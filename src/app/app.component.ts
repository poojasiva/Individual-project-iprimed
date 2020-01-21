import { Component } from '@angular/core';
import { Crudlist } from './crudlist';
import { CustomerService } from './service/customer.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    name;
    phoneNo;
    display;
    crudlist : Crudlist[] = new Array();

    constructor(private customerService:CustomerService,private router:Router){
      this.name=null;
      this.phoneNo=null;
      this.crudlist = customerService.getAllCustomers();
    }

    deleteCustomer(list:Crudlist){
      this.customerService.deleteCustomer(list);
    }

    updateCustomer(list:Crudlist){
      this.customerService.display = true;
      this.name = list.name;
      this.phoneNo = list.phoneNo;
      sessionStorage.setItem('updatename',list.name);
      sessionStorage.setItem('updatephone',list.phoneNo.toString());
      this.router.navigate(['update']);
    }

}
