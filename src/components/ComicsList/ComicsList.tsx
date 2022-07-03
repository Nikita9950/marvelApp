import React from 'react';
import './ComicsList.css';
import { Spinner } from '../Spinner/Spinner';
import { ComicsItem } from '../ComicsItem/ComicsItem';
import { IComics } from '../../interfaces';

interface IProps {
  loading: boolean;
  comics: Array<IComics>;
}

function ComicsList(props: IProps): JSX.Element {
  function getComicsList(): JSX.Element {
    const { comics } = props;
    if (comics.length) {
      return (
        <>
          <div className="сharacter-сomics__title">Hero comics:</div>
          <ul>
            {comics.map((item: IComics) => {
              const imgSrc = `${item.thumbnail.path}.${item.thumbnail.extension}`;

              return <ComicsItem title={item.title} images={imgSrc} key={item.id} description={item.description} />;
            })}
          </ul>
        </>
      );
    } else {
      return <p className="сharacter-сomics__error">Sorry, but this character is not in the comics</p>;
    }
  }
  const { loading } = props;
  return <>{loading ? <Spinner /> : getComicsList()}</>;
}

export default ComicsList;
