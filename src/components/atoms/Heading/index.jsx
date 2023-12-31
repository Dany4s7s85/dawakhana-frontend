import { H1, H2, H3, H4, H5, H6 } from './Heading.styles';

function Heading({ level, children, ...rest }) {
  switch (level) {
    case 1:
      return <H1 {...rest}>{children}</H1>;
    case 2:
      return <H2 {...rest}>{children}</H2>;
    case 3:
      return <H3 {...rest}>{children}</H3>;
    case 4:
      return <H4 {...rest}>{children}</H4>;
    case 5:
      return <H5 {...rest}>{children}</H5>;
    default:
      return <H6 {...rest}>{children}</H6>;
  }
}

export default Heading;
