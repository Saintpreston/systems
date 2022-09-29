import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';




const NavLink = styled(Typography)`

  color: ${props => (props.theme.palette.text.primary)} ;
  text-decoration: none;
  margin-left: 5%;
  margin-right: 5%;
  :hover {
    font-style: italic;
    color: ${props => (props.theme.palette.primary.main)}
  }
 
`;

export default NavLink;