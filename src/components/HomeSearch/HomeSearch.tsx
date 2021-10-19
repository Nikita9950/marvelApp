import React from 'react';
import Header from '../Header/Header';
import CharacterList from '../CharacterList/CharacterList';
import { RouteComponentProps } from 'react-router';
import './HomeSearch.css';
import Container from '@material-ui/core/Container';
import { Spinner } from '../Spinner/Spinner';
import { SearchBar } from '../SearchBar/SearchBar';
import { connect } from 'react-redux';
import { loadCharacters } from '../../redux/actions/charactersActions';

class Home extends React.Component<any, any> {
  constructor(props: any) {
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
      this.props.getQueryName(characterQueryName);
      this.setState({
        inputValue: characterQueryName,
      });
    } else {
      this.props.getQueryName();
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

  error() {
    if (this.props.state.error) {
      return <p className="search-error">{this.props.state.error}</p>;
    }
  }

  render(): JSX.Element {
    return (
      <Container className="container">
        <Header />
        <SearchBar value={this.state.inputValue} click={this.search} onChange={this.setAddress} />
        {this.error()}
        {this.props.state.loading ? <Spinner /> : null}
        <CharacterList items={this.props.state.characters} error={this.props.state.error} />
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    state: state.charactersReducer,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getQueryName: (characterQueryName: string) => dispatch(loadCharacters(characterQueryName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
