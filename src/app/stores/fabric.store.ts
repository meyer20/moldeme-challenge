import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FabricModel } from '../domain/classes/fabric/fabric.model';
import { FabricService } from '../services/fabric.service';
import { map } from 'rxjs/operators';
import { ResponseModel } from '../domain/classes/response/response.model';

@Injectable({ providedIn: 'root' })
export class FabricStore {
  private fabricsData = new BehaviorSubject<ResponseModel<FabricModel>>(null);
  readonly fabricsData$ = this.fabricsData.asObservable();

  private fabrics = new BehaviorSubject<FabricModel[]>([]);
  readonly fabrics$ = this.fabrics.asObservable();

  constructor(private fabricService: FabricService) {}

  populateFabricsData(pageIndex?: number): Observable<ResponseModel<FabricModel>> {
    return this.fabricService.getAllFabrics(pageIndex).pipe(map((fabricData: ResponseModel<FabricModel>) => {
      this.fabricsData.next(fabricData);
      return this.getFabricsData();
    }));
  }

  populateFabrics(): void {
    this.fabricService.getAllFabrics(0, 999).subscribe((fabricData: ResponseModel<FabricModel>) => {
      this.fabrics.next(fabricData.data);
    });
  }

  addNewFabric(fabric: FabricModel): Observable<FabricModel> {
    return this.fabricService.createFabric(fabric).pipe(map((fabricData: FabricModel) => {
      this.fabricsData.value.data.push(fabricData);
      this.fabricsData.next(this.fabricsData.value);
      this.addFabricToStore(fabricData);
      return fabricData;
    }));
  }

  addFabricToStore(fabric: FabricModel) {
    this.fabrics.value.push(fabric);
    this.fabrics.next(this.fabrics.value);
  }

  deleteFabric(id: number) {
    this.fabricService.deleteFabric(id).subscribe(() => {
      this.fabrics.next(this.fabrics.value.filter((fabric: FabricModel) => fabric.id !== id));
    });
  }

  getFabricsData() {
    return this.fabricsData.getValue();
  }

  getFabrics() {
    return this.fabrics.getValue();
  }
}
