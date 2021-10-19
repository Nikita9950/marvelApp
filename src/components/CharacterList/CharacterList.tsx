import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import './CharacterList.css';

// interface IProps {
//   items: Array<ICharacter>;
//   error: unknown;
// }

function CharacterList(props: any): JSX.Element {
  const { items, error } = props;
  if (items.length !== 0 || error) {
    return (
      <ul>
        {items.map((item: any) => {
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
