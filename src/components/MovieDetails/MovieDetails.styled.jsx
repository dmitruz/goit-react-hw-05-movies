import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const GoToBackBtn =  styled.button`
  margin-bottom: 10px;
  margin-left:5px;
  padding: 10px;
   cursor: pointer;
`;

export const Container =  styled.div`
  display: flex;
`;

export const ContainerInfo =  styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const ContainerNav = styled.nav`
 margin-top: 15px;
 border-bottom : 2px solid #C0C0C0;
 border-top : 2px solid #C0C0C0;
 padding: 20px;
`;


export const Link = styled(NavLink)`
  margin: 15px 20px;
  display: flex;
  color: #000000;
  &.active {
    color: #FF0000;
  }
`;
export const TittleNav = styled.div`
font-size: 20px;
`;