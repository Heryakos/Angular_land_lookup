import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-woreda-list',
  templateUrl: './woreda-list.component.html',
  styleUrls: ['./woreda-list.component.css'],
  providers: [MessageService]

})
export class WoredaListComponent implements OnInit {
  displayBasic:boolean=false;
  showSuccess: boolean = false;
  public subCity: any;
  public woredaName: any;
  public woredaID: any;
  public button='save';
  wored: any;

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
    'woreda_Name',
    'address',
    'action',
  
  ];
  woredaid: any;

  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService

  ) {}

  form: FormGroup = new FormGroup({
    woreda_ID: new FormControl(),
    woreda_Name: new FormControl(),
    address: new FormControl(),
    subCity: new FormControl(),
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
    this.getWoredas();
    this.getSubCities();
    this.woredaidList();
    this.form.patchValue({
      subCity: generateGuid(),
      created_by: generateGuid(),
      updated_By: generateGuid(),
      deleted_By: generateGuid(),
      is_Deleted:true
    })
  }
  getWoredas(){
    this._empService.woredaidList().subscribe((res)=>{
      this.wored=res.procWoreda_Lookups
      // console.log('Worda',this.woreda);
      
    })
  }
  getSubCities() {
    this._empService.subCityList().subscribe((res) => {
      this.subCity = res.procorganizationss;
    });
  }
  openEditForm(data: any) {
    this.button='Update'
    this.subCity=data
    this.woredaID=data
    this.form.patchValue(
      {
        woreda_ID:data.woreda_ID,
        woreda_Name: data.woreda_Name,
        address: data.address,
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
      woreda_ID: randomNumber(1,999)
    })
    this.woredaID = null; 
  } 
onFormSubmit() {
    console.log('woredaid',this.form.get('woreda_ID')?.value);
    if(this.woredaID==null||this.woredaID==undefined){  
    if(this.form.get('woreda_ID')?.value!=null||this.form.get('woreda_ID')?.value!=undefined){
   this._empService.woredaidadd(this.form.value).subscribe((res)=>{
    this.woredaidList();
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Table Add successfully'});
  },
  
  (error) => {
  this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to add table' });
}
);
   }else{
     this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'You have not filled in the woreda list' });
   }
      }else{
      this._empService.woredaidupdate(this.form.value).subscribe((res)=>{
      this.woredaidList();
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'Table Updated successfully'});

    },
    (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to update table' });
    });
    }
}
  woredaidList() {
    this._empService.woredaidList().subscribe({
      next: (res) => {
        this.woredaid=res.procWoreda_Lookups
        console.log('woredaid',res.procWoreda_Lookups);
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  woredaiddelete(id: number) {
    this._empService.woredaiddelete(id).subscribe({
      next: (res) => {
        this.woredaidList();
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

