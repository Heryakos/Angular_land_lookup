import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-service-block-registration',
  templateUrl: './service-block-registration.component.html',
  styleUrls: ['./service-block-registration.component.css'],
  providers: [MessageService]

})
export class ServiceBlockRegistrationComponent implements OnInit {
  displayBasic:boolean=false;
  showSuccess: boolean = false;
  public woredaID: any;
  public button='save';
  // woredaID: any;
  is_Active = false;

showSuccessMessage() {
  this.showSuccess = true;
  setTimeout(() => {
    this.showSuccess = false;
  }, 3000); 
  
}
  data: any;
  displayedColumns: string[] = [
    'woreda_ID',
    'subCity',
    'blocked_No',
    'start_Date',
    'end_Date', 
    'active_Remark',    
    'action'
  ];
  serviceblock: any;
  isRowHovered: boolean[] = [];
  toggleRowHover(rowIndex: number) {
    this.isRowHovered[rowIndex] = !this.isRowHovered[rowIndex];
  }
  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService

  ) {}

  saveForm(){
    console.log('Form data is ', this.form.value);
  }

  form: FormGroup = new FormGroup({
    block_ID: new FormControl(),
    service_ID: new FormControl(),
    sdP_ID: new FormControl(),
    woreda_ID: new FormControl(),
    subCity: new FormControl(),
    blocked_No: new FormControl(),
    start_Date: new FormControl(),
    end_Date: new FormControl(),
    is_Active: new FormControl(),
    active_Remark: new FormControl(),
    deactive_Remark: new FormControl(),
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
    this.getWoredas()
    this.serviceblockList();
    this.form.patchValue({
      customer_Type_ID: randomNumber(1,999),
      block_ID:generateGuid(),
      sdP_ID:generateGuid(),
      service_ID:generateGuid(),
      created_by: generateGuid(),
      updated_By: generateGuid(),
      deleted_By: generateGuid(),
      is_Deleted:true,

    })
  }
  getWoredas(){
    this._empService.woredaidList().subscribe((res)=>{
      this.woredaID=res.procWoreda_Lookups
      // console.log('woredass',this.woredas);
      
    })
  }
  openEditForm(data: any) {
    this.button='Update'
    this.woredaID=data
    this.form.patchValue(
      {
        block_ID:data.block_ID,
        service_ID: data.service_ID,
        sdP_ID: data.sdP_ID,
        subCity:data.subCity,
        woreda_ID:data.woreda_ID,
        blocked_No: data.blocked_No,
        start_Date: data.start_Date,
        end_Date: data.end_Date,
        is_Active: data.is_Active,
        active_Remark: data.active_Remark,
        is_Deleted: data.is_Deleted,
        created_Date: data.created_Date,
        updated_Date: data.updated_Date,
        deleted_Date: data.deleted_Date,
      }
    )

  } 
  save(){
    this._empService.serviceblockadd(this.form.value).subscribe((res)=>{
      this.serviceblockList();
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Table Add successfully' });
    },
    (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to add table' });
    })
    this.button = 'Save';
      this.form.reset({
        customer_Type_ID: randomNumber(1,999)
      })
      this.woredaID = null; 
  }  
// onFormSubmit() {
//     console.log('woredaid',this.form.get('woreda_ID')?.value);
//     if(this.woredaID==null||this.woredaID==undefined){  
//     if(this.form.get('woreda_ID')?.value!=null||this.form.get('woreda_ID')?.value!=undefined){
//    this._empService.serviceblockadd(this.form.value).subscribe((res)=>{
//     this.serviceblockList();
//     this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Table Add successfully' });
//   },
//   (error) => {
//     this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to add table' });
//   }
// );
//       }else{
//         alert('youare not fill service block registration');
//       }
//       }else{
//       this._empService.serviceblockupdate(this.form.value).subscribe((res)=>{
//       this.serviceblockList();
//     },
//     (error) => {
//       this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to update table' });
//     }
//   );
// }
// }

  serviceblockList() {
    this._empService.serviceblockList().subscribe({
      next: (res) => {
        this.serviceblock=res.procService_Block_Registrations
        console.log('serviceblock',res.procService_Block_Registrations);



      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  serviceblockdelete(id: number) {
    this._empService.serviceblockdelete(id).subscribe({
      next: (res) => {
        this.serviceblockList();
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