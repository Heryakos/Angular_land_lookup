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
  public serviceFee1: any;
  public button='save';
  public service_ID: any;

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
  
  ];
  servicefee: any;

  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService

  ) {}

  form: FormGroup = new FormGroup({
    service_ID: new FormControl(),
    service_fee1: new FormControl(),
    assurance: new FormControl(),
    tember: new FormControl(),
    deleted_By: new FormControl(),
    created_By: new FormControl(),
    updated_By:new FormControl(),
    is_Deleted: new FormControl(new Date().toISOString().substr(0, 10)),
    created_Date: new FormControl(new Date().toISOString().substr(0, 10)),
    updated_Date: new FormControl(new Date().toISOString().substr(0, 10)),
    deleted_Date: new FormControl(new Date().toISOString().substr(0, 10)),
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
    this.getservicess();
    this.form.patchValue({
   //    service_ID: generateGuid(),
      created_by: generateGuid(),
      updated_By: generateGuid(),
      deleted_By: generateGuid(),
      is_Deleted:true
    })
  }
  getservicess() {
    this._empService.servicessList().subscribe((res:any) => {
      this.service_ID = res.procservicess;
       console.log('service_ID',this.service_ID);  
    });
  }
  openEditForm(data: any) {
    this.button='Update'
    this.service_ID=data
    this.serviceFee1=data
    console.log('Update',data)
    this.getservicess();
    this.form.patchValue(
      {
        service_ID: data.service_code,
        service_fee1: data.service_Fee,
        assurance: data.assurance,
        tember: data.tember,
        created_by: data.created_by,
        updated_By:data.updated_By,
        deleted_By: data.deleted_By,
        is_Deleted: data.is_Deleted,
        created_Date: data.created_Date,
        updated_Date: data.updated_Date,
        deleted_Date: data.deleted_Date,
      }
    )
    //console.log('serviceidlogg',this.form.get('service_ID')?.value,data.service_code);
    

  } 
  passdata(value: any) {
    console.log('Selected value:', value);
  }
  openAddForm() {
    this.button = 'Save';
    this.form.reset({
      service_ID: generateGuid( )
    })
    this.serviceFee1 = null; 
  }  
onFormSubmit() {
    console.log('servicefee',this.form.get('service_fee1')?.value);
    if(this.serviceFee1==null||this.serviceFee1==undefined){  
    if(this.form.get('service_fee1')?.value!=null||this.form.get('service_fee1')?.value!=undefined){
   this._empService.servicefeeadd(this.form.value).subscribe((res)=>{
    this.servicefeeList();
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Table Add successfully'});
  },
  (error) => {
    this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to add table' });
  }
);
   } else {
    this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'You have not filled in the Service Fee' });
   }
      }else{
      this._empService.servicefeeupdate(this.form.value).subscribe((res)=>{
      this.servicefeeList();
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'Table Updated successfully'});
    },
    (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to Update table' });
    }
  );
}
}
  servicefeeList() {
    this._empService.servicefeeList().subscribe({
      next: (res) => {
        this.servicefee=res
        console.log('servicefee',res);
      },
      error: console.log,
    });
  }
  update(){
    this._empService.servicefeeupdate(this.form.value).subscribe((res)=>{
      this.servicefeeList();
console.log('responsevnbx',res);
this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Table Update successfully' });

    },
    (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to Update table' });
    }
    )
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  servicefeedelete(id: any) {
    console.log('iddddd',id);
    this._empService.servicefeedelete(id.service_code).subscribe({
      next: (res) => {
        this.servicefeeList();
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
