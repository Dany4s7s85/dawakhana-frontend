import Button from 'components/atoms/Button';
import styled from 'styled-components/macro';

export const DropDownContainer = styled.div`
  position: relative;
`;

export const DropDownButton = styled(Button)``;

export const DropDownListContainer = styled.div`
  position: absolute;
  top: calc(100% + 16px);
  right: 0;
  z-index: var(--z-30);
  width: max-content;
  padding: 15px;
  background: var(--bg-light);
  box-shadow: -29px 60px 90px rgba(23, 18, 43, 0.55);
  border-radius: 10px;
  font-size: var(--font-size-sm);
  line-height: calc(var(--font-size-sm) + 4px);

  .light & {
    background: var(--white);

    &:before {
      background: var(--white);
    }
  }
`;

export const DropDownList = styled.ul``;

export const ListItem = styled.li``;

export const IconHolder = styled.div`
  display: flex;
  align-items: center;
`;

export const ListButton = styled.button`
  width: 100%;
  padding: 10px;
  color: #8786ab;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background: var(--base-background-color);
  }
`;
