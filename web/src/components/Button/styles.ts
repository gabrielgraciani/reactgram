import styled, { css } from 'styled-components';

import { ButtonProps } from './types';

const Button = styled.button<ButtonProps>`
  width: 100%;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 0.4rem;
  padding: 0.5rem;
  font-size: 1.4rem;
  font-weight: 500;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.35;
    `}
`;

export { Button };
