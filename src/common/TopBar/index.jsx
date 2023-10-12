/* eslint-disable react/no-unstable-nested-components */
import { useContext } from 'react';

// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import Skeleton from 'react-loading-skeleton';
import { LoadingContext } from 'context/loadingContext';
import Header from 'components/molecules/Header';

// import topNavData from 'nav.json';
// import { AuthContext } from 'context/authContext';
import { useParams } from 'react-router-dom';
import logoImg from 'assets/images/logo.svg';
import UserActions from 'components/organisms/UserActions';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import { LogoHolder, HeaderWrap, RightCol, SearchHolder, Notification } from './TopBar.styles';

function TopBar() {
  const { isLoading } = useContext(LoadingContext);
  // eslint-disable-next-line prefer-const
  let { view: title } = useParams();

  return (
    <Header title={title?.split('-')?.join(' ')}>
      {isLoading ? (
        <Skeleton rectangle height={40} width={131} css="border-radius:8px !important;" />
      ) : (
        <>
          <LogoHolder>
            <img src={logoImg} width="82" height="32" alt="Plastk" />
          </LogoHolder>
          <HeaderWrap>
            <Heading level={1}>{title?.split('-')?.join(' ')}</Heading>
            <RightCol>
              <SearchHolder>
                <Button type="submit">
                  <span className="icon-search" />
                </Button>
              </SearchHolder>
              <Notification>
                <span className="icon-bell" />
                15
              </Notification>
              <UserActions />
            </RightCol>
          </HeaderWrap>
        </>
      )}
    </Header>
  );
}

export default TopBar;
