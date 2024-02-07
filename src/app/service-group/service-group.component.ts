import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-service-group',
  templateUrl: './service-group.component.html',
  styleUrls: ['./service-group.component.css'],
})
export class ServiceGroupComponent implements OnInit {
  showSuccess: boolean = false;
  public serviceCodes: any;
  public button = 'save';
  displayBasic: boolean = false;
  public service_ID: any;
  public group_Name: any;
  viewservicegroup: any;
  group_ID: any;
  service_Code: any;

  showSuccessMessage() {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }
  data: any;
  displayedColumns: string[] = ['group_ID', 'service_Code', 'action'];

  public servicecode: any;

  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService
  ) {}
  form: FormGroup = new FormGroup({
    group_ID: new FormControl(),
    service_Code: new FormControl(),
  });
  ngOnInit(): void {
    this.servicegrouplist();
    this.getservicess();
    this.grouplookuppp();
    this.viewservicegroupList();
    this.form.patchValue({
      is_Deleted: true,
    });
  }
  openEditForm(data: any) {
    this.button = 'Update';
    this.serviceCodes = data;
    this.group_ID = data;
    this.service_Code = data;
    // this.getservicess();
    // this.grouplookuppp();
    // this.viewservicegroupList();
    this.form.patchValue({
      group_ID: data.group_ID,
      service_Code: data.service_Code,
    });
  }
  openAddForm() {
    this.button = 'Save';
    this.form.reset();
    // this.serviceCodes = null;
  }
  save() {
    // debugger;
    this._empService.servicegroupadd(this.form.value).subscribe(
      (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success Message',
          detail: 'Service Group saved successfully',
        });
        this.form.reset();
        this.servicegrouplist();
        this.viewservicegroupList();
        this.displayBasic = false;
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error Message',
          detail: 'Failed to save Service Group',
        });
      }
    );
  }

  update() {
    // debugger;
    this._empService.servicegroupupdate(this.form.value).subscribe(
      (res) => {
        this.servicegrouplist();
        this.viewservicegroupList();
        console.log('ererererer', res);
        this.messageService.add({
          severity: 'success',
          summary: 'Success Message',
          detail: 'Table Update successfully',
        });
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error Message',
          detail: 'Failed to Update table',
        });
      }
    );
  }

  servicegrouplist() {
    this._empService.servicegrouplist().subscribe({
      next: (res) => {
        this.servicecode = res.procService_Groups;
        console.log('servicecode', res.procService_Groups);
      },
      error: console.log,
    });
  }
  getservicess() {
    this._empService.servicessList().subscribe((res: any) => {
      this.service_ID = res.procservicess;
      console.log('service_ID', this.service_ID);
    });
  }
  grouplookuppp() {
    this._empService.grouplookup().subscribe((res: any) => {
      this.group_Name = res['procGroup_Lookups'];

      console.log('group_Name', this.group_Name);
    });
  }
  viewservicegroupList() {
    this._empService.viewservicegroupList().subscribe({
      next: (res) => {
        this.viewservicegroup = res;
        console.log('viewgroup', this.viewservicegroup);
      },
      error: console.log,
    });
  }
  servicegroupdelete(id: any) {
    // debugger;
    // console.log('dataaa', id.group_ID);

    this._empService.servicegroupdelete(id).subscribe({
      next: (res) => {
        this.servicegrouplist();
        this.viewservicegroupList();
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
