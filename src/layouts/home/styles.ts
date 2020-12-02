import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-around;

  section {
    width: 50%;
  }
`;

export const Info = styled.div`
  position: relative;

  margin-bottom: 0.5rem;

  p {
    font-family: Poppins, sans-serif;
    color: #a2a0f4;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 110%;
  }

  &::before {
    content: '';

    height: 96px;
    background: linear-gradient(
      269.82deg,
      rgba(72, 7, 95, 0.3) 0.15%,
      rgba(196, 196, 196, 0) 100.28%
    );
    border-radius: 0px 38px 43.5px 0px;

    position: absolute;

    right: 55%;
    left: -200%;

    z-index: -1;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

interface ButtonProps {
  expand?: 'block' | 'full';
}

const buttonExpandVariations = {
  block: css`
    width: 100%;
  `,
  full: css`
    border-radius: none;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  `
};

export const Button = styled.button<ButtonProps>`
  height: calc(50px 1rem);
  padding: 0.5rem 1.5rem;
  margin: 1rem 0.25rem;

  background: #a2a0f4;
  border-radius: 14px;
  border: 3px solid #a2a0f4;

  color: #fff;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 1.125rem;

  ${(props) => props.expand && buttonExpandVariations[props.expand]}
`;

export const RoundedButton = styled(Button)`
  background: transparent;
`;
