import styled from 'styled-components';

export const HeaderStyled = styled.header`
  height: ${({ theme }) => theme.sizes.header.height}px;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
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
