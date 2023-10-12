import styled, { css } from 'styled-components/macro';

export const LogoHolder = styled.div`
  max-width: 80px;
  @media (min-width: 768px) {
    max-width: 107px;
  }
  ${({ center }) =>
    center &&
    css`
      margin: 0 auto;
    `}
`;
export const Img = styled.img``;
