import { createGlobalStyle, css } from 'styled-components/macro';
import { normalize } from 'polished';
import Variables from './variables.css';
import Fonts from './Fonts';

const Styling = css`
  ${Fonts}
  /* theme css variables */
  ${Variables}

  

  /* (normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css) */
  ${normalize()}

  /* Other Reset that aren't define in normalize.css*/
  html {
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
  }

  input::-webkit-file-upload-button {
    display: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    border: 0 solid;
  }

  body {
    color: var(--base-text-color);
    background: var(--base-background-color);
    font: var(--font-size-base) / var(--line-height-base) var(--base-font-family);
    font-weight: 500;
    position: relative;
    min-width: var(--base-min-width);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &.nav-active {
      @media (max-width: 575px) {
        overflow: hidden;
      }
    }

    .light & {
      background: #fff;
    }

    &.panel-active {
      overflow: hidden;
      &:before {
        display: block;
      }
    }

    &:before {
      display: none;
      content: '';
      position: absolute;
      top: 0;
      bottom: -10%;
      left: 0;
      right: 0;
      backdrop-filter: blur(4px);
      background: rgba(50, 59, 75, 0.3);
      z-index: 9;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type='button'],
  input[type='reset'],
  input[type='file'],
  input[type='submit'] {
    cursor: pointer;
  }

  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }
  a {
    text-decoration: none;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  a,
  button {
    transition: opacity var(--animation-speed) ease-in-out, background var(--animation-speed) ease-in-out,
      visibility var(--animation-speed) ease-in-out, border var(--animation-speed) ease-in-out,
      color var(--animation-speed) ease-in-out;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 1.25rem;
  }

  p {
    margin: 0;
  }

  /************* custom scrollbar styles ************/

  /* This will work on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--primary) #eceaf9;
  }

  /* Targtes on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 30px;
    background: #eceaf9;
  }

  *::-webkit-scrollbar-thumb {
    background: #40ddff;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.03);
    border-radius: 30px;
  }

  /* Remove Arrows/Spinners from input type number */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    appearance: textfield;
  }

  .react-datepicker {
    font-family: var(--base-font-sans-serif);
    border: none;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    background: var(--bg-light);
  }
  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: var(--primary);
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: var(--sky-blue);
  }

  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__month-text--keyboard-selected:hover,
  .react-datepicker__quarter-text--keyboard-selected:hover,
  .react-datepicker__year-text--keyboard-selected:hover {
    background-color: var(--primary);
  }

  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range),
  .react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range),
  .react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range),
  .react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range) {
    background-color: var(--primary);
    opacity: 0.5;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover,
  .react-datepicker__quarter-text--selected:hover,
  .react-datepicker__quarter-text--in-selecting-range:hover,
  .react-datepicker__quarter-text--in-range:hover,
  .react-datepicker__year-text--selected:hover,
  .react-datepicker__year-text--in-selecting-range:hover,
  .react-datepicker__year-text--in-range:hover {
    background-color: var(--primary);
    opacity: 0.7;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: var(--white);
  }
  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    color: var(--black);
  }
  .react-datepicker__close-icon {
    &:after {
      padding: 0 !important;
      line-height: 16px !important;
      display: block !important;
      background: var(--primary) !important;
    }
  }
  .react-datepicker__header {
    background: none;
    border: none;
    padding-bottom: 0;
    padding-top: 15px;
  }
  .react-datepicker__day-name {
    color: var(--light-gray);
    font-weight: bold;
  }
  .react-datepicker-popper {
    z-index: var(--z-55);
  }

  hr {
    border: none;
    border-bottom: 1px solid var(--white);
  }
`;

const HelperClasses = css`
  .hidden {
    display: none;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .d-block {
    display: block;
  }
  .text-center {
    text-align: center;
  }
  .font-bold {
    font-weight: bold;
  }
  .font-medium {
    font-weight: 500;
  }
  .wrapper {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
  }
  .text-dark {
    color: var(--secondary-text-color);
  }
  .text-primary {
    color: var(--primary-text-color);
  }
  .truncate-sm {
    @media (max-width: 575px) {
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .truncate-md {
    @media (min-width: 768px) {
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .mb-20 {
    margin-bottom: var(--gutter);
  }

  [class^='material-icons-'],
  [class*=' material-icons-'] {
    font-size: inherit;
  }
  [data-reach-menu-popover] {
    z-index: 50;
  }
`;

const Icomoon = css`
  [class^='icon-'],
  [class*=' icon-'] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-link:before {
    content: '\\e92b';
  }
  .icon-phone:before {
    content: '\\e92c';
  }
  .icon-pin:before {
    content: '\\e92d';
  }
  .icon-clock:before {
    content: '\\e92e';
  }

  .icon-padlock:before {
    content: '\\e92a';
  }

  .icon-refresh:before {
    content: '\\e928';
  }
  .icon-save:before {
    content: '\\e929';
  }

  .icon-camera:before {
    content: '\\e91c';
  }
  .icon-cross-circle:before {
    content: '\\e906';
  }
  .icon-check-circle:before {
    content: '\\e907';
  }
  .icon-warning-circle:before {
    content: '\\e908';
  }
  .icon-send:before {
    content: '\\e909';
  }
  .icon-info-circle:before {
    content: '\\e927';
  }
  .icon-eye-open:before {
    content: '\\e926';
  }
  .icon-options:before {
    content: '\\e925';
  }
  .icon-filter:before {
    content: '\\e924';
  }
  .icon-download-file:before {
    content: '\\e923';
  }
  .icon-circle-double:before {
    content: '\\e922';
  }
  .icon-search-2:before {
    content: '\\e917';
  }
  .icon-location:before {
    content: '\\e90b';
  }
  .icon-lock-2:before {
    content: '\\e90c';
  }
  .icon-logout:before {
    content: '\\e90d';
  }
  .icon-megaphone:before {
    content: '\\e90e';
  }
  .icon-menu:before {
    content: '\\e90f';
  }
  .icon-menu-expand:before {
    content: '\\e910';
  }
  .icon-message:before {
    content: '\\e911';
  }
  .icon-minus:before {
    content: '\\e912';
  }
  .icon-moon:before {
    content: '\\e913';
  }
  .icon-pencil:before {
    content: '\\e914';
  }
  .icon-plus:before {
    content: '\\e915';
  }
  .icon-search:before {
    content: '\\e916';
  }
  .icon-setting:before {
    content: '\\e918';
  }
  .icon-trashcan:before {
    content: '\\e919';
  }
  .icon-twosidearrow:before {
    content: '\\e91a';
  }
  .icon-upload-2:before {
    content: '\\e91b';
  }
  .icon-bell:before {
    content: '\\e91d';
  }
  .icon-calendar:before {
    content: '\\e91e';
  }
  .icon-cards:before {
    content: '\\e91f';
  }
  .icon-glowingstar:before {
    content: '\\e920';
  }
  .icon-headphone:before {
    content: '\\e921';
  }
  .icon-close:before {
    content: '\\e90a';
  }
  .icon-upload:before {
    content: '\\e905';
  }
  .icon-chevron-down:before {
    content: '\\e903';
  }
  .icon-check:before {
    content: '\\e904';
  }
  .icon-person:before {
    content: '\\e902';
  }
  .icon-lock:before {
    content: '\\e900';
  }
  .icon-mail:before {
    content: '\\e901';
  }
`;

const GlobalStyles = createGlobalStyle`
  ${Icomoon}
  ${Styling}
  ${HelperClasses}
  
`;

export default GlobalStyles;
