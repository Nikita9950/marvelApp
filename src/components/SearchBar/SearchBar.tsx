import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

interface ISearchBarProps {
  value: string;
  click: (event: React.MouseEvent<HTMLElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar(props: ISearchBarProps): JSX.Element {
  return (
    <Grid container spacing={3} justifyContent="center" className="home-searh-bar">
      <TextField
        onChange={props.onChange}
        value={props.value}
        type="text"
        name="nameCharacter"
        size="small"
        label="search a character"
        className="text-field"
        id="filled-basic"
        variant="filled"
      />
      <button className="search-button" onClick={props.click}>
        Search
      </button>
    </Grid>
  );
}
