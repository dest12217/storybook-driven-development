import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import TextValidationState from '@/components/element/TextValidationState';

describe('TextValidationState', () => {
  test('Snapshot', () => {
    const { asFragment } = render(<TextValidationState />);

    expect(asFragment()).toMatchSnapshot();
  });
});
