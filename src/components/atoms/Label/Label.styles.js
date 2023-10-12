import styled, { css } from 'styled-components/macro';

export const StyledLabel = styled.label`
  font-size: var(--font-size-sm);
  line-height: 1;
  font-weight: bold;
  color: var(--white);
  margin-bottom: 0.625rem;
  display: block;
  pointer-events: ${({ $onlyRead }) => $onlyRead && 'none'};
  ${({ labelIcon }) =>
    labelIcon &&
    css`
      display: flex;
      align-items: center;
    `}

  .light & {
    color: #1c1a42;
  }
`;

export const RequiredAsterisk = styled.span`
  color: var(--danger);
  margin-right: 3px;
`;
