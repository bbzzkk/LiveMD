import React from 'react';
import S from './style';
import Grid from '@material-ui/core/Grid';

const Body = () => 
(
  <>
    <S.col_1> 
      <Grid container spacing={1} 
            direction="column"
            justify="center"
            alignItems="center"
            >
        <Grid item >

          <S.col_1_1>
          Awesome Realtime Markdown Editor
          </S.col_1_1>
        </Grid>
        <Grid item >
          <S.col_1_2>
          Get everyone on the same page with Markdown
            {/* Communication + Collaboration = Awesome */}
          </S.col_1_2>
        </Grid>
      </Grid>
    </S.col_1>

    <S.col_2>

    </S.col_2>

    <S.col_3>

    </S.col_3>
  

  </>
);

export default Body;
