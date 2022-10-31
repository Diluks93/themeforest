import styled, { css } from 'styled-components';

export const SectionStyled = styled.section<{
  $odd?: boolean;
  $background?: string;
  $height?: number;
  $full?: boolean;
  $col?: boolean;
}>`
  font-family: 'Manrope';
  font-style: normal;

  text-align: left;

  height: fit-content;
  min-height: 266px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: ${({ theme }) => theme.gaps[2]}px;
  row-gap: ${({ theme }) => theme.gaps[2]}px;

  ${({ $odd, theme }) =>
    $odd
      ? css`
          background-color: ${theme.colors.background};
        `
      : css`
          background-color: ${theme.colors.white};
        `}

  ${({ $background }) =>
    $background
      ? css`
          background-image: url(${$background});
          background-repeat: no-repeat;
          height: 740px;
        `
      : css``}

  ${({ $full }) =>
    $full
      ? css`
          background-size: cover;
          background-position: center/center;
          height: 590px;
        `
      : css``}
  
  ${({ $height }) =>
    $height
      ? css`
          height: ${$height}px;
        `
      : css``}

  ${({ $col }) =>
    $col
      ? css`
          flex-direction: column;
        `
      : css``}
`;
