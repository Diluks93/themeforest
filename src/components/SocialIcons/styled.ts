import styled from 'styled-components';

export const SocialStyled = styled.div<{ $visible?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${({ theme }) => theme.gaps[1]}px;
  width: 225px;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.gaps[1]}px;
`;
