import { Injectable } from '@angular/core';
import { FormModelConfigInterface } from '../../../../form-builder/src/lib/models';

@Injectable()
export class WebFormBuilderService {
  public getFormDefinition(): FormModelConfigInterface {
    return {
      'id': {
        name: 'id',
        type: 'number',
        placeholder: '',
        value: 1111,
        mainWrapperClass: 'col-sm-6 mt-2',
        labelClass: '',
        controlWrapperClass: 'mohammad',
        controlClass: '',
        validation: ['numeric'],
        disabled: true
      },
      'name': {
        name: 'name',
        type: 'text',
        placeholder: '',
        value: null,
        mainWrapperClass: 'col-sm-6 mt-2',
        validation: ['required', 'string']
      },
      'type': {
        name: 'type',
        type: 'select',
        placeholder: '',
        value: null,
        mainWrapperClass: 'col-sm-6 mt-2',
        options: [
          { text: 'mohammad', id: 'mohammad' },
          { text: 'haji', id: 'haji' },
          { text: 'agha', id: 'agha' },
          { text: 'zadeh', id: 'zadeh' }
        ],
        validation: ['required', 'string'],
        disabled: false
      },
      'username': {
        name: 'username',
        type: 'text',
        placeholder: '',
        value: null,
        mainWrapperClass: 'col-sm-6 mt-2',
        validation: ['required', 'string']
      },
      'email': {
        name: 'email',
        type: 'email',
        placeholder: '',
        value: null,
        mainWrapperClass: 'col-sm-6 mt-2',
        validation: ['required', 'string']
      },
      'password': {
        name: 'password',
        type: 'password',
        placeholder: '',
        value: null,
        mainWrapperClass: 'col-sm-6 mt-2',
        validation: ['required', 'string']
      },
      'created_at': {
        name: 'created_at',
        type: 'date',
        placeholder: '',
        value: null,
        mainWrapperClass: 'col-sm-6 mt-2',
        validation: ['date:Y-m-d H:m:s']
      },
      'updated_at': {
        name: 'updated_at',
        type: 'time',
        placeholder: '',
        value: null,
        mainWrapperClass: 'col-sm-6 mt-2',
        validation: ['date:Y-m-d H:m:s']
      }
    };
  }
}
