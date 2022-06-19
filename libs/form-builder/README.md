# form-builder

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test form-builder` to execute the unit tests.

This module should be used as a shared module, so you need to import it on any other module since all directives and components are exported.

## Usage

You should use the main component like this:

```html
<form-builder
    [form]="form"
    [formModel]="formModel"
    [errors]="errors"
    [disabled]="disabled">
</form-builder>
```

Where the component inputs means:

- `[form]`, FormGroup instance with all the fileds defined.
- `[formModel]`, object that has all the fields config, check the `ControlConfig` class on the `models/control-config-ts` file to see what can be added.
- `[errors]`, form errors object, mainly used to display API errors on the form.
- `[disabled]`, force the form fileds to be disabled.

And the component passed inputs:

```typescript
@Component({ selector: 'user-form-component', templateUrl: './user-form.component.html' })
export class UserFormComponent {
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
}
```

## Supported Controls

The current supported controls are (mainly of them native controls):

- text
- password
- email
- select
- textarea
- number
- date
- month
- week
- time

### For authorization we have to use this library ngx-permissions
https://www.npmjs.com/package/
