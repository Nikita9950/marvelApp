import React from 'react';
// import { RouteComponentProps } from 'react-router';
import Header from '../Header/Header';
import Container from '@material-ui/core/Container';
import './CharacterComics.css';
import { connect } from 'react-redux';
import ComicsList from '../ComicsList/ComicsList';
import { loadComics } from '../../redux/actions/comicsActions';

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
}


class CharacterComics extends React.Component<any, ICharacterComicsState> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount(): void {
    this.props.getId(this.props.match.params.characterId);
  }

  render(): JSX.Element {
    return (
      <Container className="container">
        <Header />
        <ComicsList loading={this.props.state.loading} comics={this.props.state.comics} />
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    state: state.comicsReducer,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getId: (characterId: any) => dispatch(loadComics(characterId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterComics);
