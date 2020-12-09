import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FabricModel } from '../domain/classes/fabric/fabric.model';
import { FabricService } from '../services/fabric.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FabricStore {
  private fabrics = new BehaviorSubject<FabricModel[]>([]);
  readonly fabrics$ = this.fabrics.asObservable();

  constructor(private fabricService: FabricService) {}

  populateFabricsData(): Observable<FabricModel[]> {
    if (!this.getFabrics().length) {
      return this.fabricService.getAllFabrics().pipe(map((fabricData: FabricModel[]) => {
        this.fabrics.value.push(...fabricData);
        return this.getFabrics();
      }));
    } else {
      return this.fabrics$;
    }
  }

  addNewFabric(fabric: FabricModel) {
    this.fabricService.createFabric(fabric).subscribe((fabricData: FabricModel) => {
      this.fabrics.value.push(fabricData);
      this.fabrics.next(this.fabrics.value);
    });
  }

  deleteFabric(id: number) {
    this.fabricService.deleteFabric(id).subscribe(() => {
      this.fabrics.next(this.fabrics.value.filter((fabric: FabricModel) => fabric.id !== id));
    });
  }

  getFabrics() {
    return this.fabrics.getValue();
  }
}
