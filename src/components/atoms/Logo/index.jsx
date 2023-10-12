import logoWhite from 'assets/images/logo-white.svg';
import logo from 'assets/images/logo-black.svg';
import { LogoHolder, Img } from './Logo.styles';

function LogoComp({ white, center, ...props }) {
  return (
    <LogoHolder center={center}>
      <Img src={white ? logoWhite : logo} alt="plastk" {...props} />
    </LogoHolder>
  );
}

export default LogoComp;
