import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterItem.css';

interface IProps {
  name: string;
  imgSrc: string;
  id: string;
} 

function CharacterItem(props: IProps): JSX.Element {
  const { name, imgSrc, id } = props;

  return (
    <li className="character-item">
      <img className="character-item__img" src={imgSrc} alt={name} />
      <div className="character-item__decription">
        <p>{name}</p>
      </div>
      <Link to={`/comics/${id}`}>see more</Link>
    </li>
  );
}

export default CharacterItem;
