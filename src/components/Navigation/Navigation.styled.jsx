import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const Link = styled(NavLink)`
  margin: 15px ;
  display: inline-block;
  font-size: 22px;
  text-transform: uppercase;
  color: #000000;
  &.active {
    color: #FF0000;
  }
`;

export const Container = styled.div`
  padding: 50px;
  background-color: #ea2128;
`;