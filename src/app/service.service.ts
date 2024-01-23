import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";
import { TreeNode } from "primeng/api";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public Service_Name: string = '';
  disablefins: boolean = true;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
    params: {},
  };
  ApplicationNo: any;
  todo: any;
  servID: any;
  taskrul: any;
  isleaseForm: boolean;
  EmployeeTIN: any;
  Parent_Customer_ID: any;
  showcustomerr: boolean;
  taskid: string;
  coordinate: any;
  geometry: any[];
  files: TreeNode[] = [];
  disablebutton: boolean = false;
  latLngs: { lat: number; lng: number }[];
  check: boolean;
  shapes: any;
  hide: boolean = false;
  toMes: boolean;
  toEnablenext: boolean = true;
  propertyISEnable: boolean = true;
  toMess: boolean = false;
  Plot_Size_M2: any;
  fromPropoperty: boolean = false;
  Totalarea: number = 0;
  areaVerified: boolean = false;
  Service_ID: any;
  PlotStutusLook: any;
  serviceDP: any;
  isvalidatedPlotGis: boolean = true;
  ispropoertylocation: boolean = false;
  frompropertyUpdate: boolean;
  isproportinal: boolean = false;
  totlaizeproportinal: number = 0;
  PropertyList: any;
  selectedproperty: any;
  ishavetitleDeedRegistrationList: boolean = false;
  ismeasurmentList: boolean = false;
  insertedProperty: any;
  selectedproperty_Type_ID: any;
  iscircleLatLngs: number = 0;
  centerLatLng: any;
  plotsizenotequal: boolean;
  isNextactive: boolean = false;
  currentplotsize: any;
  leaselist: any;
  coordinateForwgs84: any;
  isconfirmsave: boolean ;
  allLicenceData: any;
  totalsizeformerage = 0;
  isagriculture: boolean = false;
  isRecordDocumentationManager: boolean;
  constructor(private http: HttpClient) {
    this.isleaseForm = false;
  }
  
}
