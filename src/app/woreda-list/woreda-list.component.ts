import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-woreda-list',
  templateUrl: './woreda-list.component.html',
  styleUrls: ['./woreda-list.component.css']
})
export class WoredaListComponent implements OnInit {

  showSuccess: boolean = false;
  public woredaName: any;
  public button='save';

showSuccessMessage() {
  this.showSuccess = true;
  setTimeout(() => {
    this.showSuccess = false;
  }, 3000); 
  
}
  data: any;
  displayedColumns: string[] = [
    'woreda_ID',
    'woreda_Name',
    'address',
    'action',
    // 'dob',
  
  ];
  woredaid: any;

  constructor(
    private _empService: EmployeeService,
  ) {}

  form: FormGroup = new FormGroup({
    woreda_ID: new FormControl(),
    woreda_Name: new FormControl(),
    address: new FormControl(),
    subCity: new FormControl(),
    created_By: new FormControl(),
    updated_By:new FormControl(),
    deleted_By: new FormControl(),
    created_Date: new FormControl(new Date().toISOString().substr(0, 10)),
    updated_Date: new FormControl(new Date().toISOString().substr(0, 10)),
    deleted_Date: new FormControl(new Date().toISOString().substr(0, 10)),
    has_Capital_Gain: new FormControl(new Date().toISOString().substr(0, 10)),
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
    this.woredaidList();
    this.form.patchValue({
      woreda_ID: randomNumber(1,999),
      created_by: generateGuid(),
      updated_By: generateGuid(),
      deleted_By: generateGuid(),
      subCity: generateGuid(),
      is_Deleted:true
    })
  }

  openEditForm(data: any) {
    this.button='Update'
    this.woredaName=data
    this.form.patchValue(
      {
        woreda_ID:data.woreda_ID,
        woreda_Name: data.woreda_Name,
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
onFormSubmit() {
    console.log('woredaname',this.form.get('woreda_Name')?.value);
    if(this.woredaName==null||this.woredaName==undefined){  
    if(this.form.get('woreda_Name')?.value!=null||this.form.get('woreda_Name')?.value!=undefined){
   this._empService.woredaidadd(this.form.value).subscribe((res)=>{
    this.woredaidList();
     })
      }else{
        alert('youare not fill customertype');
      }
      }else{
      this._empService.woredaidupdate(this.form.value).subscribe((res)=>{
      this.woredaidList();
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

