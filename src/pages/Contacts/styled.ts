import styled, { css } from 'styled-components';

export const Title = styled.h2`
  font-size: 80px;
  line-height: 88px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  width: 540px;
  font-weight: 800;
`;

export const Mark = styled.mark`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
`;

const contactsStyles = css`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
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
  font-size: 14px;
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
