import styled, { css } from 'styled-components';

import { ImageStyledProps, ContainerStyledProps } from './types';

const Container = styled.div<ContainerStyledProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
`;

const Image = styled.img<ImageStyledProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 2.5s ease;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
    `};
`;

export { Container, Image };
