import React from 'react';
import Header from '../Header/Header';
import CharacterList from '../CharacterList/CharacterList';
import { RouteComponentProps } from 'react-router';
import './HomeSearch.css';
import Container from '@material-ui/core/Container';
import { Spinner } from '../Spinner/Spinner';
import { SearchBar } from '../SearchBar/SearchBar';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadCharacters } from '../../redux/actions/charactersActions';
import { ICharacter } from '../../interfaces';
import { IRootState } from '../../redux/reducers/index';

interface IHomeSearchProps extends RouteComponentProps {
  characters: Array<ICharacter>;
  loading: boolean;
  error: null | string;
  loadCharacters: (characterQueryName?: string) => void;
}

interface IHomeSearchState {
  inputValue: string;
}

class Home extends React.Component<IHomeSearchProps, IHomeSearchState> {
  constructor(props: IHomeSearchProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.setAddress = this.setAddress.bind(this);
    this.search = this.search.bind(this);
  }

  getChar(): void {
    const characterQueryName = new URLSearchParams(this.props.location.search).get('name');
    if (characterQueryName) {
      this.props.loadCharacters(characterQueryName);
      this.setState({
        inputValue: characterQueryName,
      });
    } else {
      this.props.loadCharacters();
      this.setState({
        inputValue: '',
      });
    }
  }

  componentDidMount(): void {
    this.getChar();
  }

  componentDidUpdate(prevProps: RouteComponentProps): void {
    if (this.props.location !== prevProps.location) {
      this.getChar();
    }
  }

  setAddress(event: React.SyntheticEvent): void {
    const { value } = event.target as HTMLInputElement;
    this.setState({
      inputValue: value,
    });
  }

  search(): void {
    if (this.state.inputValue) {
      this.props.history.push(`?name=${this.state.inputValue}`);
    } else {
      this.props.history.push('/');
    }
  }

  displayError() {
    if (this.props.error) {
      return <p className="search-error">{this.props.error}</p>;
    }
  }

  render(): JSX.Element {
    const { characters, loading, error } = this.props;

    return (
      <Container className="container">
        <Header />
        <SearchBar value={this.state.inputValue} click={this.search} onChange={this.setAddress} />
        {this.displayError()}
        {loading ? <Spinner /> : null}
        <CharacterList items={characters} error={error} />
      </Container>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    characters: state.charactersReducer.characters,
    loading: state.charactersReducer.loading,
    error: state.charactersReducer.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadCharacters: (characterQueryName: string) => dispatch(loadCharacters(characterQueryName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home as any);
