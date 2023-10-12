import { useState, useEffect, useMemo, useRef, useContext } from 'react';
import debounce from 'lodash/debounce';
import styled from 'styled-components/macro';

import { format } from 'date-fns';
import Grid from 'components/atoms/Grid';
import GridCol from 'components/atoms/GridCol';
import Field from 'components/molecules/Field';
import Select from 'components/atoms/Select';
import { FiltersContext } from 'context/filtersContext';
import { useParams } from 'react-router-dom';
import { useMediaPredicate } from 'react-media-hook';
import Dropdown from 'components/molecules/Dropdown';
import Nav from './filtersData.json';

const FiltersHolder = styled.div`
  padding: 0 0 20px;
`;

// eslint-disable-next-line no-unused-vars
function Filters({ onChangeFilters, customFilterKey = '', extraFilters, onOptionClick }) {
  // eslint-disable-next-line no-unused-vars
  const { filterState, setFilterToggle } = useContext(FiltersContext);
  const [searchText, setSearchText] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  // eslint-disable-next-line prefer-const
  let { view, child } = useParams();

  if (customFilterKey) {
    view = customFilterKey;
  } else if (child) {
    view = child;
  }
  const MinWidth992 = useMediaPredicate('(min-width: 992px)');
  const MaxWidth991 = useMediaPredicate('(max-width: 991px)');
  const debounceRef = useRef(0);
  const [loadingFilters, setLoadingFilter] = useState(false);
  const [filtersState, setFiltersState] = useState({});
  const [filterOptions, setFilterOptions] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (MinWidth992) {
      setFilterToggle(true);
    }
    if (MaxWidth991) {
      setFilterToggle(false);
    }
  }, [MaxWidth991, MinWidth992, setFilterToggle]);

  const onSearchCallText = useMemo(
    () =>
      debounce(value => {
        debounceRef.current += 1;
        const LocalRef = debounceRef.current;
        setTimeout(() => {
          if (LocalRef === debounceRef.current) {
            onChangeFilters({ searchText: value });
          }
        }, 1);
      }, 300),
    [],
  );

  const currentFilter = useMemo(() => Nav.find(({ key }) => key === view), [Nav]);
  const getFiltersData = async ({ filters, filtersData }) => {
    const state = {};
    try {
      await Promise.all(
        filters
          .filter(key => key.toLowerCase().includes('filter'))
          .map(async key => {
            const { isDynamic, options, params, call, returnKey } = filtersData[key];
            if (!isDynamic) {
              state[key] = options.map(x => {
                const [value, label] = Object.entries(x)[0];
                return { label, value };
              });
            } else {
              const [serviceFile, functionName] = call.split('.');
              const serviceCall = await import(`services/${serviceFile}`);
              try {
                state[key] = (await serviceCall.default[functionName](params))[returnKey];
                options.forEach(x => {
                  const [value, label] = Object.entries(x)[0];
                  state[key].unshift({ label, value });
                });
                // state[key].unshift({ label: 'All', value: '' });
              } catch (ex) {
                state[key] = [{ label: 'All', value: '' }];
              }
            }
          }),
      );
      return state;
    } catch (ex) {
      return state;
    }
  };

  useEffect(() => {
    setLoadingFilter(true);
    getFiltersData(currentFilter).then(res => {
      setFilterOptions(res);
      Object.entries(res).forEach(([key, value]) => setFiltersState(_ => ({ ..._, [key]: value[0] })));
      setLoadingFilter(false);
    });
  }, [currentFilter]);

  return (
    filterState && (
      <FiltersHolder>
        <Grid
          lg={24}
          xl={12}
          gap={14}
          css={`
            align-items: end;
          `}>
          <GridCol xl={6}>
            <Grid xs={12} gap={14}>
              {currentFilter?.filters?.includes('text') && (
                <GridCol lg={12} xl={6}>
                  <Field
                    type="search"
                    placeholder="Search"
                    noMargin
                    label="Search"
                    value={searchText}
                    onChange={({ target: { value } }) => {
                      setSearchText(value);
                      onSearchCallText(value.trim());
                    }}
                    suffix={<i className="icon-search" />}
                    clear={searchText}
                    maxLength="150"
                    bgDark
                  />
                </GridCol>
              )}

              {currentFilter?.filters?.includes('date') && (
                <GridCol lg={12} xl={6}>
                  <Field
                    selectsRange
                    startDate={startDate}
                    endDate={endDate}
                    label="Select Date Range"
                    onChange={({ target: { value } }) => {
                      setDateRange(value);
                      if (value[0] && value[1]) {
                        onChangeFilters({
                          startDate: value[0] ? format(value[0], 'yyyy-MM-dd') : '',
                          endDate: value[1] ? format(value[1], 'yyyy-MM-dd') : '',
                        });
                      } else if (!value[0] && !value[1]) {
                        onChangeFilters({
                          startDate: '',
                          endDate: '',
                        });
                      }
                    }}
                    prefix={<i className="material-icons-outlined">date_range</i>}
                    placeholderText="Start Date - End Date"
                    type="datepicker"
                    noMargin
                    bgDark
                    clear={startDate || endDate}
                  />
                </GridCol>
              )}
            </Grid>
          </GridCol>
          <GridCol xl={6}>
            <Grid
              gap={14}
              css={`
                align-items: end;
                grid-template-columns: ${currentFilter?.filters?.includes('filter') && '250px'} ${currentFilter?.filters?.includes(
                    'menu',
                  ) && '40px'};
                justify-content: end;
              `}>
              {currentFilter?.filters
                ?.filter(key => key.toLowerCase().includes('filter'))
                ?.map((filter, index) => (
                  <GridCol key={index}>
                    <Select
                      isDisabled={loadingFilters}
                      loading={loadingFilters}
                      options={filterOptions[filter]}
                      placeholder={`${currentFilter.filtersData[filter].label}`}
                      value={filtersState[filter]}
                      noMargin
                      bgDark
                      label={`${currentFilter.filtersData[filter].label || 'Filter'}`}
                      name={`${filter}`}
                      prefix={<i className="material-icons-outlined">{currentFilter.filtersData[filter].icon}</i>}
                      clear={filtersState[filter] && filtersState[filter].value}
                      onChange={({ target: { value } }) => {
                        setFiltersState(prevState => ({
                          ...prevState,
                          [filter]: value,
                        }));
                        onChangeFilters({
                          [filter]: value.value,
                        });
                      }}
                    />
                  </GridCol>
                ))}
              {currentFilter?.filters?.includes('menu') && (
                <GridCol>
                  <Dropdown
                    options={currentFilter.menuData.options}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    onOptionClick={onOptionClick}
                    css="margin-bottom: 10px;"
                  />
                </GridCol>
              )}
            </Grid>
          </GridCol>
          {extraFilters}
        </Grid>
      </FiltersHolder>
    )
  );
}

export default Filters;
