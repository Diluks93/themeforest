import styled from 'styled-components';

export const SocialStyled = styled.div<{ $visible?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${({ theme }) => theme.gaps[1]}px;

  svg {
    fill: ${({ theme }) => theme.colors.hoverButton};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.gaps[5]}px;
`;
