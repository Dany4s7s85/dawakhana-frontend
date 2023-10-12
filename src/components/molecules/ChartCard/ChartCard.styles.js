import styled from 'styled-components/macro';

export const StyledChartCard = styled.div`
  background: var(--bg-primary);
  border-radius: 20px;
  padding: 20px;
`;

export const TitleHolder = styled.div`
  font-weight: bold;
`;
export const Title = styled.span`
  font-size: var(--font-size-xs);
  line-height: calc(var(--font-size-xs) + 3px);
  display: block;
`;
export const CardHead = styled.div`
  margin-bottom: 12px;
`;
export const Value = styled.span`
  font-size: var(--font-size-lg);
  line-height: calc(var(--font-size-lg) + 3px);
`;
