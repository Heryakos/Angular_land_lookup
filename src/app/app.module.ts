import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AnnualServicePlanComponent } from './annual-service-plan/annual-service-plan.component';
import { CustomerTypeComponent } from './customer-type/customer-type.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerStatusComponent } from './customer-status/customer-status.component';
import { CountryComponent } from './country/country.component';
import { FamilyRelationComponent } from './family-relation/family-relation.component';
import { LeaseOwnedStatusComponent } from './lease-owned-status/lease-owned-status.component';
import { LeaseTypeComponent } from './lease-type/lease-type.component';
import { MeasurementFeeComponent } from './measurement-fee/measurement-fee.component';
import { PlotStatusComponent } from './plot-status/plot-status.component';
import { PlotTypeUseComponent } from './plot-type-use/plot-type-use.component';
import { PropertyStatusComponent } from './property-status/property-status.component';
import { PropertyTypeComponent } from './property-type/property-type.component';
import { ServiceBlockRegistrationComponent } from './service-block-registration/service-block-registration.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceTaskFeeComponent } from './service-task-fee/service-task-fee.component';
import { SuspensionReasonComponent } from './suspension-reason/suspension-reason.component';
import { TaskFeeComponent } from './task-fee/task-fee.component';
import { TitleDeedTransferComponent } from './title-deed-transfer/title-deed-transfer.component';
import { WoredaGroupComponent } from './woreda-group/woreda-group.component';
import { WoredaListComponent } from './woreda-list/woreda-list.component';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import { STransactionSalesTypeComponent } from './s-transaction-sales-type/s-transaction-sales-type.component';
import { PropertyUseComponent } from './property-use/property-use.component';
import { MessageService } from 'primeng/api';
import { GisMapComponent } from './gis-map/gis-map.component';
import { LookupComponent } from './lookup/lookup.component';
import { TreeModule } from 'primeng/tree';
@NgModule({
  declarations: [
    
    AppComponent,
    AnnualServicePlanComponent,
    CustomerTypeComponent,
    CustomerStatusComponent,
    CountryComponent,
    FamilyRelationComponent,
    LeaseOwnedStatusComponent,
    LeaseTypeComponent,
    MeasurementFeeComponent,
    PlotStatusComponent,
    PlotTypeUseComponent,
    PropertyStatusComponent,
    PropertyTypeComponent,
    ServiceBlockRegistrationComponent,
    ServiceDetailComponent,
    ServiceTaskFeeComponent,
    SuspensionReasonComponent,
    TaskFeeComponent,
    TitleDeedTransferComponent,
    WoredaGroupComponent,
    WoredaListComponent,
    STransactionSalesTypeComponent,
    PropertyUseComponent,
    GisMapComponent,
    LookupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    DialogModule,
    BrowserModule,
    TreeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    TableModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToolbarModule,
    CardModule,
    DropdownModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: window["_app_base"] },MessageService],
  // providers: [MessageService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
