import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  width: 540px;
  font-weight: 800;
`;

export const Description = styled.p`
  width: 540px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.grey};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 158px;
  justify-content: space-between;
`;

export const Images = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 1680px;
  gap: 30px;

  & :nth-child(1),
  & :nth-child(7) {
    margin-top: 120px;
  }
`;

export const Image = styled.img`
  width: 350px;
  height: 500px;

  border-radius: 6px;
`;
