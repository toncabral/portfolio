import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    max-width: 1150px;
    width: 100%;

    @media screen and (max-width: 1149px) {
      padding: 1rem;
    }
  }
`;
