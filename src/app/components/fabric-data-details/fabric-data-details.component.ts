import { Component, Input, OnInit } from '@angular/core';
import { FabricUtils } from '../../shared/utils/fabric.utils';

@Component({
  selector: 'app-fabric-data-details',
  templateUrl: './fabric-data-details.component.html',
  styleUrls: ['./fabric-data-details.component.scss']
})
export class FabricDataDetailsComponent {
  @Input() width;
  @Input() length;
  @Input() grammage;
  @Input() price;

  fabricUtils = FabricUtils;

  constructor() { }

  calculateFabricData(calcType: string) {
    switch (calcType) {
      case 'area':
        return this.fabricUtils.calculateArea(this.width, this.length);
      case 'height':
        return this.fabricUtils.calculateHeight(this.grammage), this.calculateFabricData('area');
      case 'deliveryCost':
        return this.fabricUtils.calculateDeliveryCost(this.width, this.length,
          this.grammage);
      case 'fabricCost':
        return this.calculateFabricData('area') * this.price;
      case 'totalCost':
        return this.calculateFabricData('deliveryCost') + this.calculateFabricData('fabricCost');
    }
  }
}
