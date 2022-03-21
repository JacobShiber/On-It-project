// import React from 'react'

// export default function footer-component() {
//     return (
//         <div>footer-component</div>
//     )
// }


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


export default function Footer() {
  return (
    // <footer>
      <Box
        px={{ xs: 1, sm: 0.5 }}
        py={{ xs: 1, sm: 0.5 }}
        bgcolor="#9932CC"
        color="white"
      >

        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={10} sm={3}>
              {/* <Box borderBottom={1}>Help</Box> */}
              <Box>
                <Link href="/" color="inherit">
                  Home
                </Link>
              </Box>

            </Grid>
            <Grid item xs={12} sm={2}>


              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>

              <Box>
                <Link href="/" color="inherit">
                  News
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>

              <Box>
                <Link href="/" color="inherit">
                  Grade's Table
                </Link>
              </Box>
            </Grid>

            <Grid item xs={3} sm={2}>

              <Box>
                <Link href="/" color="inherit">
                  Calender
                </Link>
              </Box>




            </Grid>
          </Grid>
         
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            ON IT &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    // </footer>
  );
}
