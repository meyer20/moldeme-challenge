import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FabricModel } from '../../domain/classes/fabric/fabric.model';
import { FabricStore } from '../../stores/fabric.store';
import { minValueValidator } from '../../shared/utils/min-value-validator.directive';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-create-fabric',
  templateUrl: './create-fabric.component.html',
  styleUrls: ['./create-fabric.component.scss']
})
export class CreateFabricComponent {
  @Input() fabricData?: FabricModel;
  @Output() close = new EventEmitter();
  submitButtonClicked = false;

  fabricForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    width: new FormControl('', [Validators.required, Validators.minLength(1), minValueValidator(0)]),
    length: new FormControl('', [Validators.required, Validators.minLength(1), minValueValidator(0)]),
    grammage: new FormControl('', [Validators.required, Validators.minLength(1), minValueValidator(0)]),
    price: new FormControl('', [Validators.required, Validators.minLength(1), minValueValidator(0)])
  });

  constructor(private fabricStore: FabricStore, private snackbarService: SnackbarService) { }

  onSubmit() {
    if (this.fabricForm.valid) {
      const data = this.fabricForm.value as FabricModel;
      this.fabricStore.addNewFabric(data).subscribe((fabric: FabricModel) => {
        this.close.emit('success');
        this.snackbarService.show(`Tecido ${fabric.name} inserido com sucesso!`, true);
      }, errorResponse => {
        this.snackbarService.show(errorResponse.error.message, true);
      });
    } else {
      this.snackbarService.show('Existem campos não preenchidos ou não válidos', true);
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
}
