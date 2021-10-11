import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import { ICharacter } from '../HomeSearch/HomeSearch';
import './CharacterList.css';

interface IProps {
  items: Array<ICharacter>;
}

function CharacterList(props: IProps): JSX.Element {
  const { items } = props;
  if (items.length) {
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
