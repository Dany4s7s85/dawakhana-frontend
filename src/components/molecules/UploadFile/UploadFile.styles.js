import styled from 'styled-components/macro';

export const StyledBtn = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (size ? `${size}px` : '100%')};
  height: ${({ size }) => (size ? `${size}px` : '100%')};
  border: 1px dashed #46445f;
  cursor: pointer;
  border-radius: 15px;
  background: var(--dark-blue);

  &:hover {
    border-color: var(--green);
  }

  &.on-zone-hover {
    border-color: var(--green) !important;
  }
`;

export const UploadIcon = styled.span`
  display: block;
  font-size: 25px !important;
  line-height: 1;
  color: var(--green);
  margin: 0 0 5px;
`;

export const UploadIconCircle = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 100%;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px !important;
  line-height: 1;
  color: var(--green);
  margin-bottom: 20px;
`;

export const FileUploadBox = styled.div`
  background: var(--bg-primary);
  border-radius: 20px;
  display: flex;
  height: 120px;
  width: 120px;
  position: relative;
  z-index: 10;
  flex-direction: column;
  justify-content: center;
`;

export const FileInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
`;

export const FileSize = styled.span`
  border-radius: 3px;
  margin-bottom: 0.5em;
  justify-content: center;
  display: flex;
`;

export const FileName = styled.span`
  border-radius: 3px;
  font-size: 12px;
  margin-bottom: 0.5em;
`;

export const ProgressBarHolder = styled.div`
  bottom: 14px;
  position: absolute;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

export const RemoveBtn = styled.div`
  height: 23px;
  position: absolute;
  right: 6px;
  top: 6px;
  width: 23px;
  svg {
    fill: var(--danger);
  }
  &:hover {
    opacity: 0.8;
  }
`;
