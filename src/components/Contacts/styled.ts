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
`;

const linkStyles = css`
  font-weight: ${({ theme }) => theme.fonts.weights[2]};
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  column-gap: ${({ theme }) => theme.gaps[0]}px;
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

export const LinkStyled = styled(Link)`
  ${linkStyles}
`;
