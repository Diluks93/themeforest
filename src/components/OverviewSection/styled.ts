import styled, { css } from 'styled-components';

import { Description, Container, BlockTitle } from 'styles';

const serviceStyles = css`
  padding: 0;
`;

export const ContainerStyled = styled(Container)<{ $service?: boolean }>`
  row-gap: ${({ theme }) => theme.gaps[11]}px;

  ${({ $service, theme }) =>
    $service
      ? serviceStyles
      : css`
          padding-bottom: ${theme.sizes.container.paddings[1]}px;
        `}
`;

export const BlockTitleStyled = styled(BlockTitle)<{ $service?: boolean }>`
  ${({ $service, theme }) =>
    $service
      ? serviceStyles
      : css`
          padding-top: ${theme.sizes.container.paddings[2]}px;
        `}
`;

export const DescriptionStyled = styled(Description)`
  font-size: ${({ theme }) => theme.fonts.sizes[3]}px;
  line-height: ${({ theme }) => theme.fonts.heights[3]}px;
  flex: 1;
`;

export const Wrapper = styled.div<{
  $row?: boolean;
}>`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.gaps[8]}px;
  flex: 1;

  ${({ $row }) =>
    $row
      ? css`
          align-items: center;
          justify-content: space-between;
        `
      : css``};
`;
