import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-service-block-registration',
  templateUrl: './service-block-registration.component.html',
  styleUrls: ['./service-block-registration.component.css'],
  providers: [MessageService],
})
export class ServiceBlockRegistrationComponent implements OnInit {
  displayBasic: boolean = false;
  showSuccess: boolean = false;
  public subCity: any;
  public woredaID: any;
  public button = 'save';
  public service_ID: any;
  is_Active = false;
  activeSubcity: boolean = false;
  tempsubCity: any;
  woredaIDD: any;
  serviceForFilter: any;
  serviceblock2: any;
  isEditing: boolean = false;
  editable: boolean = false;
  endPoint2: string = "Woreda_Lookup/procWoreda_Lookup";

  showSuccessMessage() {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }
  data: any;
  displayedColumns: string[] = [
    'service_ID',
    'woreda_ID',
    'subCity',
    'blocked_No',
    'start_Date',
    'end_Date',
    'active_Remark',
    'deactive_Remark',
    'action',
  ];
  serviceblock: any;
  isRowHovered: boolean[] = [];
  toggleRowHover(rowIndex: number) {
    this.isRowHovered[rowIndex] = !this.isRowHovered[rowIndex];
  }
  constructor(
    private _empService: EmployeeService,
    private messageService: MessageService,
    private ServiceService : ServiceService
  ) {}

  saveForm() {
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
    Geo: new FormControl(),
    deactive_Remark: new FormControl(),
    created_By: new FormControl(),
    updated_By: new FormControl(),
    deleted_By: new FormControl(),
    created_Date: new FormControl(),
    updated_Date: new FormControl(),
    deleted_Date: new FormControl(new Date().toISOString().substr(0, 10)),
    is_Deleted: new FormControl(),
  });
  ngOnInit(): void {
    // this.getWoredas();
    this.getSubCities();
    this.serviceblockList();
    this.getservicess();
    this.subcity();
    // this.woreda();
  }
  getservicess() {
    this._empService.servicessList().subscribe((res: any) => {
      this.service_ID = res.procservicess;
      // console.log('service_ID',this.service_ID);
    });
  }
  onServiceIDChange(value: any) {
    setTimeout(() => {
      // this.serv =value
      // this.isDropdownSelected = !!value;
      this.serviceForFilter = value;
      //  this.passdata(value);
      console.log('serviceForFilter', value);
      this.serviceblock2 = this.serviceblock.filter(
        (value: any) => value.service_ID == this.serviceForFilter
      );
      console.log('this.taskfee1', this.serviceblock2);
    }, 2000);
  }
  getWoredas(event:any) {
    // debugger
    console.log("woreda",event.target.value);
    this._empService.get_by_Id(this.endPoint2, event.target.value).subscribe((res) => {
      debugger
    this.woredaID = res.procWoreda_Lookups;
      console.log('woredass', this.woredaIDD);
    });
    // this._empService.woredaidList().subscribe((res) => {
    //   this.woredaIDD = res.procWoreda_Lookups;
    //   console.log('woredass', this.woredaIDD);
    // });
  }
  subcity() {
    this.activeSubcity = true;
    //this.subCity = this.tempsubCity;
  }
  woreda(evet:any) {
    console.log("woreda",evet.target.value);
    
    this.woredaID = this.woredaIDD;
  }
  getSubCities() {
    this._empService.subCityList().subscribe((res) => {
      this.subCity = res.procorganizationss;
      // console.log('logggg',this.subCity);
    });
  }

  openEditForm(data: any) {
    console.log('datatatatata', data);

    this.isEditing = false;
    this.editable = true;
    this.form.patchValue({
      block_ID: data.block_ID,
      service_ID: data.service_ID,
      sdP_ID: data.sdP_ID,
      woreda_ID: data.woreda_ID,
      blocked_No: data.blocked_No,
      start_Date: data.start_Date,
      end_Date: data.end_Date,
      is_Active: data.is_Active,
      active_Remark: data.active_Remark,
      deactive_Remark: data.deactive_Remark,
      is_Deleted: data.is_Deleted,
      created_Date: data.created_Date,
      updated_Date: data.updated_Date,
      deleted_Date: data.deleted_Date,
    });
  }
  save() {
     this.saveproploc();
     this.form.patchValue({
      block_ID: generateGuid(),
      created_Date: new Date().toISOString().substr(0, 10),
      is_Deleted: false,
    });
     debugger
    this._empService.serviceblockadd(this.form.value).subscribe(
      (res) => {
        this.onServiceIDChange(this.serviceForFilter);
        this.serviceblockList();
        this.getservicess();
        this.form.reset();
        
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
  }
  saveproploc() {
    // console.log("propformLocation", this.propformLocation);
    console.log("coordinatcoordinat", this.ServiceService.coordinate);
    if (this.ServiceService.coordinate) {
      // let coordinate= this.convertToMultiPoint(this.serviceService.coordinate)
      // console.log('coordinatecoordinate',coordinate)

      // let coordinate= this.convertToMultiPoint(this.serviceService.coordinate)
      // this.propformLocation.geowithzone=coordinate

      // this.ServiceService.getUserRole().subscribe((response: any) => {
        let coordinates = this.convertToMultiPoints(
          this.ServiceService.coordinate
        );

        console.log("coordinatecoordinate", coordinates);
        
        this.form.patchValue({
          Geo : coordinates
        });
        let coordinate = this.convertToMultiPoint(
          this.ServiceService.coordinate
        );
        // this.propformLocation.geowithzone = coordinate;
        // this.propformLocation.geoForwgs84 =
        //   this.ServiceService.coordinateForwgs84;
        // console.log("responseresponseresponse", response, response[0].RoleId);
        // this.propformLocation.proporty_Id =
        //   this.ServiceService.insertedProperty;
        // this.propformLocation.created_By = response[0].RoleId;
        // this.propformLocation.created_Date = new Date();

        // this.ServiceService.saveProploc(this.propformLocation).subscribe(
        //   (CustID) => {
        //     //this.getproploc(this.propformLocation.proporty_Id);
        //     const toast = this.notificationsService.success(
        //       "Sucess",
        //       "Succesfully saved"
        //     );
        //     this.getproplocbyid(this.propertyRegister.plot_ID);
        //     // this.ServiceService.hide = false;
        //   },
        //   (error) => {
        //     console.log("error");
        //     const toast = this.notificationsService.error(
        //       "error",
        //       `unable to Save ${
        //         error["status"] == 0
        //           ? error["message"]
        //           : JSON.stringify(JSON.stringify(error["error"]))
        //       }`
        //     );
        //   }
        // );
      // });
    }
  }
  convertToMultiPoints(
    points: { easting: number; northing: number }[]
  ): string {
    const multiPointArray = points
      .map((point) => `${point.easting} ${point.northing}`)
      .join(", ");

    if (this.ServiceService.iscircleLatLngs == 0) {
      const multiPointString = `POLYGON((${multiPointArray}))/0`;

      return multiPointString;
    } else {
      const multiPointCircle = this.ServiceService.centerLatLng
        .map((point) => `${point.easting} ${point.northing}`)
        .join(", ");

      const multiPoint = `POINT(${multiPointCircle})/${Math.trunc(
        this.ServiceService.iscircleLatLngs
      )}`;
      return multiPoint;
    }
  }
  convertToMultiPoint(
    points: {
      easting: number;
      northing: number;
      hemisphere: string;
      zone: number;
    }[]
  ): string {
    const multiPointArray = points
      .map(
        (point) =>
          `${point.easting} ${point.northing} ${point.hemisphere} ${point.zone}`
      )
      .join(", ");

    const multiPointString = `POLYGON((${multiPointArray}))`;

    return multiPointString;
  }
  
  // save() {
  //   this._empService.serviceblockadd(this.form.value).subscribe(
  //     (res) => {
  //       this.onServiceIDChange(this.serviceForFilter);
  //       this.serviceblockList();
  //       this.getservicess();
  //       this.form.patchValue({
  //         customer_Type_ID: randomNumber(1, 999),
  //         block_ID: generateGuid(),
  //         sdP_ID: generateGuid(),
  //         service_ID: generateGuid(),
  //         created_by: generateGuid(),
  //         updated_By: generateGuid(),
  //         deleted_By: generateGuid(),
  //       });
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Success Message',
  //         detail: 'Table Add successfully',
  //       });
  //     },
  //     (error) => {
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Error Message',
  //         detail: 'Failed to add table',
  //       });
  //     }
  //   );
  //   this.button = 'Save';
  //   this.form.reset({
  //     customer_Type_ID: randomNumber(1, 999),
  //     block_ID: generateGuid(),
  //     sdP_ID: generateGuid(),
  //     service_ID: generateGuid(),
  //     created_by: generateGuid(),
  //     updated_By: generateGuid(),
  //     deleted_By: generateGuid(),
  //   });
  //   this.woredaID = null;
  // }
  update() {
    // debugger
    this._empService.serviceblockupdate(this.form.value).subscribe(
      (res) => {
        this.onServiceIDChange(this.serviceForFilter);
        this.serviceblockList();
        this.getservicess();
        this.messageService.add({
          severity: 'success',
          summary: 'Success Message',
          detail: 'Table updated successfully',
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
    this.form.reset({
      customer_Type_ID: randomNumber(1, 999),
    });
    this.woredaID = null;
  }
  cancel() {
    this.isEditing = false;
    this.editable = false
    this.form.reset();
    this.woredaID = null;
  }
  serviceblockList() {
    this._empService.serviceblockList().subscribe({
      next: (res) => {
        this.serviceblock = res.procService_Block_Registrations;
        console.log('serviceblock', res.procService_Block_Registrations);
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
        this.onServiceIDChange(this.serviceForFilter);
        this.serviceblockList();
        this.getservicess();
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
