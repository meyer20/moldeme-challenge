import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FabricModel } from '../../domain/classes/fabric/fabric.model';
import { FabricStore } from '../../stores/fabric.store';
import { FabricUtils } from '../../shared/utils/fabric.utils';
import { minValueValidator } from '../../shared/utils/min-value-validator.directive';

@Component({
  selector: 'app-create-fabric',
  templateUrl: './create-fabric.component.html',
  styleUrls: ['./create-fabric.component.scss']
})
export class CreateFabricComponent implements OnInit {
  @Input() fabricData?: FabricModel;
  @Output() close = new EventEmitter();
  fabricUtils = FabricUtils;
  submitButtonClicked = false;

  fabricForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    width: new FormControl('', [Validators.required, Validators.minLength(1), minValueValidator(0)]),
    length: new FormControl('', [Validators.required, Validators.minLength(1), minValueValidator(0)]),
    grammage: new FormControl('', [Validators.required, Validators.minLength(1), minValueValidator(0)]),
    price: new FormControl('', [Validators.required, Validators.minLength(1), minValueValidator(0)])
  });

  constructor(private fabricStore: FabricStore) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.fabricForm.valid) {
      const data = this.fabricForm.value as FabricModel;
      this.fabricStore.addNewFabric(data).subscribe((fabric: FabricModel) => {
        console.log('data', fabric);
        this.close.emit('success');
      }, error => {
        // TODO Error handling
      });
      console.log(this.fabricForm);
    } else {
      this.submitButtonClicked = true;
    }
  }

  getErrorMessage(errors) {
    const message = ['Campo não pode ser'];
    if (errors.required) {
      message.push('vazio');
    }

    if (errors.minValue) {
      message.push('menor que zero ou negativo');
    }

    return message.join(' ');
  }

  getFieldValue(fieldName: string) {
    return Number(this.fabricForm.value[fieldName]);
  }

  calculateFabricData(calcType: string) {
    switch (calcType) {
      case 'area':
        return this.fabricUtils.calculateArea(this.getFieldValue('width'), this.getFieldValue('length'));
      case 'height':
        return this.fabricUtils.calculateHeight(this.getFieldValue('grammage'),
          this.calculateFabricData('area'));
      case 'deliveryCost':
        return this.fabricUtils.calculateDeliveryCost(this.getFieldValue('width'), this.getFieldValue('length'),
          this.getFieldValue('grammage'));
      case 'fabricCost':
        return this.calculateFabricData('area') * this.getFieldValue('price');
      case 'totalCost':
        return this.calculateFabricData('deliveryCost') + this.calculateFabricData('fabricCost');
    }
  }
}
