import React from 'react';
import { getCharacterById } from '../../Api/Api';
import ComicsItem from '../ComicsItem/ComicsItem';
import { RouteComponentProps } from 'react-router';
import { IComicsItem } from '../ComicsItem/ComicsItem';

interface ICharacterComicsState {
  characterId: string;
  characterComics: Array<IComicsItem>;
  characterName: string;
}

interface IRouteParams {
  characterId: string;
}

class CharacterComics extends React.Component<RouteComponentProps, ICharacterComicsState> {
  constructor(props: RouteComponentProps<IRouteParams>) {
    super(props);
    this.state = {
      characterId: props.match.params.characterId,
      characterComics: [],
      characterName: '',
    };
  }

  componentDidMount(): void {
    getCharacterById(this.state.characterId).then((res) => {
      this.setState({
        characterComics: res.data.data.results[0].comics.items,
        characterName: res.data.data.results[0].name,
      });
    });
  }

  render(): JSX.Element {
    const { characterComics, characterName } = this.state;
    console.log(characterComics);

    return (
      <>
        <h1>{characterName}</h1>
        <div>hero comics:</div>
        <ul>
          {characterComics.map((item: IComicsItem) => {
            return <ComicsItem key={item.name} comicsName={item.name} />;
          })}
        </ul>
      </>
    );
  }
}

export default CharacterComics;
