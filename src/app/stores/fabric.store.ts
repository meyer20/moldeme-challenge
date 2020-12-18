import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FabricModel } from '../domain/classes/fabric/fabric.model';
import { FabricService } from '../services/fabric.service';
import { ResponseModel } from '../domain/classes/response/response.model';
import { FabricUtils } from '../shared/utils/fabric.utils';

@Injectable({ providedIn: 'root' })
export class FabricStore {
  private fabricUtils = FabricUtils;
  private fabricsData = new BehaviorSubject<ResponseModel<FabricModel>>(null);
  readonly fabricsData$ = this.fabricsData.asObservable();

  private fabrics = new BehaviorSubject<FabricModel[]>([]);
  readonly fabrics$ = this.fabrics.asObservable();

  private betterCostAndBenefit = new BehaviorSubject<FabricModel>(null);
  readonly betterCostAndBenefit$ = this.betterCostAndBenefit.asObservable();

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
      this.betterCostAndBenefit.next(this.getBetterCostAndBenefitFabric()[0]);
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
    this.betterCostAndBenefit.next(this.getBetterCostAndBenefitFabric()[0]);
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

  getBetterCostAndBenefitFabric() {
    return this.getFabrics().sort((a, b) => {
      const betterPrice = a.price * this.fabricUtils.calculateArea(a.width, a.length)
      < a.price * this.fabricUtils.calculateArea(a.width, a.length) ? 1 : -1;

      const shirtsQuantity = this.fabricUtils.calculateShirtsQuantity(a.width, a.length)
      < this.fabricUtils.calculateShirtsQuantity(b.width, b.length) ? 1 : -1;

      return betterPrice && shirtsQuantity;
    });
  }
}
