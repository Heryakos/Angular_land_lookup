import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-property-use',
  templateUrl: './property-use.component.html',
  styleUrls: ['./property-use.component.css'],
})
export class PropertyUseComponent implements OnInit {
  showSuccess: boolean = false;
  public namE: any;
  public button = 'save';
  displayBasic: boolean = false;

  showSuccessMessage() {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }
  data: any;
  displayedColumns: string[] = [
    'name',
    'code',
    'isActive',
    'pay_For_Survey',
    'action',
  ];

  public proprtyuse: any;

  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService
  ) {}
  form: FormGroup = new FormGroup({
    name: new FormControl(),
    code: new FormControl(),
    isActive: new FormControl(),
    pay_For_Survey: new FormControl(),
  });
  ngOnInit(): void {
    this.proprtyuselist();
    this.form.patchValue({
      isActive: true,
      pay_For_Survey: true,
    });
  }
  openEditForm(data: any) {
    this.button = 'Update';
    this.namE = data;
    this.form.patchValue({
      name: data.name,
      code: data.code,
      isActive: data.isActive,
      pay_For_Survey: data.pay_For_Survey,
    });
  }
  openAddForm() {
    this.button = 'Save';
    this.form.reset({});
    this.namE = null;
  }
  onFormSubmit(): void {
    console.log('customertype', this.form.get('name')?.value);
    if (this.namE == null || this.namE == undefined) {
      if (
        this.form.get('name')?.value != null ||
        this.form.get('name')?.value != undefined
      ) {
        this._empService.proprtyusedd(this.form.value).subscribe(
          (res) => {
            this.proprtyuselist();
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
        this.messageService.add({
          severity: 'error',
          summary: 'Error Message',
          detail: 'You have not filled in the customer type',
        });
      }
    } else {
      this._empService.proprtyuseupdate(this.form.value).subscribe(
        (res) => {
          this.proprtyuselist();
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

  proprtyuselist() {
    this._empService.proprtyuselist().subscribe({
      next: (res) => {
        this.proprtyuse = res.proc_Proprty_Use;
        console.log('proprtyuse', res.proc_Proprty_Use);
      },
      error: console.log,
    });
  }
  proprtyusedelete(id: number) {
    this._empService.proprtyusedelete(id).subscribe({
      next: (res) => {
        this.proprtyuselist();
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
