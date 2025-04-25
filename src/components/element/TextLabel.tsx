import * as React from 'react';

type Props = {
  color: string;
};

export default function TextLabel({ children, color }: React.ComponentProps<'label'>) {
  return <>
    <style href="element-text-label" precedence="medium">{`
      .element-text-label {
        line-height: 2;
        text-align: left;
        display: block;
        margin-bottom: 13px;
        margin-top: 20px;
        color: white;
        font-size: 14px;
        font-weight: 200;
      }
    `}</style>
    <label className="element-text-label" style={{ color }}>{children}</label>
  </>;
}
