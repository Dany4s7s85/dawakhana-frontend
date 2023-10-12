import styled, { css } from 'styled-components/macro';

export const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const TooltipBtn = styled.span``;

export const StyledTooltip = styled.div`
  position: absolute;
  border-radius: 4px;
  top: ${({ height }) => height && `calc(-${height}px - var(--tooltip-margin))`};
  left: 50%;
  transform: translateX(-50%);
  color: var(--tooltip-text-color);
  background: var(--tooltip-background-color);
  z-index: var(--z-65);
  width: ${({ width }) => (width ? `${width}px` : 'auto')} !important;
  text-align: center !important;
  font-size: var(--font-size-xs) !important;
  line-height: calc(var(--font-size-xs) + 0.3125rem) !important;
  padding: 8px 10px !important;

  /* CSS border triangles */
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: var(--tooltip-arrow-size) var(--tooltip-arrow-size) 0 var(--tooltip-arrow-size);
    border-color: var(--tooltip-background-color) transparent transparent transparent;
  }

  ${({ type }) =>
    type === 'success' &&
    css`
      background: var(--success);
      &:before {
        border-color: var(--success) transparent transparent transparent;
      }
    `}
  ${({ type }) =>
    type === 'warning' &&
    css`
      background: var(--warning);
      &:before {
        border-color: var(--warning) transparent transparent transparent;
      }
    `}
  ${({ type }) =>
    type === 'info' &&
    css`
      background: var(--light-blue);
      &:before {
        border-color: var(--light-blue) transparent transparent transparent;
      }
    `}
  ${({ type }) =>
    type === 'error' &&
    css`
      background: var(--danger);
      &:before {
        border-color: var(--danger) transparent transparent transparent;
      }
    `}
`;
