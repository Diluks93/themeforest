import React, { MouseEvent, useCallback, useState } from 'react';
import { object, string } from 'yup';

import { Form } from 'components';

const contactFormSchema = object().shape({
  email: string().email().required(),
  name: string().required(),
  theme: string(),
  message: string().max(160).required(),
});

export function ContactForm() {
  const [values, setValues] = useState({
    email: '',
    name: '',
    theme: '',
    message: '',
  });

  const [errorsInField, setErrors] = useState({
    email: false,
    name: false,
    theme: false,
    message: false,
  });

  const onFieldChange = useCallback((fieldName: string, value: string) => {
    setValues(prev => ({
      ...prev,
      [fieldName]: value,
    }));

    setErrors({
      email: false,
      name: false,
      theme: false,
      message: false,
    });
  }, []);

  const onSubmit = useCallback(
    async (event: MouseEvent<HTMLFormElement>) => {
      event.preventDefault();
      const isFormValid = await contactFormSchema.isValid(values, {
        abortEarly: false,
      });

      if (isFormValid) {
        console.log('Form is legit');
      } else {
        contactFormSchema.validate(values, { abortEarly: false }).catch(err => {
          const errors = err.inner.reduce(
            (acc: Record<string, boolean>, error: { path: string }) => {
              return {
                ...acc,
                [error.path]: true,
              };
            }
          );

          setErrors(errors);
        });
      }
    },
    [values]
  );

  return (
    <Form
      values={values}
      errors={errorsInField}
      onFieldChange={onFieldChange}
      onSubmit={onSubmit}
    />
  );
}
