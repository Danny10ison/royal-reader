import { Box, Grid, Paper, styled} from '@mui/material';
import React from 'react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const NotificationSection = () => {
  return (
    <Box sx={{ flexGrow: 1, pt:2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            Welcome to Royal Reader, enjoy free short stories from the best writers in Ghana.
          </Item>
        </Grid>
      </Grid>
    </Box>
  );

}

export default NotificationSection