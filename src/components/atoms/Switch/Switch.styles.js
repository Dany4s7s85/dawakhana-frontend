import styled, { css } from 'styled-components/macro';
import { StyledFormGroup } from '../../../styles/helpers.styles';
import Label from '../Label';

export const SwitchLabel = styled(Label)`
  display: flex;
  flex-direction: row-reverse;
  margin: 0;

  span {
    transition: background var(--animation-speed) linear;
    cursor: pointer;
    width: 46px;
    height: 22px;
    background: #e5e5e5;
    display: block;
    border-radius: 76px;
    position: relative;
    text-indent: -9999px;
    margin-right: 0;
    flex-shrink: 0;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
      text-align: right;
      font-size: 10px;
      font-weight: bold;
    }
    &:after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 16px;
      height: 16px;
      background: var(--white);
      border-radius: 100%;
      transition: 0.3s;
    }
    &:active:after {
      width: 25px;
    }
  }
`;

export const StyledSwitch = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + label {
    span {
      background: var(--primary-gradient);
      &:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
      }
      &:before {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`;

export const LabelHolder = styled.strong`
  padding-top: 3px;
  padding-right: 10px;
  font-weight: 500;
`;

export const SwitchHolder = styled(StyledFormGroup)`
  display: flex;
  ${({ noMargin }) =>
    noMargin &&
    css`
      margin: 0;
    `}

  ${({ themeSwitch }) =>
    themeSwitch &&
    css`
      display: block;
      width: 100%;

      ${StyledSwitch} {
        display: none;
      }
      ${SwitchLabel} {
        display: block;
        width: 100%;
        padding: 10px;
        color: #8786ab;
        border-radius: 8px;
        cursor: pointer;
        &:hover {
          background: linear-gradient(224.09deg, rgba(26, 23, 62, 0.45) 0%, rgba(18, 16, 48, 0.49) 98.47%);

          .light & {
            color: #4c4c66;
            background: #fbfbfd;
          }
        }
        > div {
          display: block;
        }
      }
      ${LabelHolder} {
        flex-grow: 1;
      }
      .switch-text {
        display: flex;
        align-items: center;
      }
    `}
`;
