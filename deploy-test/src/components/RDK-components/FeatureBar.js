import * as React from 'react';
import Grid from '@mui/material/Grid';

import LanguageIcon from '@mui/icons-material/Language';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TvIcon from '@mui/icons-material/Tv';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Icon from '@mui/material/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'orange',
  //...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#fff',
}));
const WrappedIcon = (props) => <Icon {...props} />;


export default function FeatureBar({userIcon, featureText}){
  return(
  <Grid container spacing={1}>
    <Grid item xs={1} md={2}>
      <Item>
      <FontAwesomeIcon icon={solid('globe')} size="3x" />
      </Item>
    </Grid>
      <Grid item xs={11} md={8}>
      <Typography children={featureText}></Typography>
      </Grid>
  </Grid>
);
}
