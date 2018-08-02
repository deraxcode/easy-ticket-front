import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private regionsApi = `${environment.host}/regions`;
  private communesByRegionId = `${environment.host}/regions/communes`;

  constructor(private httpClient: HttpClient) { }

  findAllRegions() : Observable<any>{
    return this.httpClient.get(this.regionsApi);
  }

  findCommunesByRegionId(regionId): Observable<any>{       
    return this.httpClient.get(this.communesByRegionId, { params: {regionId : regionId} });
  }
}
