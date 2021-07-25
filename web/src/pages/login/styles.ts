import styled from 'styled-components';

import { Breakpoints } from '../../enum/Breakpoints';

const Container = styled.div`
  width: 90%;
  max-width: 80.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  @media (max-width: ${Breakpoints.tiny}) {
    justify-content: center;
  }
`;

const SliderContainer = styled.div`
  width: 454px;
  height: 618px;
  background: url('images/phoneBackground.png') center no-repeat;
  background-size: cover;
  position: relative;
  padding: 10rem 0 0 15rem;

  @media (max-width: ${Breakpoints.tiny}) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  width: 34rem;
`;

const Box = styled.div`
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.colors.text_light};
  padding: 2rem 4rem;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Form = styled.div`
  width: 100%;
`;

const InputsContainer = styled.div`
  width: 100%;
  margin: 3rem 0 1.6rem;

  > div {
    &:first-child {
      margin-bottom: 0.6rem;
    }
  }
`;

const SignUpText = styled.div`
  text-align: center;
  > a {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: bold;
  }
`;

export {
  Container,
  SliderContainer,
  ContentContainer,
  Box,
  Form,
  InputsContainer,
  SignUpText,
};
