import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
// import { error } from 'console';

@Component({
  selector: 'app-service-task-fee',
  templateUrl: './service-task-fee.component.html',
  styleUrls: ['./service-task-fee.component.css'],
  providers: [MessageService]

})
export class ServiceTaskFeeComponent implements OnInit {
  displayBasic:boolean=false;
  showSuccess: boolean = false;
  public customerType: any;
  public button='save';

showSuccessMessage() {
  this.showSuccess = true;
  setTimeout(() => {
    this.showSuccess = false;
  }, 3000); 
  
}
  data: any;
  displayedColumns: string[] = [
    'service_ID',
    'service_fee1',
    'assurance',
    'tember',
    'action',
    // 'dob',
  
  ];
  servicefee: any;

  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService

  ) {}

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    service_ID: new FormControl(),
    task_ID: new FormControl(),
    task_Name: new FormControl(),
    property_Type: new FormControl(),
    fee: new FormControl(),
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
    this.servicefeeList();
    this.form.patchValue({
      service_ID: randomNumber(1,999),
      created_by: generateGuid(),
      updated_By: generateGuid(),
      deleted_By: generateGuid(),
      is_Deleted:true
    })
  }
  openEditForm(data: any) {
    this.button='Update'
    this.customerType=data
    this.form.patchValue(
      {
        id:data.id,
        service_ID: data.service_ID,
        task_ID: data.task_ID,
        task_Name: data.task_Name,
        property_Type: data.property_Type,
        fee: data.fee,
        created_by: data.created_by,
        updated_By:data.updated_By,
        deleted_By: data.deleted_By,
        has_Capital_Gain: data.has_Capital_Gain,
        created_Date: data.created_Date,
        updated_Date: data.updated_Date,
        deleted_Date: data.deleted_Date,
      }
    )

  }   
onFormSubmit() {
    console.log('customertype',this.form.get('customer_Type')?.value);
    if(this.customerType==null||this.customerType==undefined){  
    if(this.form.get('customer_Type')?.value!=null||this.form.get('customer_Type')?.value!=undefined){
   this._empService.customertypeadd(this.form.value).subscribe((res)=>{
    this.servicefeeList();
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Table Add successfully'});
  }
  )
 //  ,error({ 
  
 //  })
   }else{
     alert('youare not fill customerstatus');
   }
      }else{
      this._empService.customertypeupdate(this.form.value).subscribe((res)=>{
      this.servicefeeList();
        });
    }
}
  servicefeeList() {
    this._empService.servicefeeList().subscribe({
      next: (res) => {
        this.servicefee=res.procService_fees
        console.log('servicefee',res.procService_fees);
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  servicefeedelete(id: number) {
    this._empService.servicefeedelete(id).subscribe({
      next: (res) => {
        this.servicefeeList();
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
