import React from 'react';
import './ComicsItem.css';
import Grid from '@material-ui/core/Grid';

export interface IProps {
  title: string;
  description: string;
  images: string;
}

export function ComicsItem(props: IProps): JSX.Element {
  const { title, images, description } = props;
  return (
    <li className="comics-item">
      <Grid container justifyContent="space-around" spacing={1} alignItems="center">
        <img className="comics-item__image" src={images} />
        <div className="comics-item__decription">
          <p className="comics-item__title">{title}</p>
          {description ? <p>{description}</p> : <p>No description</p>}
        </div>
      </Grid>
    </li>
  );
}
