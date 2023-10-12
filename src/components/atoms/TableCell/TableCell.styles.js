import styled, { css } from 'styled-components/macro';

const styles = css`
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-size: var(--font-size-xs);
  font-weight: bold;

  ${({ responsive }) =>
    responsive
      ? css`
          @media (min-width: 992px) {
            display: table-cell;
            padding: 19px 0.5rem;
            &:first-child {
              padding-left: 1.25rem;
            }
            &:last-child {
              padding-right: 1.25rem;
            }
          }
        `
      : css`
          display: table-cell;
          padding: 0.8rem 0.5rem;
          &:first-child {
            padding-left: 1.25rem;
          }
          &:last-child {
            padding-right: 1.25rem;
          }
        `}
`;

export const Th = styled.th`
  ${styles}
  background: var(--bg-dark);
  white-space: nowrap;
  text-transform: capitalize;
  color: #6f6c99;
  &:first-child {
    border-radius: 15px 0 0 15px;
  }
  &:last-child {
    border-radius: 0 15px 15px 0;
  }
`;

export const Td = styled.td`
  ${styles}
  ${({ responsive }) =>
    responsive &&
    css`
      display: flex;
      justify-content: space-between;
      color: var(--white);
      font-size: var(--font-size-xs);

      @media (max-width: 991px) {
        padding: 10px 15px;
        &:last-child {
          height: 0;
          padding: 0;
        }
        &:nth-child(odd) {
          background: var(--dark-blue);
          border-radius: 8px;
        }
      }
      &:before {
        content: attr(data-th);
        font-weight: bold;
        display: inline-block;
        color: var(--gray);
        padding-right: 12px;

        @media (min-width: 992px) {
          display: none;
        }
      }
    `}
`;
