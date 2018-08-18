import {Component, ViewEncapsulation} from '@angular/core';

/**
 * @title Configurable checkbox
 */
@Component({
  selector: 'checkbox-configurable-example',
  templateUrl: 'checkbox-configurable-example.html',
  styleUrls: ['checkbox-configurable-example.css'],
  encapsulation: ViewEncapsulation.None

})
export class CheckboxConfigurableExample {
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  pinkCheckBox = false;
  greenCheckBox = false;
  smallCheckBox = false;
}
