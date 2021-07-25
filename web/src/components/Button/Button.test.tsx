import { render, fireEvent } from '@testing-library/react';

import { Button } from '.';
import { WrapperWithStyledComponents } from '../../tests/WrapperWithStyledComponents';

describe('Button Component', () => {
  it('should render correctly', () => {
    const { container } = render(<Button onClick={() => {}}>button</Button>, {
      wrapper: WrapperWithStyledComponents,
    });

    expect(container).toBeTruthy();
  });

  it('should call onClick function when was click', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>button</Button>, {
      wrapper: WrapperWithStyledComponents,
    });

    const button = getByText('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('should be disabled if property disabled is true', () => {
    const { getByTestId } = render(
      <Button onClick={() => {}} disabled>
        button
      </Button>,
      {
        wrapper: WrapperWithStyledComponents,
      },
    );

    const button = getByTestId('button');
    expect(button).toHaveAttribute('disabled');
  });
});
