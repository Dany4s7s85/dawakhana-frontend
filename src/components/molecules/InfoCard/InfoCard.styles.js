import styled, { css } from 'styled-components/macro';

export const StyledInfoCard = styled.div`
  ${({ $unStyled }) =>
    !$unStyled &&
    css`
      background: var(--primary);
      border-radius: 10px;
      padding: 16px;
    `}
`;

export const Title = styled.strong`
  font-size: ${({ fontbase }) => (fontbase ? 'var(--font-size-base)' : 'var(--font-size-sm)')};
  line-height: ${({ fontbase }) =>
    fontbase ? 'calc(var(--font-size-base) + 0.3125rem)' : 'calc(var(--font-size-sm) + 0.3125rem)'};
  display: block;
  color: var(--black);
  text-transform: capitalize;
  margin-bottom: 0.375rem;
`;

export const Value = styled.span`
  font-size: ${({ fontbase }) => (fontbase ? 'var(--font-size-base)' : 'var(--font-size-xs)')};
  line-height: ${({ fontbase }) =>
    fontbase ? 'calc(var(--font-size-base) + 0.3125rem)' : 'calc(var(--font-size-xs) + 0.3125rem)'};
  color: var(--black);
  text-transform: capitalize;
`;
