import { Injectable } from '@angular/core';
import { Crudlist } from '../crudlist';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  display = false;

  crudlist: Crudlist[] = new Array();

  constructor(private router:Router) {
    this.crudlist.push(new Crudlist("pooja",1231231231));
    this.crudlist.push(new Crudlist("arthi",4564564564));
  }

  addCustomer(fname:string,phoneNo:number){
    this.crudlist.push(new Crudlist(fname,phoneNo));
    this.router.navigate(['']);
  }

  getAllCustomers(){
    return this.crudlist;
  }

  deleteCustomer(list:Crudlist){
    console.log(list);
    for (let element of this.crudlist) {
      if (element.name == list.name) {
          this.crudlist.splice(this.crudlist.indexOf(element), 1);
          break;
      }
  }
  this.router.navigate(['']);
  }

  updateCustomer(list:Crudlist,updateList:Crudlist){
    console.log(list);
    console.log(updateList);
    for (let element of this.crudlist) {
      if (element.name == list.name) {
          this.crudlist.splice(this.crudlist.indexOf(element), 1);
          this.crudlist.push(updateList);
          break;
      }

      //sessionStorage.clear();
      //sessionStorage.removeItem('updatename');
      //sessionStorage.removeItem('updatephone');

  }
  this.display= false;
  this.router.navigate(['']);
  }

}
