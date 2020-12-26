import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import OneForm from './OneForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import EditForm from './EditForm'


const useStyles = makeStyles((theme)=>
    ({
        root: {
        },
        media: {
          height: 140,
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
            width: '100%'
          },
      })
);


function Forms(props) {
    const classes = useStyles();

    const [user, setUser] = React.useState({})
    const [forms, setForms] = React.useState([])
    const [loadingForms, setLoadingForms] = React.useState(true);

    React.useEffect(()=>{ 
        setLoadingForms(false)
    }, [])

    return (
       <>
            {loadingForms ? (<CircularProgress />):""}
            <Container className={classes.cardGrid} maxWidth="lg">
              <Grid container xs={12} sm={12} >
                  <EditForm formData={{_id: "1", name: "test", description: "tested form", updatedAt: "20-12-2020"}}/>          
              </Grid>
            </Container>
    </>
    );
}

export default Forms;
