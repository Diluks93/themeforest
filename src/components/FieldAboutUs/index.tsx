import React, { ChangeEvent } from 'react';

import { FieldProp } from 'components/Field/prop';
import { FieldsetStyled, LabelStyled, FieldStyled } from './styled';
import { Error } from 'components/Field/styled';

export function FieldAboutUs({
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
      <LabelStyled $error={hasError}>{fieldName}</LabelStyled>
      <FieldStyled
        type={fieldType}
        name={fieldName}
        id={fieldName}
        onChange={handleFieldChange}
        value={fieldValue}
        placeholder={text}
        $error={hasError}
      />
      {hasError && (
        <Error>{`Please fill in correct value for "${fieldName}".`}</Error>
      )}
    </FieldsetStyled>
  );
}
