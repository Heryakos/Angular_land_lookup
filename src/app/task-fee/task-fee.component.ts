import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-task-fee',
  templateUrl: './task-fee.component.html',
  styleUrls: ['./task-fee.component.css'],
  providers: [MessageService]

})
export class TaskFeeComponent implements OnInit {
  displayBasic:boolean=false;
  showSuccess: boolean = false;
  public taskName: any;
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
    'task_ID',
    'task_Name',
    'property_Type',
    'fee',
    'action',
    // 'dob',
  
  ];
  taskfee: any;

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
    this.taskfeeList();
    this.form.patchValue({
      id: randomNumber(1,999),
      service_ID: generateGuid(),
      created_by: generateGuid(),
      updated_By: generateGuid(),
      deleted_By: generateGuid(),
      is_Deleted:true
    })
  }

  openEditForm(data: any) {
    this.button='Update'
    this.taskName=data
    this.form.patchValue(
      {
        service_ID:data.service_ID,
        task_Name: data.task_Name,
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
      service_ID: generateGuid()
    })
    this.taskName = null; 
  } 
onFormSubmit() {
    console.log('taskname',this.form.get('task_Name')?.value);
    if(this.taskName==null||this.taskName==undefined){  
    if(this.form.get('task_Name')?.value!=null||this.form.get('task_Name')?.value!=undefined){
   this._empService.taskfeeadd(this.form.value).subscribe((res)=>{
    this.taskfeeList();
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Table Add successfully' });
  },
  (error) => {
    this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to add table' });
  }
);
} else {
   this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'You have not filled in the task fee' });
  }
      }else{
      this._empService.taskfeeupdate(this.form.value).subscribe((res)=>{
      this.taskfeeList();
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'Table Updated successfully'});

    },
    (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to update table' });
    }
  );
    }
}
  taskfeeList() {
    this._empService.taskfeeList().subscribe({
      next: (res) => {
        this.taskfee=res.procTask_Fees
        console.log('taskfee',res.procTask_Fees);
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  taskfeedelete(id: number) {
    this._empService.taskfeedelete(id).subscribe({
      next: (res) => {
        this.taskfeeList();
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