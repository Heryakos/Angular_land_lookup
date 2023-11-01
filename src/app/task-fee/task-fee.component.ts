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
  public isDropdownSelected: boolean = false;
  displayBasic:boolean=false;
  showSuccess: boolean = false;
  public task_ID: any;
  public service_ID: any;
  public taskName: any;
  public button='save';
  task_IDd: any;
  taskList: any;
  serviceForFilter: any;
  taskfee1: any;
  tasName: any;
  

showSuccessMessage() {
  this.showSuccess = true;
  setTimeout(() => {
    this.showSuccess = false;
  }, 3000); 
  
}
  data: any;
  displayedColumns: string[] = [
    'task_code',
    'service_ID',
    'task_ID',
    'task_Name',
    'property_Type',
    'fee',
    'action',
  
  ];
  taskfee: any[] = [];
  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService

  ) {}

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    service_ID: new FormControl(),
    task_code: new FormControl(),
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
    
  })
  ngOnInit(): void {
    this.getservicess();
    this.taskfeeList();
    this.gettaskList();
    this.form.patchValue({
      // id: generateGuid(),
      task_ID:generateGuid(),
      task_code:generateGuid(),
      created_by: generateGuid(),
      updated_By: generateGuid(),
      deleted_By: generateGuid(),
      is_Deleted:true
    })
  }
  getservicess() {
    this._empService.servicessList().subscribe((res:any) => {
      this.service_ID = res.procservicess;
      // console.log('service_ID',this.service_ID);  
    });
  }

  gettaskList() {
    this._empService.taskList().subscribe((res:any) => {
       console.log('task_ID',res);  
      this.task_ID = res.proctaskss;
       console.log('Response:', this.task_ID );
    });
  }
  openEditForm(data: any) {
    this.button='Update'
    this.task_ID=data
    this.form.patchValue(
      {
        service_ID:data.service_ID,
        task_Name: data.task_Name,
        task_ID: data.task_ID,
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
   
    this.taskName = null; 
  } 
  onServiceIDChange(value: any) {
    this.isDropdownSelected = !!value;
    this.serviceForFilter=value
    this.passdata(value);
    console.log('serviceForFilter',value);
     this.taskfee1=this.taskfee.filter((value:any)=>value.service_ID==this.serviceForFilter)
        console.log('this.taskfee1',this.taskfee1);
    
  }
  passdata(data:any){
    console.log('dataa',data);
    
    this._empService.getTasks(data).subscribe((ress:any)=>
      {
        this.taskList=ress
        console.log('taskresponsess',this.taskList);
        
      })
  }
  pasTask(task:any){
// console.log('taskkkkk',task);
this.tasName=task
// this.form.patchValue({
//   task_ID:task
// })
  }
  onFormSubmit() {
    console.log('taskname',this.form.get('task_Name')?.value);  
    if (this.taskName == null || this.taskName == undefined) {
      if (this.form.get('task_Name')?.value != null || this.form.get('task_Name')?.value != undefined) {
        this._empService.taskfeeadd(this.form.value).subscribe(
          (res) => {
            this.taskfeeList();
            this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Table Add successfully' });
            this.resetForm(); 
          },
          (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to add table' });
          }
        );
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'You have not filled in the task fee' });
      }
    } else {
      this._empService.taskfeeupdate(this.form.value).subscribe(
        (res) => {
          this.taskfeeList();
          this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Table Updated successfully' });
          this.resetForm(); 
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to update table' });
        }
      );
    }
  }
  
  resetForm() {
    this.form.reset();
    this.taskName = null;
  }
  

  
  taskfeeList() {
    this._empService.taskfeeList().subscribe({
      next: (res) => {
        this.taskfee=res.procTask_Fees
        console.log('taskfee',this.taskfee);
       
        
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