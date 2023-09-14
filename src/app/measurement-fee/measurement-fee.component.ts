import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
// import { error } from 'console';

@Component({
  selector: 'app-measurement-fee',
  templateUrl: './measurement-fee.component.html',
  styleUrls: ['./measurement-fee.component.css'],
  providers: [MessageService]

})
export class MeasurementFeeComponent implements OnInit {
  displayBasic:boolean=false;
  showSuccess: boolean = false;
  public fromM2: any;
  public button='save';

showSuccessMessage() {
  this.showSuccess = true;
  setTimeout(() => {
    this.showSuccess = false;
  }, 3000); 
  
}
  data: any;
  displayedColumns: string[] = [
    'measurement_Fee_ID',
    'from_M2',
    'to_M2',
    'amount',
    'action',
  
  ];
  measurementfee: any;

  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService

  ) {}

  form: FormGroup = new FormGroup({
    measurement_Fee_ID: new FormControl(),
    from_M2: new FormControl(),
    to_M2: new FormControl(),
    amount: new FormControl(),
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
    this.measurementfeeList();
    this.form.patchValue({
      measurement_Fee_ID: randomNumber(1,999),
      created_by: generateGuid(),
      updated_By: generateGuid(),
      deleted_By: generateGuid(),
      is_Deleted:true

    })
  }
  openEditForm(data: any) {
    this.button='Update'
    this.fromM2=data
    this.form.patchValue(
      {
        measurement_Fee_ID:data.measurement_Fee_ID,
        from_M2: data.from_M2,
        to_M2: data.to_M2,
        amount: data.amount,
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
      measurement_Fee_ID: randomNumber(1,999)
    })   
     this.fromM2 = null; 
  }
  onFormSubmit() {
    console.log('from',this.form.get('from_M2')?.value);
    if(this.fromM2==null||this.fromM2==undefined){  
    if(this.form.get('from_M2')?.value!=null||this.form.get('from_M2')?.value!=undefined){

   this._empService.measurementfeeadd(this.form.value).subscribe((res)=>{
    this.measurementfeeList();
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Table Add successfully' });
  },
  (error) => {
    this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to add table' });
  }
);
   }else{
     alert('youare not fill measurement fee');
   }
      }else{
      this._empService.measurementfeeupdate(this.form.value).subscribe((res)=>{
      this.measurementfeeList();
    },
    (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to update table' });
    }
  );
}
}

  measurementfeeList() {
    this._empService.measurementfeeList().subscribe({
      next: (res) => {
        this.measurementfee=res.procMeasurement_Fees
        console.log('measurementfee',res.procMeasurement_Fees);
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  measurementfeedelete(id: number) {
    this._empService.measurementfeedelete(id).subscribe({
      next: (res) => {
        this.measurementfeeList();
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
