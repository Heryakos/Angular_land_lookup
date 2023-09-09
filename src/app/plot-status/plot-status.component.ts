import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
// import { error } from 'console';

@Component({
  selector: 'app-plot-status',
  templateUrl: './plot-status.component.html',
  styleUrls: ['./plot-status.component.css'],
  providers: [MessageService]

})
export class PlotStatusComponent implements OnInit {
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
    'plot_Status_ID',
    'name',
    'action',
    // 'dob',
  
  ];
  plotstatus: any;

  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService

  ) {}
  form: FormGroup = new FormGroup({
    plot_Status_ID: new FormControl(),
    name: new FormControl(),
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
    this.plotstatuslist();
    this.form.patchValue({
      plot_Status_ID: randomNumber(1,999),
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
        plot_Status_ID:data.plot_Status_ID,
        name: data.name,
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
    console.log('Name',this.form.get('name')?.value);
    if(this.customerType==null||this.customerType==undefined){  
    if(this.form.get('name')?.value!=null||this.form.get('name')?.value!=undefined){
   this._empService.plotstatusadd(this.form.value).subscribe((res)=>{
    this.plotstatuslist();
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Table Add successfully'});
  }
  )
 //  ,error({ 
  
 //  })
   }else{
     alert('youare not fill customerstatus');
   }
      }else{
      this._empService.plotstatusupdate(this.form.value).subscribe((res)=>{
      this.plotstatuslist();
        });
    }
}
  plotstatuslist() {
    this._empService.plotstatuslist().subscribe({
      next: (res) => {
        this.plotstatus=res.procPlotl_Status_Lookups
        console.log('plotstatus',res.procPlotl_Status_Lookups);

      },
      error: console.log,
    });
  }

  plotstatusdelete(id: number) {
    this._empService.plotstatusdelete(id).subscribe({
      next: (res) => {
        this.plotstatuslist();
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


