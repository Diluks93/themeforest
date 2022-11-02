import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { pathArrowRight } from 'static';

export const ContactsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 479px;
  row-gap: ${({ theme }) => theme.gaps[1]}px;
`;

export const Wrapper = styled.div<{ $col?: boolean; $reverse?: boolean }>`
  display: flex;
  justify-content: space-between;

  ${({ $col }) =>
    $col
      ? css`
          flex-direction: column;
          align-items: flex-start;
          row-gap: ${({ theme }) => theme.gaps[0]}px;
        `
      : css`
          width: 100%;
        `}

  ${({ theme }) =>
    theme.type === 'dark'
      ? css`
          flex-direction: column;
        `
      : css``}

  ${({ theme, $reverse }) =>
    theme.type === 'dark' && $reverse
      ? css`
          flex-direction: column-reverse;
        `
      : css``}
`;

const contactsStyles = css`
  text-decoration: none;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
`;

const linkStyles = css`
  text-decoration: none;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  column-gap: 3px;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: '';
    background-image: url(${pathArrowRight});
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    filter: grayscale(1);
  }
`;

export const Phone = styled.a`
  ${contactsStyles}
`;

export const Email = styled.a`
  ${linkStyles}
`;

export const LinkStyled = styled(Link)<{ $visible?: boolean }>`
  ${linkStyles}

  ${({ $visible, theme }) =>
    $visible && theme.type === 'dark'
      ? css`
          display: none;
        `
      : css``}
`;

export const Address = styled.address`
  ${contactsStyles}
  font-style: normal;
`;
