import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-woreda-group',
  templateUrl: './woreda-group.component.html',
  styleUrls: ['./woreda-group.component.css'],
  providers: [MessageService]

})
export class WoredaGroupComponent implements OnInit {
  displayBasic:boolean=false;
  showSuccess: boolean = false;
  public sdPID: any;
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
    'sdP_ID',
    'group_ID',
    'action',
    // 'dob',
  
  ];
  woredagroup: any;

  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService

  ) {}

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    sdP_ID: new FormControl(),
    woreda_ID: new FormControl(),
    group_ID: new FormControl(),
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
    this.woredagrouplist();
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
    this.sdPID=data
    this.form.patchValue(
      {
        id:data.id,
        sdP_ID: data.sdP_ID,
        woreda_ID: data.woreda_ID,
        group_ID: data.group_ID,
        address: data.address,
        subCity: data.subCity,
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
    this.sdPID = null; 
  }
onFormSubmit() {
    console.log('sdPid',this.form.get('sdP_ID')?.value);
    if(this.sdPID==null||this.sdPID==undefined){  
    if(this.form.get('sdP_ID')?.value!=null||this.form.get('sdP_ID')?.value!=undefined){
   this._empService.woredagroupadd(this.form.value).subscribe((res)=>{
    this.woredagrouplist();
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Table Add successfully'});
  },
  (error) => {
    this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to add table' });
  }
);
   }else{
     alert('youare not fill woreda group');
   }
      }else{
      this._empService.woredagroupupdate(this.form.value).subscribe((res)=>{
      this.woredagrouplist();
    },
    (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to update table' });
    }
  );
}
}

  woredagrouplist() {
    this._empService.woredagrouplist().subscribe({
      next: (res) => {
        this.woredagroup=res.procWoreda_Groups
        console.log('woredagroup',res.procWoreda_Groups);
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
        this.woredagrouplist();
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
