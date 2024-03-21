import { FC } from "react";
import { useRouter } from "next/navigation";

import { Avatar, Box, Button, Typography } from '@mui/material';
import { cyan } from '@mui/material/colors';

const NavBar: FC = () => {
  const router = useRouter();

  const redirectToLoginPage = () => {
    router.push('/login')
  }

  return (
    <nav className="navbar">
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
      }}>
        <Avatar alt="logo" sx={{ bgcolor: cyan[500] }}>C</Avatar>
        <Typography variant="subtitle1">Compensar</Typography>
      </Box>
      <Box>
        <Button
          variant="text"
          size="small"
          onClick={redirectToLoginPage}
        >Login</Button>
      </Box>
    </nav>
  )
}

export default NavBar;
