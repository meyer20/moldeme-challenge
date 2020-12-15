import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FabricModel } from '../domain/classes/fabric/fabric.model';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import {ResponseModel} from '../domain/classes/response/response.model';

@Injectable({
  providedIn: 'root'
})
export class FabricService {

  constructor(private http: HttpClient) { }

  createFabric(data: FabricModel) {
    return this.http.post(`${environment.endpointURL}/fabric`, data).pipe(map((fabricData: FabricModel) => {
      console.log('fabricData', fabricData);
      return fabricData;
    }), catchError(err => err));
  }

  deleteFabric(id: number) {
    return this.http.delete(`${environment.endpointURL}/fabric/${id}`).pipe(catchError(err => err));
  }

  getAllFabrics(pageIndex = 1, limit = 10) {
    return this.http.get(`${environment.endpointURL}/fabric?limit=${limit}&page=${pageIndex}`)
      .pipe(map((fabricData: ResponseModel<FabricModel>) => {
      return fabricData;
    }), catchError(err => err));
  }
}
