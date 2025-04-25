import * as React from 'react';

export default function InputInvalid(props: React.ComponentProps<'input'>) {
  return <>
    <style href="element-input-invalid" precedence="medium">{`
      .element-input-invalid {
        display: block;
        box-sizing: border-box;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #bf1650;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
        background-color: #ffcedf;
      }
    `}</style>
    <input {...props} className="element-input-invalid" />
  </>;
}
