import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
// import { error } from 'console';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css'],
  providers: [MessageService]

})
export class ServiceDetailComponent implements OnInit {
  displayBasic:boolean=false;
  showSuccess: boolean = false;
  public plan_ID: any;
  public subCity: any;
  // public sdpid: any;
  public numServicePerday: any;
  public button='save';
  annualplan: any;
  serd: any;
  serd1: any;
  selectedsdpid: any;

showSuccessMessage() {
  this.showSuccess = true;
  setTimeout(() => {
    this.showSuccess = false;
  }, 3000); 
  
}
  data: any;
  displayedColumns: string[] = [
    'plan_ID',
    'sdpid',
    'subCity',
    'num_Service_Per_day',
    'action',
  
  ];
  servicedetail: any;

  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService

  ) {}
  form: FormGroup = new FormGroup({
    plan_ID: new FormControl(),
    sdpid: new FormControl(),
    subCity: new FormControl(),
    // planID: new FormControl(),
    num_Service_Per_day: new FormControl(),
    accomplished_Services: new FormControl(),
    grand_Plan_Per_Year: new FormControl(),
    accomplished: new FormControl(),
    income_Planed: new FormControl(),
    income_Collected: new FormControl(),
    number_of_Pend_Process_Min: new FormControl(),
    number_of_Pend_process: new FormControl(),
    no_of_Service_Exceleted: new FormControl(),
    created_By: new FormControl(),
    updated_By:new FormControl(),
    deleted_By: new FormControl(),
    created_Date: new FormControl(new Date().toISOString().substr(0, 10)),
    is_Deleted: new FormControl(new Date().toISOString().substr(0, 10)),
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
    this.servicedetailList();
    this.getSubCities();
    this.annualplanList();
    this.servdet();
    
    this.form.patchValue({
      // sdpid:generateGuid(),
      plan_ID: generateGuid(),
      created_by: generateGuid(),
      updated_By: generateGuid(),
      deleted_By: generateGuid(),
      is_Deleted:true
    })
  }
  getSubCities() {
    this._empService.subCityList().subscribe((res:any) => {
      this.subCity = res.procorganizationss;
      console.log('subcityyyy', this.subCity);
      
    });
  }
  annualplanList() {
    this._empService.annualplanList().subscribe((res:any) => {
        this.annualplan=res.procService_Plans
        console.log('annualplan',res.procService_Plans);
    });
  }
  servdet(){
    this._empService.servicedetail().subscribe((res:any)=>{
      this.serd = res
      console.log('res.View_service_detail_plan',this.serd);

    })
  };
  
  passdata(dataq:any){
    setTimeout(() => {
    this.selectedsdpid=dataq
    console.log('selectedsdpid', this.selectedsdpid);
    
    console.log('passSubcityData',this.serd);

    this.serd1 = this.serd.filter((data: any)=> data.sdpid == dataq)
    console.log('data',this.serd1);
  }, 1000); 
    
  }

    
  openEditForm(data: any) {
    this.button='Update'
    //this.plan_ID=data
    //this.subCity=data
    //this.numServicePerday=data
    console.log('Update', data);
    this.servicedetailList();
    this.passdata(this.form.get('sdpid')?.value)
    
    this.form.patchValue(
      {
        // plan_ID:data.plan_ID,
        // sdpid: data.sdpid,
        plan_ID: data.planID,
        sdpid:data.sdpid,
        num_Service_Per_day: data.num_Service_Per_day,
        accomplished_Services: data.accomplished_Services,
        grand_Plan_Per_Year:data.grand_Plan_Per_Year,
        accomplished:data.accomplished,
        income_Planed:data.income_Planed,
        income_Collected:data.income_Collected,
        number_of_Pend_Process_Min:data.number_of_Pend_Process_Min,
        number_of_Pend_process:data.number_of_Pend_process,
        no_of_Service_Exceleted:data.no_of_Service_Exceleted,
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
  update(){
    
    this._empService.servicedetailupdate(this.form.value).subscribe((res)=>{
      this.servdet()
      this.passdata(this.selectedsdpid);
      
console.log('responseerty',res);
this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Table Update successfully' });
// this._empService.servicedetail().subscribe((res:any)=>{
//   this.serd = res
//   console.log('res.View_service_detail_plan444',this.serd);

// })
// this.passdata(this.form.get('sdpid')?.value)

    },
    (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to Update table' });
    }
    )
    
  } 
  openAddForm() {
    this.button = 'Save';
    // this.form.reset({
    //   plan_ID: generateGuid(),
    //   sdpid:generateGuid(),

    // })
    this.numServicePerday = null; 
  }
onFormSubmit() {

  this._empService.servicedetailadd(this.form.value).subscribe((res)=>{
    this.servicedetailList();
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Table Add successfully'});
  },
  (error) => {
    this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to add table' });
  }
);
//     console.log('numserviceperday',this.form.get('num_Service_Per_day')?.value);
//     if(this.numServicePerday==null||this.numServicePerday==undefined){  
//     if(this.form.get('num_Service_Per_day')?.value!=null||this.form.get('num_Service_Per_day')?.value!=undefined){
//    this._empService.servicedetailadd(this.form.value).subscribe((res)=>{
//     this.servicedetailList();
//     this.messageService.add({severity:'success', summary: 'Success Message', detail:'Table Add successfully'});
//   },
//   (error) => {
//     this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to add table' });
//   }
// );
//    }else{
//      alert('youare not fill service detail');
//    }
//       }else{
//       this._empService.servicedetailupdate(this.form.value).subscribe((res)=>{
//       this.servicedetailList();
//       this.messageService.add({severity:'success', summary: 'Success Message', detail:'Table Updated successfully'});

//     },
//     (error) => {
//       this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to update table' });
//     }
//   );
// }
}

  servicedetailList() {
    this._empService.servicedetailList().subscribe({
      next: (res) => {
        this.servicedetail=res.procService_Details
        console.log('servicedetail',res.procService_Details);
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  servicedetaildelete(id: any) {
    console.log('idddddd',id);
    
    this._empService.servicedetaildelete(id).subscribe({
      next: (res) => {
        this.servicedetailList();
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
