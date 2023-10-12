import styled, { css } from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { UserWrap } from 'components/organisms/UserActions/UserActions.styles';

export const Nav = styled.nav`
  position: relative;
`;

export const Ul = styled.ul`
  list-style: none;
  font-size: var(--font-size-sm);
  line-height: 20px;
  font-weight: 700;
  text-transform: capitalize;

  li {
    &:first-child {
      border-top-right-radius: 28px;
      border-top-left-radius: 28px;
      background: var(--bg-primary);
    }
    &:last-child {
      border-bottom-right-radius: 28px;
      border-bottom-left-radius: 28px;
      padding-bottom: 15px;
    }
    &.item-active {
      border-radius: 0 28px 28px 0;
    }
    &.prev-item-active {
      border-bottom-right-radius: 28px;
    }
    &.next-item-active {
      border-top-right-radius: 28px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: var(--white);
  position: relative;
  transition: none;
  padding: 12px;
  border-radius: 50px;
  border-width: 4px;
  border-style: solid;
  border-color: transparent;
  transition: linear 0.3s;
  z-index: 3;

  .light & {
    color: #6f6c99;
  }

  &.active {
    color: var(--dark-blue);
    border-color: var(--dark-blue);
    background: linear-gradient(126.2deg, #40ddff 13.39%, #13b1e6 89.95%);

    &:hover {
      color: var(--dark-blue);
    }
  }

  .nav-active & {
    padding: 12px 20px;
  }

  i.icon {
    display: inline-block;
    font-size: 18px;
    line-height: 1;
    margin: 0 10px 0 0;
    transition: linear 0.3s;
  }

  &:hover {
    color: #40ddff;
  }
`;

export const Li = styled.li`
  padding: 0 12px;
  background: var(--bg-primary);

  &.prev-item-active {
    border-bottom-right-radius: 18px;
  }

  &.item-active {
    padding-right: 0;
    padding-left: 12px;

    @media (min-width: 768px) {
      padding-left: 15px;
    }
  }

  .nav-active & {
    padding: 0 20px;

    &.item-active {
      padding-right: 0;
      padding-left: 20px;

      @media (min-width: 768px) {
        padding-left: 32px;
      }
    }

    &.title {
      a {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &.title {
    padding: 75px 15px 30px;
    a {
      display: block;
      padding: 0;
      visibility: hidden;
      opacity: 0;
      background: none;
      border: 0;
      color: var(--white);

      .light & {
        color: #6f6c99;
      }
    }
    .icon {
      display: none;
    }
    span {
      display: block;
      opacity: 1;
      visibility: visible;
      padding: 0;
    }
  }
`;

export const Title = styled.span`
  position: relative;
  width: 0;
  visibility: hidden;
  opacity: 0;
  white-space: nowrap;
  transition: linear 0.3s;
`;

export const StyledSubMenu = styled.ul`
  font-size: 14px;
  background: var(--bg-dark);
  border-radius: 0 0 16px 16px;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: -23px;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0 0 16px 16px;
    background: #1a193f;
    z-index: -1;
  }

  .icon {
    display: inline-block;
    font-size: 25px;
    line-height: 1;
    margin: 0;
    transition: linear 0.3s;
    margin-right: 10px;
  }
`;

export const ArrowHolder = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  font-size: 20px;
`;

export const NavHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 20px 15px;
`;

export const NavTitle = styled.strong`
  display: none;
  font-size: 12px;
  line-height: 15px;

  .light & {
    color: #6f6c99;
  }
`;

export const CloseButton = styled.button`
  display: inline-block;
  font-size: 20px;
  line-height: 1;
  margin: 0 auto;
  color: var(--white);
  font-size: 20px;
  line-height: 1;

  .light & {
    color: #6f6c99;
  }
`;

export const SideNavbar = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 95px;
  left: 15px;
  bottom: 10px;
  width: 70px;
  padding-right: 3px;
  transition: linear 0.3s;
  z-index: var(--z-40);
  flex-shrink: 0;

  @media (min-width: 992px) {
    position: static;
    width: 73px;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  ${({ $loading }) =>
    !$loading &&
    css`
      &.nav-active {
        width: 240px;

        ${CloseButton} {
          margin: 0;
        }

        ${NavHead} {
          padding: 20px;
        }

        ${NavTitle} {
          display: block;
        }

        ${StyledLink} {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;
        }

        ${Title} {
          opacity: 1;
          visibility: visible;
          width: auto;
          left: 0;
        }

        ${UserWrap} {
          position: relative;
        }
      }
    `}
`;

export const SubMenuItem = styled.li`
  background: none !important;
`;

export const SubMenuLink = styled(NavLink)`
  padding: 10px;
  color: var(--white);
  display: flex;
  align-items: center;

  &.active {
    color: var(--primary);
  }
`;

export const SubMenuTitle = styled.span``;
