import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModelConfigInterface } from '../../../../form-builder/src/lib/models';
import { FormModelParserService } from '../../../../form-builder/src/lib/services/form-model-parser.service';
import { WebFormBuilderService } from './web-form-builder.service';

@Component({
  selector: 'web-form-builder-component',
  templateUrl: './web-form-builder.component.html',
  styleUrls: ['./web-form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebFormBuilderComponent {
  private formDefinition: FormModelConfigInterface = {};
  public form: FormGroup;
  public errors = {};
  public disabled: boolean = false;
  public formModel;
  public output = {};

  constructor(private webFormBuilderService: WebFormBuilderService,
              private formModelParserService: FormModelParserService) {
    this.formDefinition = this.webFormBuilderService.getFormDefinition();
    this.formModel = this.formModelParserService.parse(this.formDefinition);
    this.form = this.formModelParserService.toFormGroup(this.formModel) as FormGroup;
    this.form.valueChanges.subscribe(res => {
      this.output = res;
    });
  }

  onShowFormDataClick() {
    alert(JSON.stringify(this.form.getRawValue(), null, 2));
  }
}
