import { Button as StyledButton } from './styles';
import { ButtonProps } from './types';

export function Button({
  onClick,
  children,
  disabled,
}: ButtonProps): JSX.Element {
  return (
    <StyledButton type="button" onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}
