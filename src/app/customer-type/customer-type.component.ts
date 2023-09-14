import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.css'],
  providers: [MessageService]

})
export class CustomerTypeComponent implements OnInit {
  showSuccess: boolean = false;
  public customerType: any;
  public button='save';
  displayBasic:boolean=false

showSuccessMessage() {
  this.showSuccess = true;
  setTimeout(() => {
    this.showSuccess = false;
  }, 3000); 
  
}
  data: any;
  displayedColumns: string[] = [
    'customer_Type_ID',
    'customer_Type',
    'action',
  ];

  public customertypes: any;

  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService

    
    ) {

  }
  form: FormGroup = new FormGroup({
    customer_Type_ID: new FormControl(),
    customer_Type: new FormControl(),
    created_By: new FormControl(),
    updated_By:new FormControl(),
    deleted_By: new FormControl(),
    created_Date: new FormControl(new Date().toISOString().substr(0, 10)),
    updated_Date: new FormControl(new Date().toISOString().substr(0, 10)),
    deleted_Date: new FormControl(new Date().toISOString().substr(0, 10)),
    is_Deleted: new FormControl(new Date().toISOString().substr(0, 10)),
    // created_Date: new FormControl(new Date().toISOString().substr(0, 10)),
    // licence_type: new FormControl(),
    // file_no: new FormControl(),
    // site_ID: new FormControl(),
    // mineral_ID: new FormControl(),
    // trade_Nname: new FormControl(),
    // renwal_date: new FormControl(new Date().toISOString().substr(0, 10)),
    // licence_fee: new FormControl(),
    // cadastral_fee: new FormControl(),
    // status_of_License: new FormControl(),
    // tin_Certificate: new FormControl(),
    //   application:new FormControl(),
    //   feasibility: new FormControl(),
    //   agreement:new FormControl(),
    //   certificate: new FormControl(),
    //   map: new FormControl(),
    //   work_program: new FormControl(),
    // license_code: new FormControl(),
    // coordinate: new FormControl(),
    // selct_mineral: new FormControl(),
    // select_site: new FormControl(),
    
  })
  ngOnInit(): void {
    this.customertypeupdatelist();
    this.form.patchValue({
      customer_Type_ID: randomNumber(1,999),
      created_by: generateGuid(),
      updated_By: generateGuid(),
      deleted_By: generateGuid(),
      is_Deleted:true
    })
  }
  openEditForm(data: any){
    this.button='Update'
    this.customerType=data
    this.form.patchValue(
      {
        customer_Type_ID:data.customer_Type_ID,
        customer_Type: data.customer_Type,
        created_by: data.created_by,
        updated_By:data.updated_By,
        deleted_By: data.deleted_By,
        is_Deleted: data.is_Deleted,
        created_Date: data.created_Date,
        updated_Date: data.updated_Date,
        deleted_Date: data.deleted_Date,
      }
      )
    }
    openAddForm() {
      this.button = 'Save';
      this.form.reset({
        customer_Type_ID: randomNumber(1,999)
      })
      this.customerType = null; 
    }
    onFormSubmit(): void {
      console.log('customertype', this.form.get('customer_Type')?.value);
      if (this.customerType == null || this.customerType == undefined) {
        if (this.form.get('customer_Type')?.value != null || this.form.get('customer_Type')?.value != undefined) {
          this._empService.customertypeadd(this.form.value).subscribe(
            (res) => {
              this.customertypeupdatelist();
              this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Table Add successfully' });
            },
            (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to add table' });
            }
          );
        } else {
          alert('You have not filled in the customer type');
        }
      } else {
        this._empService.customertypeupdate(this.form.value).subscribe(
          (res) => {
            this.customertypeupdatelist();
          },
          (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to update table' });
          }
        );
      }
  }

  customertypeupdatelist() {
    this._empService.customertypeupdatelist().subscribe({
      next: (res) => {
        this.customertypes=res.procCustomer_Type_Lookups
        console.log('customertypes',res.procCustomer_Type_Lookups);
      },
      error: console.log,
    });
  }
  customertypedelete(id: number) {
    this._empService.customertypedelete(id).subscribe({
      next: (res) => {
        this.customertypeupdatelist();
        this.messageService.add({severity:'success', summary: 'Success Message', detail:'Table Deleted Successfully'});
      },
      error: console.log,
    });
  }

}
  function generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  } 

