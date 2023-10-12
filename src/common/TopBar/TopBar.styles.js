import styled from 'styled-components/macro';

export const LogoHolder = styled.div`
  flex-shrink: 0;
  width: 55px;

  @media (min-width: 576px) {
    width: 82px;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 0 0 0 10px;
  margin: 0;

  @media (min-width: 576px) {
    padding: 0 0 0 15px;
  }
  @media (min-width: 768px) {
    padding: 0 0 0 150px;
  }

  h1 {
    display: none;
    margin: 0;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const RightCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  padding-left: 10px;
`;

export const SearchHolder = styled.div`
  padding: 0 10px;

  button {
    padding: 0;
  }

  .icon-search {
    font-size: 24px;
    line-height: 1;
    color: #5b5a99;
  }
`;

export const Notification = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 30px;
  font-size: 12px;
  line-height: 15px;
  font-weight: 700;
  text-align: center;
  border-radius: 54px;
  mix-blend-mode: normal;
  box-shadow: 0px 5px 34px rgba(186, 19, 88, 0.42);
  background: linear-gradient(136.67deg, #ff409a 8.34%, #c438ef 95.26%);

  .icon-bell {
    display: inline-block;
    vertical-align: top;
    font-size: 13px;
    line-height: 1;
    margin: 1px 2px 0 0;
  }
`;
