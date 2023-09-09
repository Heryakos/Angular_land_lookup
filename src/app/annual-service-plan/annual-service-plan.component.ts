import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-annual-service-plan',
  templateUrl: './annual-service-plan.component.html',
  styleUrls: ['./annual-service-plan.component.css']
})
export class AnnualServicePlanComponent implements OnInit {
  showSuccess: boolean = false;
  public erviceName: any;
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
    'service_Name',
    'description',
    'budget_Year',
    'start_Date_GC',
    'end_Date_GC',
    'grand_Plan_Per_Year',
    'action',
  ];
  annualplan: any;
  constructor(
    private _empService: EmployeeService
    
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
    this.annualplanList();
    this.form.patchValue({
      planID: randomNumber(1,999),
      created_by: generateGuid(),
      updated_By: generateGuid(),
      deleted_By: generateGuid(),
      is_Deleted:true
    })
  }
  openEditForm(data: any) {
    this.button='Update'
    this.erviceName=data
    this.form.patchValue(
      {
        planID:data.planID,
        service_ID: data.service_ID,
        service_Name: data.service_Name,
        description: data.description,
        budget_Year: data.budget_Year,
        start_Date_GC: data.start_Date_GC,
        end_Date_GC: data.end_Date_GC,
        grand_Plan_Per_Year: data.grand_Plan_Per_Year,
        accomplished: data.accomplished,
        income_Planed: data.income_Planed,
        income_Collected: data.income_Collected,
        number_of_Pend_Process_Min: data.number_of_Pend_Process_Min,
        number_of_Pend_process: data.number_of_Pend_process,
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
onFormSubmit() {
    console.log('ervicename',this.form.get('erviceName')?.value);
    if(this.erviceName==null||this.erviceName==undefined){  
    if(this.form.get('service_Name')?.value!=null||this.form.get('service_Name')?.value!=undefined){
   this._empService.annualplanadd(this.form.value).subscribe((res)=>{
    this.annualplanList();
     })
      }else{
        alert('youare not fill customertype');
      }
      }else{
      this._empService.annualplanupdate(this.form.value).subscribe((res)=>{
      this.annualplanList();
        });
    }
}

  annualplanList() {
    this._empService.annualplanList().subscribe({
      next: (res) => {
        console.log('annualplan',res.procService_Plans);

        
      },
      error: console.log,
    });
  }

  annualplandelete(id: number) {
    this._empService.annualplandelete(id).subscribe({
      next: (res) => {
        this.annualplanList();
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

