import React, { ChangeEvent, memo, useCallback } from 'react';

import { FieldStyled, FieldsetStyled, Error } from './styled';

type KindOfField = 'text' | 'email' | 'textarea';

function FieldWithoutMemo({
  fieldName,
  text,
  fieldType,
  fieldValue,
  hasError,
  onFieldChange,
}: {
  fieldName: string;
  text: string;
  fieldType: KindOfField;
  fieldValue: string;
  hasError: boolean;
  onFieldChange: (fieldName: string, value: string) => void;
}) {
  const handleFieldChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onFieldChange(fieldName, event.currentTarget.value);
    },
    [onFieldChange, fieldName]
  );

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

export const Field = memo(FieldWithoutMemo);
