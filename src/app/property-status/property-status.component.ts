import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-property-status',
  templateUrl: './property-status.component.html',
  styleUrls: ['./property-status.component.css']
})
export class PropertyStatusComponent implements OnInit {

  showSuccess: boolean = false;
  public propertyStatus: any;
  public button='save';

showSuccessMessage() {
  this.showSuccess = true;
  setTimeout(() => {
    this.showSuccess = false;
  }, 3000); 
  
}
  data: any;
  displayedColumns: string[] = [
    'p_Status_ID',
    'property_Status',
    'expires_Days',
    'color',
    'action',
    // 'dob',
  
  ];
  propertystatus: any;

  constructor(
    private _empService: EmployeeService,
  ) {}

  form: FormGroup = new FormGroup({
    p_Status_ID: new FormControl(),
    property_Status: new FormControl(),
    expires_Days: new FormControl(),
    color: new FormControl(),
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
    this.propertystatuslist();
    this.form.patchValue({
      p_Status_ID: randomNumber(1,999),
      created_by: generateGuid(),
      updated_By: generateGuid(),
      deleted_By: generateGuid(),
      is_Deleted:true

    })
  }
  openEditForm(data: any) {
    this.button='Update'
    this.propertyStatus=data
    this.form.patchValue(
      {
        p_Status_ID:data.p_Status_ID,
        property_Status: data.property_Status,
        expires_Days: data.expires_Days,
        color: data.color,        
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
    console.log('propertystatus',this.form.get('property_Status')?.value);
    if(this.propertyStatus==null||this.propertyStatus==undefined){  
    if(this.form.get('property_Status')?.value!=null||this.form.get('property_Status')?.value!=undefined){
   this._empService.customertypeadd(this.form.value).subscribe((res)=>{
    this.propertystatuslist();
     })
      }else{
        alert('youare not fill customertype');
      }
      }else{
      this._empService.propertystatusupdate(this.form.value).subscribe((res)=>{
      this.propertystatuslist();
        });
    }
}
  propertystatuslist() {
    this._empService.propertystatuslist().subscribe({
      next: (res) => {
        this.propertystatus=res.procProperty_StatusLookups
        console.log('propertystatus',res.procProperty_StatusLookups);

   
      },
      error: console.log,
    });
  }


  propertystatusdelete(id: number) {
    this._empService.propertystatusdelete(id).subscribe({
      next: (res) => {
        this.propertystatuslist();
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

