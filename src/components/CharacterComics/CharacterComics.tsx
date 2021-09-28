import React from 'react';
import { getComicsByCharacter } from '../../api/api';
import { RouteComponentProps } from 'react-router';
import Header from '../Header/Header';
import Container from '@material-ui/core/Container';
import './CharacterComics.css';
import ComicsList from '../ComicsList/ComicsList';

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
  loading: boolean;
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
      loading: true,
    };
  }

  componentDidMount(): void {
    getComicsByCharacter(this.state.characterId).then((res) => {
      this.setState({
        comics: res.data.data.results,
        loading: false,
      });
    });
  }

  render(): JSX.Element {
    return (
      <Container className="container">
        <Header />
        <ComicsList loading={this.state.loading} comics={this.state.comics} />
      </Container>
    );
  }
}

export default CharacterComics;
