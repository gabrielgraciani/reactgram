import { render } from '@testing-library/react';
import { Button } from '.';

describe('Button Component', () => {
  it('should render', () => {
    const { debug } = render(<Button onClick={() => {}}>button</Button>);

    debug();
  });
});
