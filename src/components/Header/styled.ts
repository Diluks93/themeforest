import styled from 'styled-components';

import { ButtonStyled } from 'components/Button/styled';

export const HeaderStyled = styled.header`
  height: ${({ theme }) => theme.sizes.header.height}px;
  background-color: ${({ theme }) => theme.colors.background};
  font-weight: ${({ theme }) => theme.fonts.weights[2]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  #logo {
    cursor: pointer;
    transform: scale(1);
  }

  #menu {
    display: none;
  }

  @media ${({ theme }) => theme.media.mobile} {
    #logo {
      transform: scale(0.85);
    }

    button {
      display: none;
    }

    #menu {
      display: inline-block;
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ButtonHeader = styled(ButtonStyled)`
  width: ${({ theme }) => theme.sizes.button.width[3]}px;
  height: ${({ theme }) => theme.sizes.button.height[0]}px;

  svg {
    transform: scale(1.1);
  }
`;
