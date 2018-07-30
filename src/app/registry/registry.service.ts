import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  private api = `${environment.host}/users/assistant`;

  constructor(private httpClient: HttpClient) { }

  save(user) {
    return this.httpClient.post(this.api, user);
  } 
  
}
