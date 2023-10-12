import styled, { css } from 'styled-components/macro';
import Button from '../../atoms/Button';
import { StyledInputIcon } from '../../atoms/InputIcon/InputIcon.styles';

export const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  li {
    flex-shrink: 0;
  }
`;

export const PaginationHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 23px;
`;

export const TotalItems = styled.span`
  font-size: var(--font-size-xs);
`;

export const PaginationButton = styled(Button)`
  font-size: 16px;
  line-height: 1;
  border: none;
  position: relative;
  padding-top: 11px;
  padding-bottom: 11px;
  border-radius: 10px;
  ${({ $pageNumBtn }) =>
    $pageNumBtn &&
    css`
      &:hover,
      &.selected {
        box-shadow: none;
        color: var(--primary);
      }
    `}
`;

export const SelectHolder = styled.div`
  min-width: 110px;
  .react-select__control {
    font-size: var(--font-size-xs);
    padding-left: 10px;
    padding-right: 10px;
  }
  .react-select__menu {
    font-size: var(--font-size-xs);
  }
  ${StyledInputIcon} {
    right: 10px;
    font-size: var(--font-size-xs);
  }
`;
