import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private addEmp= environment.rootpathh+'Customer_Status_Lookup/procCustomer_Status_Lookup';
  private  Tasks= environment.rootpath6 +"getTasks"; 
  private serviceFee=environment.rootpathh+'Service_fee/procService_fee'; 
  private serviceFeeView=environment.rootpathh+'view/View_serviceFee_services';
  private addEmployeee=environment.rootpathh+'Customer_Status_Lookup/procCustomer_Status_Lookup';
  private customertypeaddd=environment.rootpathh+'Customer_Type_Lookup/procCustomer_Type_Lookup';
  private transfertypeaddd=environment.rootpathh+'Deed_Transfer_Lookup/procDeed_Transfer_Lookup';
  private leaseownedstatusaddd=environment.rootpathh+'Lease_Owned_Status_Lookup/procLease_Owned_Status_Lookup';
  private leasetypeaddd=environment.rootpathh+'Lease_Type_Lookup/procLease_Type_Lookup';
  private plotstatusaddd=environment.rootpathh+'Plotl_Status_Lookup/procPlotl_Status_Lookup';
  private plottypeofuseaddd=environment.rootpathh+'Plot_Type_Of_Use_Lookup/procPlot_Type_Of_Use_Lookup';
  private familyaddd=environment.rootpathh+'Family_RelationShip_Type_Lookup/procFamily_RelationShip_Type_Lookup';
  private measurementfeeaddd=environment.rootpathh+'Measurement_Fee/procMeasurement_Fee';
  private serviceblockaddd=environment.rootpathh+'Service_Block_Registration/procService_Block_Registration';
  private servicedetailaddd=environment.rootpathh+'Service_Detail/procService_Detail';
  private taskfeeaddd=environment.rootpathh+'Task_Fee/procTask_Fee';
  private woredagroupaddd=environment.rootpathh+'Woreda_Group/procWoreda_Group';
  private woredaidaddd=environment.rootpathh+'Woreda_Lookup/procWoreda_Lookup';
  private annualplanaddd=environment.rootpathh+'Service_Plan/procService_Plan';
  private propertystatusaddd=environment.rootpathh+'Property_StatusLookup/procProperty_StatusLookup';
  private propertytypeaddd=environment.rootpathh+'Property_Type_Lookup/procProperty_Type_Lookup';
  private suspensionaddd=environment.rootpathh+'Suspension_Reason_Lookup/procSuspension_Reason_Lookup';
  private countryaddd=environment.rootpathh+'Country/procCountry';
  private servicessListt=environment.rootpathh+'services/procservices';
  private taskListt=environment.rootpathh+'tasks/proctasks';
  private servicedetaill=environment.rootpathh+'view/View_service_detail_plan';
  private subCityListt=environment.rootpathh+'organizations/procorganizations';



  getTasks(data:any){
    return this._http.get(this.Tasks+"?ServiceCode="+data)
  }
  gettaskList(): Observable <any> {
    throw new Error('Method not implemented.');
  }
  getservicess() {
    throw new Error('Method not implemented.');
  }
  woredaidlist() {
    throw new Error('Method not implemented.');
  }

  subCitylist() {
    throw new Error('Method not implemented.');
  }

  constructor(private _http: HttpClient) { }
//post, add
addEmployee(data: any): Observable<any> {
  return this._http.post(this.addEmployeee, data);
}
// addEmployee(data: any): Observable<any> {
//   return this._http.post(this.addEmp, data);
// }

customertypeadd(data: any): Observable<any> {
  return this._http.post(this.customertypeaddd, data);
}

transfertypeadd(data: any): Observable<any> {
  return this._http.post(this.transfertypeaddd, data);
}

leaseownedstatusadd(data: any): Observable<any> {
  return this._http.post(this.leaseownedstatusaddd, data);
}

leasetypeadd(data: any): Observable<any> {
  return this._http.post(this.leasetypeaddd, data);
}

plotstatusadd(data: any): Observable<any> {
  return this._http.post(this.plotstatusaddd, data);
}

plottypeofuseadd(data: any): Observable<any> {
  return this._http.post(this.plottypeofuseaddd, data);
}

familyadd(data: any): Observable<any> {
  return this._http.post(this.familyaddd, data);
}

measurementfeeadd(data: any): Observable<any> {
  return this._http.post(this.measurementfeeaddd, data);
}

serviceblockadd(data: any): Observable<any> {
  return this._http.post(this.serviceblockaddd, data);
}

servicedetailadd(data: any): Observable<any> {
  return this._http.post(this.servicedetailaddd, data);
}

servicefeeadd(data: any): Observable<any> {
  return this._http.post(this.serviceFee, data);
}

taskfeeadd(data: any): Observable<any> {
  return this._http.post(this.taskfeeaddd, data);
}


taskfeeaById(data: any): Observable<any> {
  
  return this._http.get(this.taskfeeaddd, data);
}

woredagroupadd(data: any): Observable<any> {
  return this._http.post(this.woredagroupaddd, data);
}

woredaidadd(data: any): Observable<any> {
  return this._http.post(this.woredaidaddd, data);
}

annualplanadd(data: any): Observable<any> {
  return this._http.post(this.annualplanaddd, data);
}

propertystatusadd(data: any): Observable<any> {
  return this._http.post(this.propertystatusaddd, data);
}

propertytypeadd(data: any): Observable<any> {
  return this._http.post(this.propertytypeaddd, data);
}


suspensionadd(data: any): Observable<any> {
  return this._http.post(this.suspensionaddd, data);
}

countryadd(data: any): Observable<any> {
  return this._http.post(this.countryaddd, data);
}
//put, update
updateEmployee(data: any): Observable<any> {
  return this._http.put(this.addEmployeee, data);
}

customertypeupdate(data: any): Observable<any> {
  return this._http.put(this.customertypeaddd, data);
}

transfertypeupdate(data: any): Observable<any> {
  return this._http.put(this.transfertypeaddd, data);
}

leaseownedstatusupdate(data: any): Observable<any> {
  return this._http.put(this.leaseownedstatusaddd, data);
}

leasetypeupdate(data: any): Observable<any> {
  return this._http.put(this.leasetypeaddd, data);
}

plotstatusupdate(data: any): Observable<any> {
  return this._http.put(this.plotstatusaddd, data);
}

plottypeofuseupdate(data: any): Observable<any> {
  return this._http.put(this.plottypeofuseaddd, data);
}

familyupdate(data: any): Observable<any> {
  return this._http.put(this.familyaddd, data);
}

measurementfeeupdate(data: any): Observable<any> {
  return this._http.put(this.measurementfeeaddd, data);
}

propertystatusupdate(data: any): Observable<any> {
  return this._http.put(this.propertystatusaddd, data);
}

serviceblockupdate(data: any): Observable<any> {
  return this._http.put(this.serviceblockaddd, data);
}

servicedetailupdate(data: any): Observable<any> {
  return this._http.put(this.servicedetailaddd, data);
}

servicefeeupdate(data: any): Observable<any> {
  return this._http.put(this.serviceFee, data);
}

taskfeeupdate(data: any): Observable<any> {
  return this._http.put(this.taskfeeaddd, data);
}

propertytypeupdate(data: any): Observable<any> {
  return this._http.put(this.propertystatusaddd, data);
}

woredagroupupdate(data: any): Observable<any> {
  return this._http.put(this.woredagroupaddd, data);
}

woredaidupdate(data: any): Observable<any> {
  return this._http.put(this.woredaidaddd, data);
}

annualplanupdate(data: any): Observable<any> {
  return this._http.put(this.annualplanaddd, data);
}

suspensionupdate(data: any): Observable<any> {
  return this._http.put(this.suspensionaddd, data);
}

countryupdate(data: any): Observable<any> {
  return this._http.put(this.countryaddd, data);
}
//get any, list
getEmployeeList(): Observable<any> {
  return this._http.get(this.addEmployeee);
}

customertypeupdatelist(): Observable<any> {
  return this._http.get(this.customertypeaddd);
}

transfertypelist(): Observable<any> {
  return this._http.get(this.transfertypeaddd);
}

leaseownedstatuslist(): Observable<any> {
  return this._http.get(this.leaseownedstatusaddd);
}

leasetypeupdatelist(): Observable<any> {
  return this._http.get(this.leasetypeaddd);
}

plotstatuslist(): Observable<any> {
  return this._http.get(this.plotstatusaddd);
}

familylist(): Observable<any> {
  return this._http.get(this.familyaddd);
}

countrylist(): Observable<any> {
  return this._http.get(this.countryaddd);
}

plottypeofuselist(): Observable<any> {
  return this._http.get(this.plottypeofuseaddd);
}

propertystatuslist(): Observable<any> {
  return this._http.get(this.propertystatusaddd);
}

propertytypelist(): Observable<any> {
  return this._http.get(this.propertytypeaddd);
}

woredagrouplist(): Observable<any> {
  return this._http.get(this.woredagroupaddd);
}

servicedetailList(): Observable<any> {
  return this._http.get(this.servicedetailaddd);
}

taskfeeList(): Observable<any> {
  return this._http.get(this.taskfeeaddd);
}

servicefeeList(): Observable<any> {
  return this._http.get(this.serviceFeeView);
}

servicessList(): Observable<any> {
  return this._http.get(this.servicessListt);
}

taskList(): Observable<any> {
  return this._http.get(this.taskListt);
}

annualplanList(): Observable<any> {
  return this._http.get(this.annualplanaddd);
}

suspensionList(): Observable<any> {
  return this._http.get(this.suspensionaddd);
}

serviceblockList(): Observable<any> {
  return this._http.get(this.serviceblockaddd);
}

woredaidList(): Observable<any> {
  return this._http.get(this.woredaidaddd);
}

servicedetail(): Observable<any>{
  return this._http.get(this.servicedetaill)

}
subCityList(): Observable<any> {
  return this._http.get(this.subCityListt);
}

measurementfeeList(): Observable<any> {
  return this._http.get(this.measurementfeeaddd);
}
//get id and any, list ID
getEmployeeListID(id:any) {
  return this._http.get(this.addEmployeee+'/'+id);
}

customertypeupdatelistID(id:any) {
  return this._http.get(this.customertypeaddd+'/'+id);
}

transfertypelistID(id:any) {
  return this._http.get(this.transfertypeaddd+'/'+id);
}

leaseownedstatuslistID(id:any) {
  return this._http.get(this.leaseownedstatusaddd+'/'+id);
}

leasetypeupdatelistID(id:any) {
  return this._http.get(this.leasetypeaddd+'/'+id);
}

plotstatuslistID(id:any) {
  return this._http.get(this.plotstatusaddd+'/'+id);
}
//delete id and number
deleteEmployee(id: number): Observable<any> {
  return this._http.delete(this.addEmployeee+'/'+id);
}

customertypedelete(id: number): Observable<any> {
  return this._http.delete(this.customertypeaddd+'/'+id);
}

transfertypedelete(id: number): Observable<any> {
  return this._http.delete(this.transfertypeaddd+'/'+id);
}

leaseownedstatusdelete(id: number): Observable<any> {
  return this._http.delete(this.leaseownedstatusaddd+'/'+id);
}

leasetypedelete(id: number): Observable<any> {
  return this._http.delete(this.leasetypeaddd+'/'+id);
}

plotstatusdelete(id: number): Observable<any> {
  return this._http.delete(this.plotstatusaddd+'/'+id);
}

plottypeofusedelete(id: number): Observable<any> {
  return this._http.delete(this.plottypeofuseaddd+'/'+id);
}

familydelete(id: number): Observable<any> {
  return this._http.delete(this.familyaddd+'/'+id);
}

measurementfeedelete(id: number): Observable<any> {
  return this._http.delete(this.measurementfeeaddd+'/'+id);
}

propertystatusdelete(id: number): Observable<any> {  
  return this._http.delete(this.propertystatusaddd+'/'+id);
}

propertytypedelete(id: number): Observable<any> {
  return this._http.delete(this.propertytypeaddd+'/'+id);
}

serviceblockdelete(id: any): Observable<any> {    
  return this._http.delete(this.serviceblockaddd+id.block_ID+'/'+id.blocked_No+'/'+
  id.end_Date+'/'+id.is_Active+'/'+id.sdP_ID+'/'+id.service_ID+'/'+id.start_Date+'/'+id.woreda_ID);
}

servicedetaildelete(id: any): Observable<any> {
  console.log('testid',id);
  
  return this._http.delete(this.servicedetailaddd+'/'+id.planID+'/'+id.sdpid);
}

servicefeedelete(id: number): Observable<any> {
  return this._http.delete(this.serviceFee+'/'+id);
}

suspensiondelete(id: number): Observable<any> {
  return this._http.delete(this.suspensionaddd+'/'+id);
}

taskfeedelete(id: number): Observable<any> {
  return this._http.delete(this.taskfeeaddd+'/'+id);
}

woredagroupdelete(id: number): Observable<any> {
  return this._http.delete(this.woredagroupaddd+'/'+id);
}

woredaiddelete(id: number): Observable<any> {
  return this._http.delete(this.woredaidaddd+'/'+id);
}

annualplandelete(id: number): Observable<any> {
  return this._http.delete(this.annualplanaddd+'/'+id);
}

countrydelete(id: number): Observable<any> {
  return this._http.delete(this.countryaddd+'/'+id);
}

}
