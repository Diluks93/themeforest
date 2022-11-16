import styled, { css } from 'styled-components';

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.sizes[7]}px;
  line-height: 60px;

  text-align: center;
  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.black};
`;

export const Block = styled.div<{ $reverse?: boolean }>`
  height: 440px;
  display: flex;
  gap: 30px;

  ${({ $reverse }) =>
    $reverse
      ? css`
          flex-direction: row-reverse;
        `
      : css`
          flex-direction: row;
        `}
`;

export const Wrapper = styled.div<{ $row?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;

  ${({ $row }) =>
    $row
      ? css`
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 30px 0px;
          gap: 15px;

          width: 100%;
          height: 164px;
          }
        `
      : css``}
`;

export const SubTitle = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.sizes[7]}px;
  line-height: 60px;

  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.black};
`;

export const Description = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes[3]}px;
  line-height: 33px;
  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.grey};
`;

export const Image = styled.img`
  width: 635px;
  height: 425px;

  border-radius: 6px;
`;

export const Divider = styled.span`
  width: 92px;
  height: 1px;
  transform: rotate(90deg);
  background-color: ${({ theme }) => theme.colors.steel};
`;

const contactsStyles = css`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  line-height: 28px;

  text-align: right;
  letter-spacing: -0.015em;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  color: ${({ theme }) => theme.colors.grey};
`;

export const Phone = styled.a`
  ${contactsStyles}
`;

export const Email = styled.a`
  ${contactsStyles}
`;

export const Address = styled.address`
  ${contactsStyles}
  font-style: normal;
`;

export const Labeling = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: 24px;

  text-align: right;
  letter-spacing: -0.01em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: ${({ theme }) => theme.colors.black};
  fill: ${({ theme }) => theme.colors.black};
`;
