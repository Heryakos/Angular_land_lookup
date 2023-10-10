import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayFlags: {[key: string]: boolean} = {};

  constructor() {
    this.initializeDisplayFlags();
  }

  initializeDisplayFlags() {
    const lookupTables = [
      'customerStatus', 'customerType', 'titleDeedTransfer', 'familyRelationshipType', 'leaseOwnedStatus',
      'leaseType', 'measurementFee', 'plotTypeofUse', 'plotStatus', 'propertyStatus', 'propertyType',
      'suspensionReason', 'woredasList', 'woredasGroup', 'annualServicePlan', 'serviceDetail',
      'serviceFee', 'taskFee', 'country', 'serviceBlockRegistration'
    ];
  
    for (const table of lookupTables) {
      this.displayFlags[table] = table === 'customerStatus';
    }
  }

  showDisplay(property: string) {
    for (const key in this.displayFlags) {
      this.displayFlags[key] = key === property;
    }
  }
}