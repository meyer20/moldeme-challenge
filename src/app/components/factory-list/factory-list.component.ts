import { Component, HostListener, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FabricModel } from '../../domain/classes/fabric/fabric.model';
import { FabricStore } from '../../stores/fabric.store';
import { Subscription } from 'rxjs';
import { NgxYazuoSidenavService, YazuoSidenavDirection, YazuoSidenavSettings } from 'ngx-yazuo-sidenav';
import { ResponseModel } from '../../domain/classes/response/response.model';
import { FabricUtils } from '../../shared/utils/fabric.utils';
import { UnitTypesEnum } from 'src/app/shared/enums/unit-types.enum';
import { WindowSizeEnum } from '../../shared/enums/window-size.enum';
import { SideDialogSizeEnum } from '../../shared/enums/side-dialog-size.enum';

@Component({
  selector: 'app-factory-list',
  templateUrl: './factory-list.component.html',
  styleUrls: ['./factory-list.component.scss']
})
export class FactoryListComponent implements OnInit, OnDestroy {
  @ViewChild('fabricTemplate', {static: true}) fabricTemplate: TemplateRef<any>;

  sidebarSettings: YazuoSidenavSettings = {
    width: SideDialogSizeEnum.XL,
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
    'price',
    'totalPrice',
    'shirts'
  ];
  columnsNames = [
    'ID',
    'Nome',
    'Largura',
    'Tamanho',
    'Gramatura',
    'Preço',
    'Preço total',
    'Quantidade de camisas'
  ];
  expandedElement: FabricModel | null;
  subscriptions: Subscription = new Subscription();
  fabricUtils = FabricUtils;
  unitTypesEnum = UnitTypesEnum;
  betterFabric: FabricModel;
  createFabricDialogOpen = false;
  Array = Array;
  DEFAULT_PAGE_SIZE = 10;
  limitIndex = this.DEFAULT_PAGE_SIZE;
  currentPage = 1;
  totalPages = 0;
  allDataLoaded = false;
  dialogSize = SideDialogSizeEnum.XL;
  windowWidth = SideDialogSizeEnum.XL;
  windowSizeEnum = WindowSizeEnum;

  constructor(private fabricStore: FabricStore,
              private yazuoSidenav: NgxYazuoSidenavService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;

    if (this.windowWidth < this.windowSizeEnum.XL) {
      this.dialogSize = SideDialogSizeEnum.LG;
    }

    if (this.windowWidth < this.windowSizeEnum.LG) {
      this.dialogSize = SideDialogSizeEnum.MD;
    }

    if (this.windowWidth < this.windowSizeEnum.MD) {
      this.dialogSize = SideDialogSizeEnum.SM;
    }

    if (this.windowWidth > this.windowSizeEnum.XL) {
      this.dialogSize = SideDialogSizeEnum.XL;
    }
  }

  ngOnInit(): void {
    this.fabricStore.populateFabrics();
    this.getFabricDataByPage();
    this.getBestCostAndBenefit();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openFabricCreate(): void {
    this.createFabricDialogOpen = true;
    this.sidebarSettings.width = this.dialogSize;
    this.yazuoSidenav.open(this.fabricTemplate, this.sidebarSettings);
  }

  closeFabricCreate(status): void {
    if (status === 'success') {
      this.getFabricDataByPage(0);
    }
    this.createFabricDialogOpen = false;
    this.yazuoSidenav.close();
  }

  getFabricDataByPage(pageIndex = 1) {
    this.subscriptions.add(this.fabricStore.populateFabricsData(pageIndex).subscribe((data: ResponseModel<FabricModel>) => {
      this.data = data.data;
      this.totalResults = data.total;
      this.allDataLoaded = true;
      this.totalPages = this.getTotalPages();
    }));
  }

  calculateData(column: string, fabric: FabricModel) {
    if (column === 'shirts') {
      return this.fabricUtils.calculateShirtsQuantity(fabric.width, fabric.length);

    }
    return this.fabricUtils.calculateDeliveryCost(fabric.width, fabric.length, fabric.grammage)
      + (fabric.price * this.fabricUtils.calculateArea(fabric.width, fabric.length));
  }

  getRowValue(column, element) {
    return ['totalPrice', 'shirts'].indexOf(column) === -1 ? element[column] : this.calculateData(column, element);
  }

  getTotalPages() {
    return Math.round(this.totalResults / this.DEFAULT_PAGE_SIZE);
  }

  private getBestCostAndBenefit() {
    this.fabricStore.betterCostAndBenefit$.subscribe(fabric => {
      this.betterFabric = fabric;
    });
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.getFabricDataByPage(page);
  }
}
