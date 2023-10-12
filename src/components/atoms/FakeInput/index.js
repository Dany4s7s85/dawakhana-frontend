import styled from 'styled-components/macro';

const FakeInput = styled.span`
  display: block;
  position: relative;
  width: 25px;
  height: 25px;
  background: var(--bg-light);
  margin-right: 14px;
  border-radius: 6px;
  flex-shrink: 0;

  .light & {
    background: #f3f3f3;
  }
`;

export default FakeInput;
