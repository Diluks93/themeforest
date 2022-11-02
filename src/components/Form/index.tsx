import React, { memo, MouseEvent } from 'react';

import { Field, Button } from 'components';

import { FormStyled, Wrapper } from './styled';

function FormWithoutMemo({
  onSubmit,
  onFieldChange,
  values,
  errors,
}: {
  onSubmit: (event: MouseEvent<HTMLFormElement>) => Promise<void>;
  onFieldChange: (fieldName: string, value: string) => void;
  values: Record<string, string>;
  errors: Record<string, boolean>;
}) {
  return (
    <FormStyled onSubmit={onSubmit} noValidate>
      <Wrapper>
        <Field
          text="Your email"
          fieldType="email"
          fieldName="email"
          fieldValue={values.email}
          hasError={errors.email}
          onFieldChange={onFieldChange}
        />
        <Field
          text="Your name"
          fieldType="text"
          fieldName="name"
          fieldValue={values.name}
          hasError={errors.name}
          onFieldChange={onFieldChange}
        />
      </Wrapper>
      <Field
        text="Theme"
        fieldType="text"
        fieldName="theme"
        fieldValue={values.theme}
        hasError={errors.theme}
        onFieldChange={onFieldChange}
      />
      <Field
        text="Your message"
        fieldType="textarea"
        fieldName="message"
        fieldValue={values.message}
        hasError={errors.message}
        onFieldChange={onFieldChange}
      />
      <Button>Send</Button>
    </FormStyled>
  );
}

export const Form = memo(FormWithoutMemo);
