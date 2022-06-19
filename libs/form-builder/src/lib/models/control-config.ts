export interface ControlConfig {
  name: string;
  type: string;
  label?: string;
  id?: string;
  disabled?: boolean;
  placeholder?: string;
  value?: any;
  validation?: string[];
  options?: { id: string | number, text: string }[];
  dynamicOptions?: any;
  min?: number;
  max?: number;
  // classes
  mainWrapperClass?: string;
  labelClass?: string;
  controlWrapperClass?: string;
  controlClass?: string;
}
