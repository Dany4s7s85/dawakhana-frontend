import styled, { css } from 'styled-components/macro';

const BtnStyles = css`
  color: var(--white);
  font-size: var(--font-size-xxl);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  display: flex;
`;

export const Delete = styled.button`
  ${BtnStyles}
  color: var(--danger);
`;

export const PreviewBtn = styled.button`
  ${BtnStyles}
`;

export const ImgHolder = styled.div`
  border: 1px solid var(--light-gray);
  padding: 10px;
  border-radius: 10px;
  width: ${({ size }) => (size ? `${size}px` : '250px')};
  height: ${({ size }) => (size ? `${size}px` : '250px')};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &:hover {
    &:after,
    ${Delete},${PreviewBtn} {
      opacity: 1;
      visibility: visible;
    }
  }
  &:after {
    transition: all 0.3s ease-in-out;
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    visibility: hidden;
    z-index: 1;
  }
  img {
    border-radius: 10px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const BtnsHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 30px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const StyledImg = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin: 0 auto;
  display: block;
`;
