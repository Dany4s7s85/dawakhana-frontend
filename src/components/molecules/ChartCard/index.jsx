import { StyledChartCard, Title, CardHead, TitleHolder, Value } from './ChartCard.styles';

function ChartCard({ title, value, children, ...props }) {
  return (
    <StyledChartCard {...props}>
      <CardHead>
        <TitleHolder>
          {title && <Title>{title}</Title>}
          {value && <Value>{value}</Value>}
        </TitleHolder>
      </CardHead>
      {children}
    </StyledChartCard>
  );
}

export default ChartCard;
