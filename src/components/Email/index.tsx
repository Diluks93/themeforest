import React, { ChangeEvent, MouseEvent, useCallback, useState } from 'react';
import { object, string } from 'yup';

import { Labeling, InputStyled, Button } from './styled';

const inputSchema = object().shape({
  email: string().email().required(),
});

export function EmailField() {
  const [values, setValues] = useState({ email: '' });
  const [error, setError] = useState(false);

  const onFieldChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      email: event.currentTarget.value,
    });

    setError(false);
  }, []);

  const onSubmit = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      const isFormValid = await inputSchema.isValid(values, {
        abortEarly: true,
      });

      if (isFormValid) {
        console.log('Form is legit');
      } else {
        inputSchema.validate(values, { abortEarly: false }).catch(() => {
          setError(true);
        });
      }
    },
    [values]
  );

  return (
    <Labeling htmlFor="email">
      <InputStyled
        type="email"
        placeholder="Your email"
        id="email"
        value={values.email}
        onChange={onFieldChange}
        $error={error}
      />
      <Button onClick={onSubmit}>Send</Button>
    </Labeling>
  );
}
