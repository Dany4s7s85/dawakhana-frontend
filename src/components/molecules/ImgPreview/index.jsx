import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import ModalContainer from 'components/molecules/ModalContainer';
import { ImgHolder, Delete, PreviewBtn, BtnsHolder, StyledImg } from './ImgPreview.styles';
import PdfIcon from '../../../assets/images/pdfdemo.png';
import ConfirmationModal from '../ConfirmationModal';

function ImgPreview({ src, alt, pdf, onDelete, withDelete, size, ...props }) {
  return pdf ? (
    <ImgHolder size={size} $pdf {...props}>
      <PreviewBtn as="a" href={src} type="button" target="_blank" download rel="noreferrer" withDelete={withDelete}>
        <span className="material-icons-outlined">file_download</span>
      </PreviewBtn>
      <img src={PdfIcon} alt="pdf icon" />
      {withDelete && (
        <ConfirmationModal
          title="Are you sure you want to Delete this document?"
          onOk={onDelete}
          confirmationModal="yes"
          btnComponent={({ onClick }) => (
            <Delete type="button" onClick={onClick}>
              <span className="material-icons-outlined">delete</span>
            </Delete>
          )}
        />
      )}
    </ImgHolder>
  ) : (
    <ModalContainer
      lg
      imgPreview
      btnComponent={({ onClick }) => (
        <ImgHolder size={size} {...props}>
          <img src={src} alt={alt || 'product image'} />
          <BtnsHolder>
            <PreviewBtn type="button" onClick={onClick} withDelete={withDelete}>
              <span className="material-icons-outlined">visibility</span>
            </PreviewBtn>
            {withDelete && (
              <ConfirmationModal
                title="Are you sure you want to Delete this document?"
                onOk={onDelete}
                deleteModal
                btnComponent={({ onClick: newClick }) => (
                  <Delete type="button" onClick={newClick}>
                    <span className="icon-trashcan" />
                  </Delete>
                )}
              />
            )}
          </BtnsHolder>
        </ImgHolder>
      )}
      content={() => <StyledImg src={src} alt={alt || 'image'} />}
    />
  );
}

export default ImgPreview;
