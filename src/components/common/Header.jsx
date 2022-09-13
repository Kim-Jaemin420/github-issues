import React from 'react';
import styled from 'styled-components';

function Header() {
  return <HeaderWrapper>Wanted-pre-on-boarding / react</HeaderWrapper>;
}

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 80px;
  margin-bottom: 30px;
  padding: 0 10px;
  text-align: center;
  line-height: 80px;
  font-size: 25px;
  word-break: break-all;
`;
