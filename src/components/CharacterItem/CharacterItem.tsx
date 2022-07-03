import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterItem.css';
import Grid from '@material-ui/core/Grid';

interface IProps {
  name: string;
  imgSrc: string;
  id: string;
}

function CharacterItem(props: IProps): JSX.Element {
  const { name, imgSrc, id } = props;

  function scrollToTop(): void {
    window.scroll({
      top: 0,
    });
  }

  return (
    <li className="character-item">
      <Grid container justifyContent="space-around" spacing={1} alignItems="center">
        <img className="character-item__img" src={imgSrc} alt={name} />
        <div className="character-item__description">
          <p className="character-item__char-name">{name}</p>
        </div>
        <Link onClick={scrollToTop} className="character-item__link" to={`/comics/${id}`}>
          see more
        </Link>
      </Grid>
    </li>
  );
}

export default CharacterItem;
