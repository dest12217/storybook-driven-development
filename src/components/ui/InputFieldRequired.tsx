import * as React from 'react';
import ElementInput from '@/components/element/Input';
import ElementInputInvalid from '@/components/element/InputInvalid';
import ElementTextValidationState from '@/components/element/TextValidationState';
import TextLabel from '@/components/element/TextLabel';

interface Props extends React.ComponentProps<'input'> {
  invalid: boolean;
  label: string;
}

type ValidationStateProps = {
  view: boolean;
};

function TextValidationState({ view = false }: ValidationStateProps) {
  if (!view) {
    return null;
  }

  return <ElementTextValidationState>This field is required</ElementTextValidationState>;
}

interface InputProps extends React.ComponentProps<'input'> {
  invalid: boolean;
}

function Input({ invalid, ...props }: InputProps) {
  if (invalid) {
    return <ElementInputInvalid {...props} />;
  }

  return <ElementInput {...props} />;
}

export default function InputFieldRequired({ label, invalid, ...props }: Props) {
  return <>
    <TextLabel>{label} [Required]</TextLabel>
    <Input invalid={invalid} {...props} />
    <TextValidationState view={invalid} />
  </>
}
