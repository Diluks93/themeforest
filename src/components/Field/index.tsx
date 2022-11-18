import React, { ChangeEvent } from 'react';

import { FieldProp } from './prop';
import { FieldStyled, FieldsetStyled, Error } from './styled';

export function Field({
  fieldName,
  text,
  fieldType,
  fieldValue,
  hasError,
  onFieldChange,
}: FieldProp) {
  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFieldChange(fieldName, event.currentTarget.value);
  };

  return (
    <FieldsetStyled>
      <FieldStyled
        type={fieldType}
        name={fieldName}
        id={fieldName}
        onChange={handleFieldChange}
        value={fieldValue}
        placeholder={text}
        $maxHeight={fieldType === 'textarea'}
        $error={hasError}
      />
      {hasError && (
        <Error>{`Please fill in correct value for "${fieldName}".`}</Error>
      )}
    </FieldsetStyled>
  );
}
