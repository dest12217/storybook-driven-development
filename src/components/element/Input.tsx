import * as React from 'react';

export default function Input(props: React.ComponentProps<'input'>) {
  return <>
    <style href="element-input" precedence="medium">{`
      .element-input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        border-radius: 4px;
        border: 1px solid white;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
        background-color: #fff;
      }
    `}</style>
    <input {...props} className="element-input" />
  </>;
}
