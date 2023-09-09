import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  displayCustomerStatus: boolean = true;
  displayCustomerType: boolean = false;
  displayTitleDeedTransfer: boolean = false;
  displayFamilyRelationshipType: boolean = false;
  displayLeaseOwnedStatus: boolean = false;
  displayLeaseType: boolean = false;
  displayPlotTypeofUse: boolean = false;
  displayMeasurementFee: boolean = false;
  displayPlotStatus: boolean = false;
  displayPropertyStatus: boolean = false;
  displayPropertyType: boolean = false;
  displaySuspensionReason: boolean = false;
  displayWoredasList: boolean = false;
  displayWoredasGroup: boolean = false;
  displayAnnualServicePlan: boolean = false;
  displayServiceDetail: boolean = false;
  displayServiceFee: boolean = false;
  displayTaskFee: boolean = false;
  displayCountry: boolean = false;
  displayServiceBlockRegistration: boolean = false;

  showCustomerStatus() {
    this.displayCustomerStatus = true;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPlotStatus = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }
  
  showCustomerType() {
    this.displayCustomerStatus = false;
    this.displayCustomerType = true;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPlotStatus = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }
  
  showTitleDeedTransfer() {
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = true;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPlotStatus = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showFamilyRelationshipType() {
    this.displayFamilyRelationshipType = true;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPlotStatus = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showLeaseOwnedStatus() {
    this.displayLeaseOwnedStatus = true;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPlotStatus = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
   
  }

  showLeaseType() {
    this.displayLeaseType = true;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPlotStatus = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showMeasurementFee() {
    this.displayMeasurementFee = true;
    this.displayPlotTypeofUse = false;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayPlotStatus = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showPlotTypeofUse() {
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = true;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayPlotStatus = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showPlotStatus() {
    this.displayPlotStatus = true;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showPropertyStatus() {
    this.displayPropertyStatus = true;
    this.displayPlotStatus = false;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showPropertyType() {
    this.displayPropertyType = true;
    this.displayPlotStatus = false;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPropertyStatus = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showSuspensionReason() {
    this.displaySuspensionReason = true;
    this.displayPlotStatus = false;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showWoredasList() {
    this.displayWoredasList = true;
    this.displayPlotStatus = false;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showWoredasGroup() {
    this.displayWoredasGroup = true;
    this.displayPlotStatus = false;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showAnnualServicePlan() {
    this.displayAnnualServicePlan = true;
    this.displayPlotStatus = false;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showServiceDetail() {
    this.displayServiceDetail = true;
    this.displayPlotStatus = false;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showServiceFee() {
    this.displayServiceFee = true;
    this.displayPlotStatus = false;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showTaskFee() {
    this.displayTaskFee = true;
    this.displayPlotStatus = false;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showCountry() {
    this.displayCountry = true;
    this.displayPlotStatus = false;
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = false;
  }

  showServiceBlockRegistration() {
    this.displayCustomerStatus = false;
    this.displayCustomerType = false;
    this.displayTitleDeedTransfer = false;
    this.displayFamilyRelationshipType = false;
    this.displayLeaseOwnedStatus = false;
    this.displayLeaseType = false;
    this.displayMeasurementFee = false;
    this.displayPlotTypeofUse = false;
    this.displayPlotStatus = false;
    this.displayPropertyStatus = false;
    this.displayPropertyType = false;
    this.displaySuspensionReason = false;
    this.displayWoredasList = false;
    this.displayWoredasGroup = false;
    this.displayAnnualServicePlan = false;
    this.displayServiceDetail = false;
    this.displayServiceFee = false;
    this.displayTaskFee = false;
    this.displayCountry = false;
    this.displayServiceBlockRegistration = true;
  }
}

