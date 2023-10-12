import styled from 'styled-components/macro';

export const StyledFakeLabel = styled.span`
  font-size: var(--font-size-base);
  line-height: 1;
  color: #b1afcd;

  .light & {
    color: #1c1a42;
  }
`;

export const RequiredAsterisk = styled.span`
  color: var(--danger);
  margin-left: 3px;
`;
