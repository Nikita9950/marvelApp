import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import './CharacterList.css';
import { ICharacter } from '../../interfaces';

interface IProps {
  items: Array<ICharacter>;
  error: null | string;
}

function CharacterList(props: IProps): JSX.Element {
  const { items, error } = props;
  if (items.length || error) {
    return (
      <ul>
        {items.map((item: ICharacter) => {
          const imgSrc = `${item.thumbnail.path}.${item.thumbnail.extension}`;
          return <CharacterItem name={item.name} imgSrc={imgSrc} key={item.id} id={item.id} />;
        })}
      </ul>
    );
  } else {
    return <p className="сharacter-list__error">Sorry, there is no such character</p>;
  }
}

export default CharacterList;
