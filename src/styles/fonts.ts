import { createGlobalStyle } from 'styled-components';

import ManropeBold from 'static/fonts/Manrope/Manrope-Bold.ttf';
import ManropeBoldW from 'static/fonts/Manrope/Manrope-Bold.woff2';
import ManropeBoldO from 'static/fonts/Manrope/Manrope-Bold.otf';
import ManropeExtraBold from 'static/fonts/Manrope/Manrope-ExtraBold.ttf';
import ManropeExtraBoldW from 'static/fonts/Manrope/Manrope-ExtraBold.woff2';
import ManropeExtraBoldO from 'static/fonts/Manrope/Manrope-ExtraBold.otf';
import ManropeMedium from 'static/fonts/Manrope/Manrope-Medium.ttf';
import ManropeMediumW from 'static/fonts/Manrope/Manrope-Medium.woff2';
import ManropeMediumO from 'static/fonts/Manrope/Manrope-Medium.otf';
import ManropeSemiBold from 'static/fonts/Manrope/Manrope-SemiBold.ttf';
import ManropeSemiBoldW from 'static/fonts/Manrope/Manrope-SemiBold.woff2';
import ManropeSemiBoldO from 'static/fonts/Manrope/Manrope-SemiBold.otf';

import OpenSansRegular from 'static/fonts/Open_Sans/open-sans-v34-latin-regular.ttf';
import OpenSansRegularE from 'static/fonts/Open_Sans/open-sans-v34-latin-regular.eot';
import OpenSansRegularW2 from 'static/fonts/Open_Sans/open-sans-v34-latin-regular.woff2';
import OpenSansRegularW from 'static/fonts/Open_Sans/open-sans-v34-latin-regular.woff';
import OpenSansBold from 'static/fonts/Open_Sans/open-sans-v34-latin-700.ttf';
import OpenSansBoldE from 'static/fonts/Open_Sans/open-sans-v34-latin-700.eot';
import OpenSansBoldW2 from 'static/fonts/Open_Sans/open-sans-v34-latin-700.woff2';
import OpenSansBoldW from 'static/fonts/Open_Sans/open-sans-v34-latin-700.woff';
import OpenSansSemiBold from 'static/fonts/Open_Sans/open-sans-v34-latin-600.ttf';
import OpenSansSemiBoldE from 'static/fonts/Open_Sans/open-sans-v34-latin-600.eot';
import OpenSansSemiBoldW2 from 'static/fonts/Open_Sans/open-sans-v34-latin-600.woff2';
import OpenSansSemiBoldW from 'static/fonts/Open_Sans/open-sans-v34-latin-600.woff';

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Manrope';
  font-style: bold;
  font-weight: 800;
  src: url(${ManropeExtraBold}) format('ttf'),
       url(${ManropeExtraBoldW}) format('woff2'),
       url(${ManropeExtraBoldO}) format('otf');
}

@font-face {
  font-family: 'Manrope';
  font-style: bold;
  font-weight: 700;
  src: url(${ManropeBold}) format('ttf'),
       url(${ManropeBoldW}) format('woff2'),
       url(${ManropeBoldO}) format('otf');
}

@font-face {
  font-family: 'Manrope';
  font-style: bold;
  font-weight: 600;
  src: url(${ManropeSemiBold}) format('ttf'),
       url(${ManropeSemiBoldW}) format('woff2'),
       url(${ManropeMediumO}) format('otf');
}

@font-face {
  font-family: 'Manrope';
  font-style: medium;
  font-weight: 500;
  src: url(${ManropeMedium}) format('ttf'),
       url(${ManropeMediumW}) format('woff2'),
       url(${ManropeSemiBoldO}) format('otf');
}

@font-face {
  font-family: 'Open Sans';
  font-style: regular;
  font-weight: 400;
  src: url(${OpenSansRegular}) format('ttf'),
       url(${OpenSansRegularW2}) format('woff2'),
       url(${OpenSansRegularW}) format('woff'),
       url(${OpenSansRegularE}) format('eot');
}

@font-face {
  font-family: 'Open Sans';
  font-style: bold;
  font-weight: 700;
  src: url(${OpenSansBold}) format('ttf'),
       url(${OpenSansBoldW2}) format('woff2'),
       url(${OpenSansBoldW}) format('woff'),
       url(${OpenSansBoldE}) format('eot');
}

@font-face {
  font-family: 'Open Sans';
  font-style: bold;
  font-weight: 600;
  src: url(${OpenSansSemiBold}) format('ttf'),
       url(${OpenSansSemiBoldW2}) format('woff2'),
       url(${OpenSansSemiBoldW}) format('woff'),
       url(${OpenSansSemiBoldE}) format('eot');
}
`;
