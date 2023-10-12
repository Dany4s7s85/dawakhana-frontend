import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import styled, { css } from 'styled-components/macro';
import { styles } from '../Input/Input.styles';

const Styles = css`
  .react-select__control {
    ${styles}
    min-height: inherit;
    padding-top: 0;
    padding-bottom: 0;
    border-color: ${({ error }) => error && 'var(--danger) !important'};
    box-shadow: none;
    ${({ $gray }) =>
      $gray &&
      css`
        background: var(--light-secondary);
        border-color: var(--light-secondary);
      `}
    &:hover {
      border-color: var(--light);
    }
    &.react-select__control--is-focused,
    &.react-select__control--menu-is-open {
      border-color: var(--primary);
    }
  }
  .react-select__input-container {
    color: var(--base-text-color);
  }
  .react-select__placeholder {
    color: var(--base-text-color);
    opacity: 0.6;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: calc(100% - 8px);
  }
  .react-select__value-container {
    padding-left: 0;
    padding-right: 0;
  }
  .react-select__menu {
    box-shadow: -29px 60px 90px rgb(23 18 43 / 55%);
    border-radius: 5px;
    z-index: var(--z-30);
    background: var(--bg-light);
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .react-select__single-value {
    color: var(--base-text-color);
  }
  .react-select__option {
    font-size: var(--font-size-sm);
    cursor: pointer;
    &:active {
      background: var(--base-background-color);
    }
  }
  .react-select__option--is-focused {
    background: var(--base-background-color);
  }
  .react-select__option--is-selected {
    background: var(--primary-gradient);
    color: var(--dark-blue);
  }
  ${({ isMulti }) =>
    isMulti &&
    css`
      .react-select__control {
        height: auto;
        min-height: 58px;
      }
      .react-select__option {
        position: relative;
        font-size: 14px;
        padding-left: 42px;
        padding-top: 15px;
        padding-bottom: 15px;
        text-transform: uppercase;
        &:before,
        &:after {
          content: '';
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          border: 1px solid var(--primary);
          border-radius: 5px;
          width: 16px;
          height: 16px;
        }
        &:after {
          content: '\\e876';
          font-family: 'Material Icons Round';
          background: var(--primary);
          opacity: 0;
          visibility: hidden;
          transition: 0.3s linear;
          color: var(--base-text-color);
          font-size: 10px;
          line-height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &.react-select__option--is-selected {
          background: none;
          color: #0f2546;
          &:after {
            opacity: 1;
            visibility: visible;
          }
          &.react-select__option--is-focused {
            background: var(--light-secondary);
          }
        }
      }
      .react-select__multi-value {
        background: #d2ecf1;
        font-size: 12px;
        line-height: 12px;
      }
    `}
`;

export const StyledSelect = styled(Select)`
  ${Styles}
`;

export const StyledSelectAsync = styled(AsyncSelect)`
  ${Styles}
`;
