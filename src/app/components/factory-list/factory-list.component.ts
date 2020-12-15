import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FabricModel } from '../../domain/classes/fabric/fabric.model';
import { FabricStore } from '../../stores/fabric.store';
import { Subscription } from 'rxjs';
import { MatPaginator} from '@angular/material/paginator';
import { NgxYazuoSidenavService, YazuoSidenavDirection, YazuoSidenavSettings } from 'ngx-yazuo-sidenav';
import { ResponseModel } from '../../domain/classes/response/response.model';

@Component({
  selector: 'app-factory-list',
  templateUrl: './factory-list.component.html',
  styleUrls: ['./factory-list.component.scss']
})
export class FactoryListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('fabricTemplate', {static: true}) fabricTemplate: TemplateRef<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  sidebarSettings: YazuoSidenavSettings = {
    width: 35,
    clickOutside: false,
    bgColor: '#FFF',
    animationTime: 0.4,
    position: YazuoSidenavDirection.Right,
    btnClose: false
  };
  data = new Array<FabricModel>();
  totalResults = 0;
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

  constructor(private fabricStore: FabricStore,
              private yazuoSidenav: NgxYazuoSidenavService) { }

  ngOnInit(): void {
    this.fabricStore.populateFabrics();
    this.populateData();
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((page) => {
      console.log('page', page);
      this.populateData(page.pageIndex + 1);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openFabricCreate(): void {
    this.yazuoSidenav.open(this.fabricTemplate, this.sidebarSettings);
  }

  closeFabricCreate(status): void {
    if (status === 'success') {
      this.populateData();
    }
    this.yazuoSidenav.close();
  }

  populateData(pageIndex = 1) {
    this.subscriptions.add(this.fabricStore.populateFabricsData(pageIndex).subscribe((data: ResponseModel<FabricModel>) => {
      console.log('atualizei aqui', data.data);
      this.data = data.data;
      console.log('1111', this.fabricStore.getFabrics());
      this.totalResults = data.total;
    }));
  }
}
