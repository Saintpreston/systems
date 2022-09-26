import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import {theme} from '../../theme'



const NavLink = styled(Link)`
  color: ${theme.palette.text.primary};
  text-decoration: none;
  padding-left: 5%;
  padding-right: 5%;
  :hover {
    font-style: italic;
    color: ${theme.palette.primary.main}
  }

`;

export default NavLink;