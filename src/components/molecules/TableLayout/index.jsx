import React from 'react';

import Filters from '../../../common/filters';
import { TableLayoutHolder, StyledTableLayout, TotalResult, TableFooter } from './TableLayout.styles';
import Pagination from '../Pagination';

function TableLayout({
  children,
  currentPage = 1,
  pageSize = 10,
  totalCount = 0,
  onChangeFilters,
  customFilterKey = '',
  extraFilters,
  filters = true,
  noNegativeMargin,
  onOptionClick,
}) {
  return (
    <TableLayoutHolder>
      {filters && (
        <Filters
          onChangeFilters={_ => onChangeFilters({ ..._, page: 1 })}
          customFilterKey={customFilterKey}
          extraFilters={extraFilters}
          onOptionClick={onOptionClick}
        />
      )}
      <StyledTableLayout noNegativeMargin={noNegativeMargin}>
        {children}
        <TableFooter>
          <TotalResult>
            {currentPage * pageSize - pageSize + 1} - {totalCount <= pageSize ? totalCount : currentPage * pageSize} of{' '}
            {totalCount} Items
          </TotalResult>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={totalCount}
            pageSize={pageSize}
            onPageChange={_ => onChangeFilters({ page: _ })}
            showTotalCount={false}
            showItemsPerPage={false}
          />
        </TableFooter>
      </StyledTableLayout>
    </TableLayoutHolder>
  );
}

export default TableLayout;
