import * as React from 'react';
import ElementInput from '@/components/element/Input';
import ElementInputInvalid from '@/components/element/InputInvalid';
import TextLabel from '@/components/element/TextLabel';

interface Props extends React.ComponentProps<'input'> {
  invalid: boolean;
  label: string;
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

export default function InputField({ label, ...props }: Props) {
  return <>
    <TextLabel>{label}</TextLabel>
    <Input {...props} />
  </>
}
