import styled, { css } from 'styled-components';

import { LabelStyledProps } from './types';

const Container = styled.div`
  position: relative;
`;

const Label = styled.label<LabelStyledProps>`
  position: absolute;
  padding: 0.9rem;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  transition: transform 150ms ease-out, font-size 150ms;

  ${({ active }) =>
    active &&
    css`
      transform: translateY(-15%);
      font-size: 1rem;
    `};
`;

const Input = styled.input`
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.colors.text_light};
  background: transparent;
  position: relative;
  padding: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  outline: 0;
  z-index: 9;
  border-radius: 0.2rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.gray};
  }
`;

export { Container, Label, Input };
