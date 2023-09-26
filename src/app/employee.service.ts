import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  woredaidlist() {
    throw new Error('Method not implemented.');
  }

  subCitylist() {
    throw new Error('Method not implemented.');
  }
  constructor(private _http: HttpClient) { }
//post, add
addEmployee(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Customer_Status_Lookup/procCustomer_Status_Lookup', data);
}

customertypeadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Customer_Type_Lookup/procCustomer_Type_Lookup', data);
}

transfertypeadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Deed_Transfer_Lookup/procDeed_Transfer_Lookup', data);
}

leaseownedstatusadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Lease_Owned_Status_Lookup/procLease_Owned_Status_Lookup', data);
}

leasetypeadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Lease_Type_Lookup/procLease_Type_Lookup', data);
}

plotstatusadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Plotl_Status_Lookup/procPlotl_Status_Lookup', data);
}

plottypeofuseadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Plot_Type_Of_Use_Lookup/procPlot_Type_Of_Use_Lookup', data);
}

familyadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Family_RelationShip_Type_Lookup/procFamily_RelationShip_Type_Lookup', data);
}

measurementfeeadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Measurement_Fee/procMeasurement_Fee', data);
}

serviceblockadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Service_Block_Registration/procService_Block_Registration', data);
}

servicedetailadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Service_Detail/procService_Detail', data);
}

servicefeeadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Service_fee/procService_fee', data);
}

taskfeeadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Task_Fee/procTask_Fee', data);
}

woredagroupadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Woreda_Group/procWoreda_Group', data);
}

woredaidadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Woreda_Lookup/procWoreda_Lookup', data);
}

annualplanadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Service_Plan/procService_Plan', data);
}

propertystatusadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Property_StatusLookup/procProperty_StatusLookup', data);
}

propertytypeadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Property_Type_Lookup/procProperty_Type_Lookup', data);
}


suspensionadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Suspension_Reason_Lookup/procSuspension_Reason_Lookup', data);
}

countryadd(data: any): Observable<any> {
  return this._http.post(' http://197.156.93.110/Xoka_land_API/api/Country/procCountry', data);
}
//put, update
updateEmployee(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Customer_Status_Lookup/procCustomer_Status_Lookup`, data);
}

customertypeupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Customer_Type_Lookup/procCustomer_Type_Lookup/`, data);
}

transfertypeupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Deed_Transfer_Lookup/procDeed_Transfer_Lookup/`, data);
}

leaseownedstatusupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Lease_Owned_Status_Lookup/procLease_Owned_Status_Lookup/`, data);
}

leasetypeupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Lease_Type_Lookup/procLease_Type_Lookup/`, data);
}

plotstatusupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Plotl_Status_Lookup/procPlotl_Status_Lookup/`, data);
}

plottypeofuseupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Plot_Type_Of_Use_Lookup/procPlot_Type_Of_Use_Lookup/`, data);
}

familyupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Family_RelationShip_Type_Lookup/procFamily_RelationShip_Type_Lookup/`, data);
}

measurementfeeupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Measurement_Fee/procMeasurement_Fee/`, data);
}

propertystatusupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Property_StatusLookup/procProperty_StatusLookup/`, data);
}

serviceblockupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Service_Block_Registration/procService_Block_Registration/`, data);
}

servicedetailupdate(data: any): Observable<any> {
  return this._http.put(`http://197.156.93.110/Xoka_land_API/api/Service_Detail/procService_Detail/`, data);
}

servicefeeupdate(data: any): Observable<any> {
  return this._http.put(`http://197.156.93.110/Xoka_land_API/api/Service_fee/procService_fee/`, data);
}

taskfeeupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Task_Fee/procTask_Fee/`, data);
}

propertytypeupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Property_Type_Lookup/procProperty_Type_Lookup/`, data);
}

woredagroupupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Woreda_Group/procWoreda_Group/`, data);
}

woredaidupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Woreda_Lookup/procWoreda_Lookup`, data);
}

annualplanupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Service_Plan/procService_Plan`, data);
}

suspensionupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Suspension_Reason_Lookup/procSuspension_Reason_Lookup`, data);
}

countryupdate(data: any): Observable<any> {
  return this._http.put(` http://197.156.93.110/Xoka_land_API/api/Country/procCountry`, data);
}
//get any, list
getEmployeeList(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Customer_Status_Lookup/procCustomer_Status_Lookup');
}

customertypeupdatelist(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Customer_Type_Lookup/procCustomer_Type_Lookup');
}

transfertypelist(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Deed_Transfer_Lookup/procDeed_Transfer_Lookup');
}

leaseownedstatuslist(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Lease_Owned_Status_Lookup/procLease_Owned_Status_Lookup');
}

leasetypeupdatelist(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Lease_Type_Lookup/procLease_Type_Lookup');
}

plotstatuslist(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Plotl_Status_Lookup/procPlotl_Status_Lookup');
}

familylist(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Family_RelationShip_Type_Lookup/procFamily_RelationShip_Type_Lookup');
}

countrylist(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Country/procCountry');
}

plottypeofuselist(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Plot_Type_Of_Use_Lookup/procPlot_Type_Of_Use_Lookup');
}

propertystatuslist(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Property_StatusLookup/procProperty_StatusLookup');
}

propertytypelist(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Property_Type_Lookup/procProperty_Type_Lookup');
}

woredagrouplist(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Woreda_Group/procWoreda_Group');
}

servicedetailList(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Service_Detail/procService_Detail');
}

taskfeeList(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Task_Fee/procTask_Fee');
}

servicefeeList(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Service_fee/procService_fee');
}

annualplanList(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Service_Plan/procService_Plan');
}

suspensionList(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Suspension_Reason_Lookup/procSuspension_Reason_Lookup');
}

serviceblockList(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Service_Block_Registration/procService_Block_Registration');
}

woredaidList(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Woreda_Lookup/procWoreda_Lookup');
}

subCityList(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/organizations/procorganizations');
}

measurementfeeList(): Observable<any> {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Measurement_Fee/procMeasurement_Fee');
}
//get id and any, list ID
getEmployeeListID(id:any) {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Customer_Status_Lookup/procCustomer_Status_Lookup/'+id);
}

customertypeupdatelistID(id:any) {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Customer_Type_Lookup/procCustomer_Type_Lookup/'+id);
}

transfertypelistID(id:any) {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Deed_Transfer_Lookup/procDeed_Transfer_Lookup/'+id);
}

leaseownedstatuslistID(id:any) {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Lease_Owned_Status_Lookup/procLease_Owned_Status_Lookup/'+id);
}

leasetypeupdatelistID(id:any) {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Lease_Type_Lookup/procLease_Type_Lookup/'+id);
}

plotstatuslistID(id:any) {
  return this._http.get(' http://197.156.93.110/Xoka_land_API/api/Plotl_Status_Lookup/procPlotl_Status_Lookup/'+id);
}
//delete id and number
deleteEmployee(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Customer_Status_Lookup/procCustomer_Status_Lookup/${id}`);
}

customertypedelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Customer_Type_Lookup/procCustomer_Type_Lookup/${id}`);
}

transfertypedelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Deed_Transfer_Lookup/procDeed_Transfer_Lookup/${id}`);
}

leaseownedstatusdelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Lease_Owned_Status_Lookup/procLease_Owned_Status_Lookup/${id}`);
}

leasetypedelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Lease_Type_Lookup/procLease_Type_Lookup/${id}`);
}

plotstatusdelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Plotl_Status_Lookup/procPlotl_Status_Lookup/${id}`);
}

plottypeofusedelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Plot_Type_Of_Use_Lookup/procPlot_Type_Of_Use_Lookup/${id}`);
}

familydelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Family_RelationShip_Type_Lookup/procFamily_RelationShip_Type_Lookup/${id}`);
}

measurementfeedelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Measurement_Fee/procMeasurement_Fee/${id}`);
}

propertystatusdelete(id: number): Observable<any> {  
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Property_StatusLookup/procProperty_StatusLookup/${id}`);
}

propertytypedelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Property_Type_Lookup/procProperty_Type_Lookup/${id}`);
}

serviceblockdelete(id: any): Observable<any> {    
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Service_Block_Registration/procService_Block_Registration/`+id.block_ID+'/'+id.blocked_No+'/'+
  id.end_Date+'/'+id.is_Active+'/'+id.sdP_ID+'/'+id.service_ID+'/'+id.start_Date+'/'+id.woreda_ID);
}

servicedetaildelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Service_Detail/procService_Detail/${id}`);
}

servicefeedelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Service_fee/procService_fee/${id}`);
}

suspensiondelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Suspension_Reason_Lookup/procSuspension_Reason_Lookup/${id}`);
}

taskfeedelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Task_Fee/procTask_Fee/${id}`);
}

woredagroupdelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Woreda_Group/procWoreda_Group/${id}`);
}

woredaiddelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Woreda_Lookup/procWoreda_Lookup/${id}`);
}

annualplandelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Service_Plan/procService_Plan/${id}`);
}

countrydelete(id: number): Observable<any> {
  return this._http.delete(` http://197.156.93.110/Xoka_land_API/api/Country/procCountry/${id}`);
}

}
