import styled, { css } from 'styled-components/macro';

export const TableRow = styled.tr`
  border: none;
  background: none;
  display: table-row;
  width: 100%;
  border-radius: 0;
  padding: 0;

  ${({ responsive }) =>
    responsive &&
    css`
      @media (max-width: 991px) {
        background: var(--bg-primary);
        border: 1px solid var(--bg-primary);
        display: block;
        padding: 40px 15px 15px;
        position: relative;
      }
    `}

  @media (min-width: 768px) {
    border-radius: 10px;
  }
`;

export default TableRow;
