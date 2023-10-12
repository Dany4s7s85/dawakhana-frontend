import styled from 'styled-components/macro';

export const StyledTableLayout = styled.div``;

export const TotalResult = styled.span`
  font-size: var(--font-size-sm);
  line-height: calc(var(--font-size-sm) + 4px);
  color: var(--light-gray);
`;

export const TableFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  background: var(--bg-dark);
  padding: 14px 20px;
  border-radius: 15px;
`;

export const TableLayoutHolder = styled.div`
  border-radius: 16px;
  background: var(--secondary);
  padding: 15px;

  @media (min-width: 1200px) {
    padding: 20px;
  }
`;
