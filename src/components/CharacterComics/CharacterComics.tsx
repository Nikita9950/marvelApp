import React from 'react';
import { RouteComponentProps } from 'react-router';
import Header from '../Header/Header';
import Container from '@material-ui/core/Container';
import './CharacterComics.css';
import { connect } from 'react-redux';
import ComicsList from '../ComicsList/ComicsList';
import { loadComics } from '../../redux/actions/comicsActions';
import { IComics } from '../../interfaces';
import { IRootState } from '../../redux/reducers/index';
import { Dispatch } from 'redux';

interface ICharacterId {
  characterId: string;
}

interface ICharacterComicsProps extends RouteComponentProps<ICharacterId> {
  comics: Array<IComics>;
  loading: boolean;
  error: null | string;
  getId: (characterId: string) => void;
}

interface ICharacterComicsState {
  characterId: string;
}

class CharacterComics extends React.Component<ICharacterComicsProps, ICharacterComicsState> {
  constructor(props: ICharacterComicsProps) {
    super(props);
  }

  componentDidMount(): void {
    this.props.getId(this.props.match.params.characterId);
  }

  render(): JSX.Element {
    const { comics, loading } = this.props;

    return (
      <Container className="container">
        <Header />
        <ComicsList loading={loading} comics={comics} />
      </Container>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    comics: state.comicsReducer.comics,
    loading: state.comicsReducer.loading,
    error: state.comicsReducer.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getId: (characterId: string) => dispatch(loadComics(characterId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterComics);
