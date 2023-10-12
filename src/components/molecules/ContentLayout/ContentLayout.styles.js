import styled from 'styled-components/macro';

export const ContentLayoutHolder = styled.div`
  border-radius: 20px;
  background: var(--bg-primary);
  padding: 20px 15px;

  @media (min-width: 1200px) {
    padding: 30px;
  }
`;

export const ContentHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  h2 {
    margin: 0;
  }
`;

export const BtnsHolder = styled.div`
  display: flex;
  align-items: center;
`;
