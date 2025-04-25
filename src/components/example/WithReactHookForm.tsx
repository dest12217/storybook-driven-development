import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputFieldRequired from '../ui/InputFieldRequired';
import InputField from '../ui/InputField';
import InputSubmit from '../element/InputSubmit';

/**
 * @see https://codesandbox.io/p/sandbox/react-hook-form-get-started-ts-5ksmm
 */
export default function WithReactHookForm() {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      example: '',
      exampleRequired: ''
    }
  });

  console.log(watch('example')); // you can watch individual input by pass the name of the input

  return <form
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
      })}
    >
      <Controller
        control={control}
        name="example"
        render={({ field }) => (
          <InputField
            label="Example"
            invalid={typeof errors.example !== 'undefined'}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="exampleRequired"
        rules={{
          required: true,
          maxLength: 10
        }}
        render={({ field }) => (
          <InputFieldRequired
            label="ExampleRequired"
            invalid={typeof errors.exampleRequired !== 'undefined'}
            {...field}
          />
        )}
      />
      <InputSubmit />
    </form>;
}
