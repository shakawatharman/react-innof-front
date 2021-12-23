import { Box, Container, Grid, Typography } from '@material-ui/core';
import React, {useState,useEffect} from 'react';
import { useStyles } from './SectionTeamStyle';

const SectionTeam = () => {

    const classes = useStyles();

    const [ teamMember, setTeamMember ] = useState([]);

    useEffect(()=>{
        const URL = `https://powerful-peak-13797.herokuapp.com/team-members`;
        fetch(URL)
            .then(res=>res.json())
            .then(data=>setTeamMember(data))
        },[])

    return (
        <Box className={classes.sectionTeam}>
            <Container>
                <Typography variant='h6'>Meet our team</Typography>
                <Typography className={classes.sectionHeading} variant='h3'>Our Team Member</Typography>

                <Grid container spacing={3}>
                    {
                        teamMember.map(team => 
                            <Grid key={team._id} item xs={12} sm={6} md={4}>
                                <img className={classes.teamImg} src={team.image} alt="team photo" />
                                <Typography variant='h6'>{team.name}</Typography>
                                <Typography variant='body1'>{team.profession}</Typography>
                            </Grid> 
                        )

                    }
                </Grid>
            </Container>

        </Box>
    );
};

export default SectionTeam;