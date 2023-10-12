import React from 'react';
// eslint-disable-next-line no-unused-vars
import style from 'styled-components/macro';

import UsePagination from '../../atoms/UsePagination';
import DOTS from '../../atoms/PaginationDots';
import { PaginationList, PaginationButton, PaginationHolder, SelectHolder, TotalItems } from './Pagination.styles';
import Select from '../../atoms/Select';

function Pagination(props) {
  const {
    onPageChange,
    onChangePageSize,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    customCss,
    showTotalCount,
    showItemsPerPage,
  } = props;

  // const { isLoading, page, nbPages, handlePage, handleNextPage } = useGlobalContext();

  const paginationRange = UsePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
    // const nextPage = currentPage + 1;
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  const selectItemsPerPage = [
    { value: '10', label: '10 / Page' },
    { value: '20', label: '20 / Page' },
    { value: '50', label: '50 / Page' },
    { value: '100', label: '100 / Page' },
  ];
  const selectPageSize = e => {
    onChangePageSize(e.target.value.value);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationHolder>
      {showTotalCount && <TotalItems>{totalCount} Items</TotalItems>}
      {showItemsPerPage && (
        <SelectHolder>
          <Select
            sm
            options={selectItemsPerPage}
            onChange={selectPageSize}
            defaultValue={selectItemsPerPage[0]}
            menuPlacement="top"
            noMargin
            isSearchable={false}
          />
        </SelectHolder>
      )}
      <PaginationList css={customCss}>
        <li>
          <PaginationButton type="primary" width={40} onClick={onPrevious} disabled={currentPage === 1}>
            <i className="material-icons-outlined">arrow_back_ios</i>
          </PaginationButton>
        </li>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li className="pagination-item dots" key={index}>
                &#8230;
              </li>
            );
          }

          return (
            <li key={index}>
              <PaginationButton
                $unStyled
                onClick={() => onPageChange(pageNumber)}
                className={`${(pageNumber === currentPage && 'selected') || ''}`}
                $pageNumBtn>
                {pageNumber}
              </PaginationButton>
            </li>
          );
        })}
        <li>
          <PaginationButton type="primary" width={40} onClick={onNext} disabled={currentPage === lastPage}>
            <i className="material-icons-outlined">arrow_forward_ios</i>
          </PaginationButton>
        </li>
      </PaginationList>
    </PaginationHolder>
  );
}

export default Pagination;
