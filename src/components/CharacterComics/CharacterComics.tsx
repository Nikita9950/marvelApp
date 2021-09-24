import React from 'react';
import { getComicsByCharacter } from '../../api/api';
import { RouteComponentProps } from 'react-router';
import { ComicsItem } from '../ComicsItem/ComicsItem';

export interface IComics {
  title: string;
  id: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface ICharacterComicsState {
  characterId: string;
  comics: Array<IComics>;
}

interface MatchParams {
  characterId: string;
}

class CharacterComics extends React.Component<
  RouteComponentProps<MatchParams>,
  ICharacterComicsState
> {
  constructor(props: RouteComponentProps<MatchParams>) {
    super(props);
    this.state = {
      characterId: props.match.params.characterId,
      comics: [],
    };
  }

  componentDidMount(): void {
    getComicsByCharacter(this.state.characterId).then((res) => {
      this.setState({
        comics: res.data.data.results,
      });
    });
  }

  render(): JSX.Element {
    const { comics } = this.state;

    return (
      <>
        <div>hero comics:</div>
        <ul>
          {comics.map((item: IComics) => {
            const imgSrc = `${item.thumbnail.path}.${item.thumbnail.extension}`;
            return (
              <ComicsItem
                title={item.title}
                images={imgSrc}
                key={item.id}
                description={item.description}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default CharacterComics;
