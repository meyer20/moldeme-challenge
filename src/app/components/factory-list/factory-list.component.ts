import { Component, OnDestroy, OnInit } from '@angular/core';
import { FabricModel } from '../../domain/classes/fabric/fabric.model';
import { FabricStore } from '../../stores/fabric.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-factory-list',
  templateUrl: './factory-list.component.html',
  styleUrls: ['./factory-list.component.scss']
})
export class FactoryListComponent implements OnInit, OnDestroy {
  data: FabricModel[];
  columns = [
    'id',
    'name',
    'width',
    'length',
    'grammage',
    'price'
  ];
  columnsNames = [
    'Id',
    'Nome',
    'Largura',
    'Tamanho',
    'Gramatura',
    'Preço'
  ];
  expandedElement: FabricModel | null;
  subscriptions: Subscription = new Subscription();

  constructor(private fabricStore: FabricStore) { }

  ngOnInit(): void {
    // TODO Implementar GET pela tabela
    this.subscriptions.add(this.fabricStore.populateFabricsData().subscribe((fabricData: FabricModel[]) => {
      console.log(fabricData);
      this.data = fabricData;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
