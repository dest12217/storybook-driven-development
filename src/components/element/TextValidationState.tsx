import * as React from 'react';

export default function TextValidationState({ children }: React.PropsWithChildren) {
  return <>
    <style href="element-text-validation-state" precedence="medium">{`
      .element-text-validation-state {
        color: #bf1650;
      }

      .element-text-validation-state::before {
        display: inline;
        content: "⚠ ";
      }
    `}</style>
    <p className="element-text-validation-state" aria-live="assertive">{children}</p>
  </>;
}
