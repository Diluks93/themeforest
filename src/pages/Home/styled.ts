import styled, { css } from 'styled-components';

import { NavLink } from 'react-router-dom';

const styleTitle = css`
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  width: 540px;
  font-weight: 800;
`;

export const Title = styled.h1`
  font-size: 46px;
  height: 120px;
  line-height: 60px;
  ${styleTitle};
`;

export const SubTitle = styled.h2<{ $full?: boolean; $left?: boolean }>`
  font-size: 57px;
  height: 197px;
  line-height: 66px;
  ${styleTitle};

  ${({ $full }) =>
    $full
      ? css`
          text-align: center;
          width: 100%;
          font-size: 38px;
          line-height: 56px;
          height: fit-content;
        `
      : css``};

  ${({ $left }) =>
    $left
      ? css`
          text-align: left;
        `
      : css``};
`;

export const Mark = styled.mark`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.p<{
  $unique?: boolean;
}>`
  position: relative;

  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  color: ${({ theme }) => theme.colors.grey};

  ${({ $unique }) =>
    $unique
      ? css`
          width: 350px;
        `
      : css`
          width: 100%;
        `}
`;

export const Wrapper = styled.div<{
  $align?: boolean;
  $row?: boolean;
  $col?: boolean;
}>`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.gaps[2]}px;
  width: 540px;

  ${({ $align }) =>
    $align
      ? css`
          align-items: flex-start;
        `
      : css``};

  ${({ $row }) =>
    $row
      ? css`
          align-items: center;
          justify-content: space-between;
          flex-direction: row;
          width: 100%;
          column-gap: ${({ theme }) => theme.gaps[2]}px;
        `
      : css``};

  ${({ $col }) =>
    $col
      ? css`
          flex-direction: row;
          column-gap: 30px;
        `
      : css``};
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

export const BlockTitle = styled.h3`
  font-size: 38px;
  line-height: 56px;
  ${styleTitle};
`;

export const Background = styled.div<{ $background: string }>`
  ${({ $background }) =>
    $background
      ? css`
          background-image: url(${$background});
          background-repeat: no-repeat;
          height: 740px;
          width: -webkit-fill-available;
          background-position: right;
          background-size: cover;
        `
      : css``}
`;
