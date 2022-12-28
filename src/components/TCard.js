import {Grid,Typography, Container} from "@mui/material"


const TCard = ({Timg="default",TLocation="India", TLocation2="India caption",TDay="26th oct to", TCaption="normal caption"}) => {
    return(
        <Container>
            <Grid container>
                <Grid md={3}>
                    <img src={Timg} />
                </Grid>
                <Grid md={9}>
                    <Typography variant="caption">{TLocation} <u style={{color:'grey'}}> View on Google Maps</u></Typography>
                    
                    <Typography variant="h5">{TLocation2}</Typography>
                    <br/>
                    <Typography variant="body1">{TDay}</Typography>
                    <Typography variant="body2">{TCaption}</Typography>
                </Grid>

            </Grid>
        </Container>
    )
}
export default TCard;