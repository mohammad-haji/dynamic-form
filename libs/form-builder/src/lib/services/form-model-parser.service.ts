import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { ControlConfig } from '../models';

/**
 * This service parses the form model to a FormGroup object and do some other transformations if needed
 */
@Injectable()
export class FormModelParserService {

  public constructor(
    private formBuilder: FormBuilder
  ) {
  }

  /**
   * Get a parsed Form Model from a flat form model object.
   *
   * @param model The model retrieved from the API or any where
   */
  public parse(model: Object): Object {
    const parsedModel = {};
    _.forOwn(model, (controlOptions: ControlConfig, controlName: string) => {
      const field: ControlConfig = Object.assign({}, controlOptions);
      field.label = controlName;
      parsedModel[controlName] = field;
      return field;
    });
    return parsedModel;
  }

  /**
   * Retrieves a FormGroup from a parsed Form Model (the result from the parse
   * method).
   *
   * @param parsedModel The parsed Form Model
   * @param formType
   */
  public toFormGroup(parsedModel: Object, formType: string = '*'): FormGroup {
    const group = {};
    let validation = [];

    _.forOwn(parsedModel, (options: ControlConfig, field) => {

      // setup validation rules
      validation = [];
      if (_.has(options, 'validation')) {
        _.each(options['validation'], (validationRule) => {
          switch (validationRule) {
            case 'required':
              validation.push(Validators.required);
              break;

            case 'email':
              validation.push(Validators.email);
              break;
          }
        });
      }

      // do more logic for widgets
      switch (options.type) {
        case 'select':
          group[field] = [{
            value: _.get(options, 'value', null),
            disabled: _.get(options, 'disabled', null)
          }, validation];
          break;

        default:
          group[field] = [{
            value: _.get(options, 'value', null),
            disabled: _.get(options, 'disabled', null)
          }, validation];
          break;
      }
    });

    return this.formBuilder.group(group);
  }
}
