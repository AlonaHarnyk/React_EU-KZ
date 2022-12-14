import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const A = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: blue;

  &.active {
    color: red;
  }
`;
