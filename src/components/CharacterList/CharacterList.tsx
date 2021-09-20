import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import { ICharacter } from '../HomeSearch/HomeSearch';

interface IProps {
  items: Array<ICharacter>;
}

function CharactersList(props: IProps): JSX.Element {
  const { items } = props;
  return (
    <ul>
      {items.map((item: ICharacter) => {
        const imgSrc = `${item.thumbnail.path}.${item.thumbnail.extension}`;
        return <CharacterItem name={item.name} imgSrc={imgSrc} key={item.id} id={item.id} />;
      })}
    </ul>
  );
}

export default CharactersList;
