type KindOfField = 'text' | 'email' | 'textarea';

export type FieldProp = {
  fieldName: string;
  text: string;
  fieldType: KindOfField;
  fieldValue: string;
  hasError: boolean;
  onFieldChange: (fieldName: string, value: string) => void;
};
