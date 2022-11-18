import React from 'react';

import { FormProp } from 'HOCs/withValidationFormHOC/prop';
import { FieldAboutUs } from 'components';

import { FormStyled, Block, ButtonForm, FormTitle } from './styled';

export function AboutUsForm({
  onSubmit,
  onFieldChange,
  values,
  errors,
}: FormProp) {
  return (
    <FormStyled onSubmit={onSubmit} noValidate>
      <FormTitle>Contact Us</FormTitle>
      <Block>
        <FieldAboutUs
          text="Your name"
          fieldType="text"
          fieldName="name"
          fieldValue={values.name}
          hasError={errors.name}
          onFieldChange={onFieldChange}
        />
        <FieldAboutUs
          text="Your email"
          fieldType="email"
          fieldName="email"
          fieldValue={values.email}
          hasError={errors.email}
          onFieldChange={onFieldChange}
        />
        <FieldAboutUs
          text="Theme"
          fieldType="text"
          fieldName="theme"
          fieldValue={values.theme}
          hasError={errors.theme}
          onFieldChange={onFieldChange}
        />
        <FieldAboutUs
          text="Your message"
          fieldType="textarea"
          fieldName="message"
          fieldValue={values.message}
          hasError={errors.message}
          onFieldChange={onFieldChange}
        />
      </Block>
      <ButtonForm>Send</ButtonForm>
    </FormStyled>
  );
}
