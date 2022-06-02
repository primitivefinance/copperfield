import { render } from '@testing-library/react';

import Tinformed from './tinformed';

describe('Tinformed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tinformed />);
    expect(baseElement).toBeTruthy();
  });
});
