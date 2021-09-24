import React from 'react';
import './ComicsItem.css';

export interface IProps {
  title: string;
  description: string;
  images: string;
}

export function ComicsItem(props: IProps): JSX.Element {
  const { title, images, description } = props;
  return (
    <li className="comics-item">
      <img className="comics-item__image" src={images} />
      <div className="comics-item__decription">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </li>
  );
}
