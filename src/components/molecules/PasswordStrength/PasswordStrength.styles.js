import styled from 'styled-components/macro';

export const BarHolder = styled.div`
  margin-bottom: 20px;
  position: relative;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  opacity: 1;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const BarList = styled.ul`
  width: 100%;
  display: flex;
  z-index: 10;
  position: relative;
  transform: matrix(1, 0, 0, 1, 0, 4);
`;

export const BarListItem = styled.li`
  width: 16.666667%;
  position: relative;
  height: 0.25rem;

  &:not(:last-child) {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: -0.9375rem;
      height: 100%;
      width: 1rem;
      --tw-bg-opacity: 1;
      background-color: rgba(28, 26, 66, var(--tw-bg-opacity));

      .light & {
        background-color: #fff;
      }
    }
  }
`;

export const BarBg = styled.div`
  width: 100%;
  height: 0.25rem;
  background: var(--bg-light);
  border-radius: 0.25rem;
  overflow: hidden;

  .light & {
    background: #f3f3f3;
  }
`;

export const Bar = styled.div`
  transition-property: width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.1s;
  width: 0;
  height: 100%;
`;

export const StrengthList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 30px;
  font-size: var(--font-size-sm);
  line-height: calc(var(--font-size-sm) + 4px);
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  li {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .light & {
    color: var(--secondary-text-color);
  }
`;

export const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background: ${({ active }) => (active ? 'var(--green)' : 'var(--bg-light)')};
  flex-shrink: 0;
  transition-property: background;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.1s;
`;
