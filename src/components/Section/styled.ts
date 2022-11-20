import styled, { css } from 'styled-components';

export const SectionStyled = styled.section<{
  $odd?: boolean;
  $isOn?: boolean;
  $cardSection?: boolean;
  $featureSection?: boolean;
  $overviewSection?: boolean;
  $full?: boolean;
  $col?: boolean;
  $primary?: boolean;
  $secondary?: boolean;
}>`
  font-family: 'Manrope';
  font-style: normal;

  text-align: left;

  height: fit-content;
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

  ${({ $primary, theme }) =>
    $primary
      ? css`
          background-color: ${theme.colors.primary};
        `
      : css``}

  ${({ $secondary, theme }) =>
    $secondary
      ? css`
          background-color: ${theme.colors.secondary};
        `
      : css``}
  
  ${({ $col }) =>
    $col
      ? css`
          flex-direction: column;
        `
      : css``}

  ${({ $isOn }) =>
    $isOn
      ? css`
          background-color: transparent;
        `
      : css``};

  ${({ $cardSection, theme }) =>
    $cardSection
      ? css`
          padding: ${theme.sizes.container.paddings[2]}px 0;
          row-gap: ${theme.gaps[12]}px;
        `
      : css``};

  ${({ $featureSection, theme }) =>
    $featureSection
      ? css`
          column-gap: ${theme.gaps[10]}px;
        `
      : css``};

  ${({ $overviewSection, theme }) =>
    $overviewSection
      ? css`
          row-gap: ${theme.gaps[11]}px;
        `
      : css``};
`;
