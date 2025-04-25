import * as React from 'react';

export default function InputSubmit(props: React.ComponentProps<'input'>) {
  return <>
    <style href="element-input-submit" precedence="medium">{`
      .element-input-submit {
        background: #ec5990;
        color: white;
        text-transform: uppercase;
        border: none;
        margin-top: 40px;
        padding: 20px;
        font-size: 16px;
        font-weight: 100;
        letter-spacing: 10px;
        appearance: none;
      }

      .element-input-submit:hover {
        background: #bf1650;
      }

      .element-input-submit:active {
        transition: 0.3s all;
        transform: translateY(3px);
        border: 1px solid transparent;
        opacity: 0.8;
      }
    `}</style>
    <input {...props} type="submit" className="element-input-submit" />
  </>;
}
