/* eslint-disable jsx-a11y/mouse-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import Toast from 'components/molecules/Toast';
import { useRef, useState } from 'react';
import { compressImage } from 'helpers/common';
import { Error } from 'components/molecules/Field/Field.styles';
import { StyledFormGroup } from 'styles/helpers.styles';
import { useCSVReader, formatFileSize } from 'react-papaparse';
import {
  StyledBtn,
  UploadIcon,
  UploadIconCircle,
  FileUploadBox,
  FileInfo,
  FileSize,
  FileName,
  ProgressBarHolder,
  RemoveBtn,
} from './UploadFile.styles';

function UploadFile({
  name,
  error,
  size = 130,
  uploadBtnText = 'Upload',
  noMargin,
  icon,
  onChange,
  base64,
  allowCrop,
  csv,
  zip,
  onUploadAccepted,
  ...props
}) {
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);

  const imgRef = useRef(null);
  const clearState = () => {
    imgRef.current = null;
    onChange(base64 || allowCrop ? { target: { name, value: '' } } : { target: { files: [] } });
  };
  return (
    <>
      {zip && (
        <StyledFormGroup noMargin>
          <input {...props} onChange={onChange} accept=".zip" type="file" id={name} className="hidden" />
          <StyledBtn
            htmlFor={name}
            css={`
              ${error && 'border-color:var(--danger)'}
              width: 100%;
              height: 100%;
            `}
            size={size}>
            <UploadIconCircle className="material-icons-outlined">{icon}</UploadIconCircle>
            {uploadBtnText}
          </StyledBtn>
          {error && (
            <Error id={`${props.name}Error`} role="alert">
              {error}
            </Error>
          )}
        </StyledFormGroup>
      )}
      {!csv && !zip && (
        <StyledFormGroup noMargin={noMargin}>
          <input
            {...props}
            accept="image/*"
            type="file"
            id={name}
            onChange={({ target: { files } }) => {
              if (!/[/.](gif|jpg|jpeg|tiff|png|svg)$/i.test(files[0].name)) {
                Toast({ type: 'error', message: 'Only images are allowed' });
                clearState();
              } else if (!files[0]) {
                clearState();
              } else if (base64) {
                compressImage(files[0])
                  .then(image => {
                    onChange({ target: { value: image, name } });
                  })
                  .catch(() => {
                    Toast({
                      type: 'error',
                      message: 'Error compressing the image',
                    });
                    clearState();
                  });
              } else onChange({ target: { value: files[0], name } });
            }}
            className="hidden"
          />
          <StyledBtn htmlFor={name} css={error && 'border-color:var(--danger)'} size={size}>
            <UploadIcon className="material-icons-outlined">{icon}</UploadIcon>
            {uploadBtnText}
          </StyledBtn>
          {error && (
            <Error id={`${props.name}Error`} role="alert">
              {error}
            </Error>
          )}
        </StyledFormGroup>
      )}
      {csv && (
        <CSVReader
          onUploadAccepted={results => {
            onUploadAccepted(results);
            setZoneHover(false);
          }}
          onDragOver={event => {
            event.preventDefault();
            setZoneHover(true);
          }}
          onDragLeave={event => {
            event.preventDefault();
            setZoneHover(false);
          }}
          {...props}>
          {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps, Remove }) => (
            <StyledBtn
              as="div"
              {...getRootProps()}
              css={`
                padding: 38px;
              `}
              className={zoneHover && 'on-zone-hover'}>
              {acceptedFile ? (
                <FileUploadBox>
                  <FileInfo>
                    <FileSize>{formatFileSize(acceptedFile.size)}</FileSize>
                    <FileName>{acceptedFile.name}</FileName>
                  </FileInfo>
                  <ProgressBarHolder>
                    <ProgressBar />
                  </ProgressBarHolder>
                  <RemoveBtn
                    {...getRemoveFileProps()}
                    onMouseOver={event => {
                      event.preventDefault();
                    }}
                    onMouseOut={event => {
                      event.preventDefault();
                    }}>
                    <Remove />
                  </RemoveBtn>
                </FileUploadBox>
              ) : (
                <>
                  {icon && <UploadIconCircle className="material-icons-outlined">{icon}</UploadIconCircle>}
                  {uploadBtnText ?? null}
                </>
              )}
            </StyledBtn>
          )}
        </CSVReader>
      )}
    </>
  );
}

export default UploadFile;
