import { useContext, useMemo } from 'react';
// eslint-disable-next-line no-unused-vars
import Styled from 'styled-components/macro';

import { LoadingContext } from 'context/loadingContext';
import { AuthContext } from 'context/authContext';
import sideNavData from 'nav.json';
import { SideNavContext } from 'context/sideNavContext';
import { SideNavbar, NavHead, NavTitle, CloseButton, Nav, Ul } from './SideNav.styles';
import SubMenu from './SubMenu';

function Navbar() {
  const { toggleSideNav, sideNavState } = useContext(SideNavContext);

  // eslint-disable-next-line no-unused-vars
  const { allowedPages } = useContext(AuthContext);
  const { isLoading } = useContext(LoadingContext);

  const sideBarItems = useMemo(
    () => sideNavData.filter(nav => nav.navigations).map((item, index) => <SubMenu item={item} key={index} />),
    [isLoading, sideNavData],
  );
  return (
    <SideNavbar
      css={isLoading && 'background:var(--dark);'}
      className={sideNavState && 'nav-active'}
      $loading={isLoading}>
      <Nav>
        <Ul>
          <li>
            <NavHead>
              <NavTitle>Pages</NavTitle>
              <CloseButton onClick={toggleSideNav}>
                <i className={`${sideNavState ? 'icon-menu' : 'icon-menu-expand'}`} />
              </CloseButton>
            </NavHead>
          </li>
          {sideBarItems}
        </Ul>
      </Nav>
    </SideNavbar>
  );
}
export default Navbar;
