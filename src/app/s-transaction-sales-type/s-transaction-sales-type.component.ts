import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-s-transaction-sales-type',
  templateUrl: './s-transaction-sales-type.component.html',
  styleUrls: ['./s-transaction-sales-type.component.css'],
  providers: [MessageService],
})
export class STransactionSalesTypeComponent implements OnInit {
  displayBasic: boolean = false;
  showSuccess: boolean = false;
  public startingNo: any;
  public button = 'save';

  showSuccessMessage() {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }
  data: any;
  displayedColumns: string[] = [
    'code',
    'description',
    'starting_No',
    'last_Date_Used',
    'sdp',
    'service_Code',
    'ending_No',
    'last_No_Used',
    'default_Nos',
    'manual_Nos',
    'date_Order',
  ];
  startingno: any;

  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService
  ) {}

  form: FormGroup = new FormGroup({
    code: new FormControl(),
    description: new FormControl(),
    starting_No: new FormControl(),
    last_Date_Used: new FormControl(new Date().toISOString().substr(0, 10)),
    sdp: new FormControl(),
    service_Code: new FormControl(),
    ending_No: new FormControl(),
    last_No_Used: new FormControl(),
    default_Nos: new FormControl(),
    manual_Nos: new FormControl(),
    date_Order: new FormControl(),
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
  });
  ngOnInit(): void {
    this.sTransactionSalesTypeslist();
    this.form.patchValue({
      sdp: this.generateGuid(),
      service_Code: this.generateGuid(),
    });
  }
  generateGuid(): any {
    throw new Error('Method not implemented.');
  }
  openEditForm(data: any) {
    this.button = 'Update';
    this.startingNo = data;
    this.form.patchValue({
      code: data.code,
      description: data.description,
      starting_No: data.starting_No,
      last_Date_Used: data.last_Date_Used,
      sdp: data.sdpservice_Code,
      service_Code: data.service_Code,
      ending_No: data.ending_No,
      last_No_Used: data.last_No_Used,
      default_Nos: data.default_Nos,
      manual_Nos: data.manual_Nos,
      date_Order: data.date_Order,
    });
  }
  openAddForm() {
    this.button = 'Save';
    this.form.reset({
      starting_No: randomNumber(1, 999),
    });
    this.startingNo = null;
  }
  onFormSubmit() {
    console.log('starting', this.form.get('starting_No')?.value);
    if (this.startingNo == null || this.startingNo == undefined) {
      if (
        this.form.get('starting_No')?.value != null ||
        this.form.get('starting_No')?.value != undefined
      ) {
        this._empService.sTransactionSalesTypess(this.form.value).subscribe(
          (res) => {
            this.sTransactionSalesTypeslist();
            this.messageService.add({
              severity: 'success',
              summary: 'Success Message',
              detail: 'Table Add successfully',
            });
          },
          (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error Message',
              detail: 'Failed to add table',
            });
          }
        );
      } else {
        alert('youare not fill measurement fee');
      }
    } else {
      this._empService.sTransactionSalesTypessupdate(this.form.value).subscribe(
        (res) => {
          this.sTransactionSalesTypeslist();
          this.messageService.add({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Table Updated successfully',
          });
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error Message',
            detail: 'Failed to update table',
          });
        }
      );
    }
  }

  sTransactionSalesTypeslist() {
    this._empService.sTransactionSalesTypeslist().subscribe({
      next: (res) => {
        this.startingno = res.procS_Transaction_Sales_Types;
        console.log('startingno', res.procS_Transaction_Sales_Types);
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  sTransactionSalesTypesdelete(id: number) {
    this._empService.sTransactionSalesTypesdelete(id).subscribe({
      next: (res) => {
        this.sTransactionSalesTypeslist();
        this.messageService.add({
          severity: 'success',
          summary: 'Success Message',
          detail: 'Table Deleted Successfully',
        });
      },
      error: console.log,
    });
  }
}
function generateGuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
