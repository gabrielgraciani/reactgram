import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { WrapperWithStyledComponents } from '../../tests/WrapperWithStyledComponents';
import { Input } from '.';

describe('Input Component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Input
        type="password"
        label="Senha"
        name="password"
        handleChange={value => value}
        value="any value"
      />,
      {
        wrapper: WrapperWithStyledComponents,
      },
    );

    expect(container).toBeTruthy();
  });

  it('should update value when type a word', () => {
    let inputValue = '';
    const { getByLabelText, rerender } = render(
      <Input
        type="password"
        label="Senha"
        name="password"
        handleChange={value => {
          inputValue = `${inputValue}${value}`;
        }}
        value={inputValue}
      />,
      {
        wrapper: WrapperWithStyledComponents,
      },
    );

    const input = getByLabelText('Senha');
    userEvent.type(input, 'any value');

    rerender(
      <Input
        type="password"
        label="Senha"
        name="password"
        handleChange={value => {
          inputValue = `${inputValue}${value}`;
        }}
        value={inputValue}
      />,
    );

    expect(input).toHaveValue('any value');
  });
});
