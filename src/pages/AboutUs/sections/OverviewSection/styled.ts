import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.gaps[17]}px 0 0;

  width: 100%;
`;

export const Divider = styled.hr`
  height: 1px;
  width: 3%;
  border: none;
  transform: rotate(90deg) scale(3);
  background-color: ${({ theme }) => theme.colors.steel};
`;
