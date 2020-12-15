export class FabricUtils {
  static DELIVERY_COST = 5.45;
  static FABRIC_AREA = 8.75;

  static calculateDeliveryCost(width: number = 0, length: number = 0, grammage: number = 0): number {
    return this.returnHandler(this.DELIVERY_COST * this.calculateHeight(grammage, this.calculateArea(width, length)));
  }

  static calculateHeight(grammage: number = 0, area: number = 0): number {
    console.log('calculateHeight');
    return this.returnHandler(area / grammage);
  }

  static calculateArea(width: number = 0, length: number = 0): number {
    return this.returnHandler(length * width);
  }

  static returnHandler(value) {
    return value === Infinity ? 0 : value;
  }

  static getUnitSufix(value, valueType) {
    switch (valueType) {
      case 'heigth':
        return value.toFixed(2) + 'Kg';
      case 'money':
        return value + 'R$';
    }
  }
}
