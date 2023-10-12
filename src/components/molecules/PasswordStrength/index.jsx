/* eslint-disable no-unused-vars */
import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import { BarHolder, BarList, BarListItem, BarBg, Bar, Circle, StrengthList } from './PasswordStrength.styles';

function PasswordStrength({ password }) {
  const [strength, setStrength] = useState({
    lowercase: false,
    uppercase: false,
    specialCharacter: false,
    number: false,
    minimum: false,
    extra: false,
  });
  useEffect(
    () =>
      setStrength({
        lowercase: /(?=.*[a-z])/.test(password),
        uppercase: /(?=.*[A-Z])/.test(password),
        specialCharacter: !!/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ])/.test(password),
        number: /(?=.*\d)/.test(password),
        minimum: password?.length >= 8,
        extra: password?.length >= 10,
      }),
    [password],
  );
  const trueLength = Object.values(strength)
    .map(value => value)
    .filter(value => value).length;

  const strengthVisibility = [trueLength > 0 ? 'opacity:1;' : 'opacity:0;'];
  const strengthFill = () => {
    switch (trueLength) {
      case 1:
        return 'width: 16.666667%; background: var(--light-red);';
      case 2:
        return 'width: 33.333333%; background: var(--light-red);';
      case 3:
        return 'width: 50%; background: var(--light-red);';
      case 4:
        return 'width: 66.666667%; background: var(--warning);';
      case 5:
        return 'width: 83.333333%; background: var(--primary);';
      case 6:
        return 'width: 100%; background: var(--primary);';
      default:
        return 'width: 0; bg-paris-light';
    }
  };
  return (
    <>
      <BarHolder css={strengthVisibility}>
        <BarList>
          <BarListItem />
          <BarListItem />
          <BarListItem />
          <BarListItem />
          <BarListItem />
          <BarListItem />
        </BarList>
        <BarBg>
          <Bar css={strengthFill()} />
        </BarBg>
      </BarHolder>
      <StrengthList>
        <li>
          <Circle active={strength.lowercase} />
          One lowercase character
        </li>
        <li>
          <Circle active={strength.specialCharacter} />
          One special character
        </li>
        <li>
          <Circle active={strength.uppercase} />
          One uppercase character
        </li>
        <li>
          <Circle active={strength.minimum} />8 character minimum
        </li>
        <li>
          <Circle active={strength.number} />
          One number
        </li>
      </StrengthList>
    </>
  );
}

export default PasswordStrength;
