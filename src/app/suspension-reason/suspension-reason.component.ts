import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
// import { error } from 'console';

@Component({
  selector: 'app-suspension-reason',
  templateUrl: './suspension-reason.component.html',
  styleUrls: ['./suspension-reason.component.css'],
  providers: [MessageService]

})
export class SuspensionReasonComponent implements OnInit {
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
    'id',
    'suspension_Reason',
    'action',
    // 'dob',
  
  ];
  suspension: any;

  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService

  ) {}

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    suspension_Reason: new FormControl(),
    created_By: new FormControl(),
    updated_By:new FormControl(),
    deleted_By: new FormControl(),
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
    this.suspensionList();
    this.form.patchValue({
      id: randomNumber(1,999),
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
        suspension_Reason: data.suspension_Reason,
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
      id: randomNumber(1,999)
    })
    this.customerType = null; 
  } 
onFormSubmit() {
    console.log('customertype',this.form.get('customer_Type')?.value);
    if(this.customerType==null||this.customerType==undefined){  
    if(this.form.get('customer_Type')?.value!=null||this.form.get('customer_Type')?.value!=undefined){
   this._empService.customertypeadd(this.form.value).subscribe((res)=>{
    this.suspensionList();
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Table Add successfully'});
  },
  (error) => {
    this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to add table' });
  }
);
   }else{
     alert('youare not fill suspension reason');
   }
      }else{
      this._empService.customertypeupdate(this.form.value).subscribe((res)=>{
      this.suspensionList();
    },
    (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to update table' });
    }
  );
}
}
  suspensionList() {
    this._empService.suspensionList().subscribe({
      next: (res) => {
        this.suspension=res.procSuspension_Reason_Lookups
        console.log('suspension',res.procSuspension_Reason_Lookups);
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  suspensiondelete(id: number) {
    this._empService.suspensiondelete(id).subscribe({
      next: (res) => {
        this.suspensionList();
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

