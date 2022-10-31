import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  letter-spacing: -0.015em;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
  gap: 15px;

  width: 255px;
  height: 248px;

  background: ${({ theme }) => theme.colors.white};

  box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);
  border-radius: 6px;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;

  color: ${({ theme }) => theme.colors.black};
`;

export const Description = styled.p`
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: ${({ theme }) => theme.colors.grey};
`;
