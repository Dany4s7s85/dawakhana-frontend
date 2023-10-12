import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from 'context/authContext';
import {
  ArrowHolder,
  Li,
  StyledLink,
  StyledSubMenu,
  SubMenuItem,
  SubMenuLink,
  SubMenuTitle,
  Title,
} from './SideNav.styles';

function SubMenu({ item, isLoading }) {
  const location = useLocation();
  const ref = useRef(null);
  const subMenuLinkRef = useRef(null);
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {
    setSubnav(!subnav);
  };

  const { allowedPages } = useContext(AuthContext);
  const activeCurrentPath = location?.pathname === `/brand/${item.file}`;
  // const activeSubMenu = location.pathname.split('/').length === 4;
  useEffect(() => {
    if (activeCurrentPath) {
      ref?.current?.parentElement?.childNodes.forEach(node => {
        node.classList.remove('prev-item-active');
        node.classList.remove('next-item-active');
      });

      ref?.current.previousElementSibling.classList.add('prev-item-active');
      ref?.current.nextElementSibling.classList.add('next-item-active');
    }
  }, [location?.pathname]);

  return (
    <Li
      css={isLoading && 'text-align: center;'}
      ref={ref}
      className={`${item.title ? 'title' : ''} ${activeCurrentPath ? 'item-active' : ''}`}>
      {isLoading ? (
        'loading...'
      ) : (
        <StyledLink
          to={item.hideSelf ? `/brand/${item.file}/${item?.subNav[0]?.file}` : `/brand/${item.file}`}
          onClick={showSubnav}>
          <i className={`icon ${item.materialIcon ? `material-icons-outlined` : `icon-${item.icon}`}`}>
            {item.materialIcon ? item.icon : ''}
          </i>
          <Title>{item.name}</Title>
          {item.subNav && subnav ? (
            <ArrowHolder>
              <span className="material-icons-outlined">arrow_drop_up</span>
            </ArrowHolder>
          ) : item.subNav ? (
            <ArrowHolder>
              <span className="material-icons-outlined">arrow_drop_down</span>
            </ArrowHolder>
          ) : null}
        </StyledLink>
      )}
      {subnav && item?.subNav && (
        <StyledSubMenu>
          {item?.subNav
            ?.filter(({ file }) => allowedPages.includes(file))
            .map((subNavItem, index) => (
              <SubMenuItem key={index}>
                <SubMenuLink ref={subMenuLinkRef} to={`/brand/${item?.file}/${subNavItem?.file}`}>
                  <i className="icon material-icons-outlined">{subNavItem.icon}</i>
                  <SubMenuTitle>{subNavItem.name}</SubMenuTitle>
                </SubMenuLink>
              </SubMenuItem>
            ))}
        </StyledSubMenu>
      )}
    </Li>
  );
}

export default SubMenu;
