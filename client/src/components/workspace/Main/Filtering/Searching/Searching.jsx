import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import S from './style';

const Searching = props => (
  <S.SearchContainer>
    <S.Searchbox type="text" placeholder="Search with Title..." />
    <S.Searchbutton type="submit">
      <SearchIcon />
    </S.Searchbutton>
  </S.SearchContainer>
);

export default Searching;
