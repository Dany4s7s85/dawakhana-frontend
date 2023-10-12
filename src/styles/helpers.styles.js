import styled, { css } from 'styled-components/macro';

export const Flex = styled.div`
  display: flex;
  flex-wrap: ${props => !props.nowrap && 'wrap'};

  ${props =>
    props.direction === 'column' &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.direction === 'columnReverse' &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.justify === 'center' &&
    css`
      justify-content: center;
    `}

  ${props =>
    props.justify === 'space-between' &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.justify === 'end' &&
    css`
      justify-content: flex-end;
    `}

  ${props =>
    props.align === 'top' &&
    css`
      align-items: flex-start;
    `}

  ${props =>
    props.align === 'middle' &&
    css`
      align-items: center;
    `}

    ${props =>
    props.align === 'bottom' &&
    css`
      align-items: flex-end;
    `}
`;

export const Centered = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormGroup = styled.div`
  margin-bottom: ${({ $invalid, noMargin }) => ($invalid || noMargin ? '0px' : '1.625rem')};
  position: relative;
`;

export const InputHolder = styled.div`
  position: relative;
`;

export const ActionBtnHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ numOfBtns }) => (numOfBtns === 4 ? 4 : 3)}, minmax(20px, 20px));
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5px;
  right: 17px;
  gap: 20px;
  margin: 0 auto;

  @media (max-width: 991px) {
    right: 0;
  }

  .tooltip-holder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tooltip-holder:only-child {
    justify-content: flex-end;
    @media (min-width: 992px) {
      justify-content: center;
    }
    @media (max-width: 992px) {
      grid-column: ${({ numOfBtns }) => (numOfBtns === 4 ? `span 4 / span 4` : `span 3 / span 3`)};
    }
  }
  @media (min-width: 992px) {
    position: static;
  }
  button {
    font-size: var(--font-size-xl);
    line-height: calc(var(--font-size-xl) + 0.3125rem);
    display: flex;
    align-items: center;
  }
  .edit-btn {
    color: var(--primary);
  }
  .eye-btn {
    color: var(--white);
  }

  .delete-btn {
    color: var(--danger);
  }

  .detail-btn {
    color: var(--primary);
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 30px;
`;
