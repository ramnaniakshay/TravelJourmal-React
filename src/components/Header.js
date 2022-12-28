import {AppBar, Container, Toolbar, Typography, Grid} from "@mui/material"
const Header = () => {
    return(
        <div>
            <Container >
                <AppBar style={{ backgroundColor:'pink', alignItems:'center'}}>
                    <Toolbar>
                        <Grid container>
                            <Typography >
                                my travel journal.
                            </Typography>
                        </Grid>
                        
                    </Toolbar>
                </AppBar>
            </Container>
            <h1>this is header file</h1>

        </div>
    )
}
export default Header;