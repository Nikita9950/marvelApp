import React from 'react';
import Header from '../Header/Header';
import { getCharacter } from '../../api/api';
import CharacterList from '../CharacterList/CharacterList';
import { RouteComponentProps } from 'react-router';
import './HomeSearch.css';
import Container from '@material-ui/core/Container';
import { Spinner } from '../Spinner/Spinner';
import { SearchBar } from '../SearchBar/SearchBar';

export interface ICharacter {
  id: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

interface IHomeSearchState {
  inputValue: string;
  items: Array<ICharacter>;
  loading: boolean;
}

class Home extends React.Component<RouteComponentProps, IHomeSearchState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      inputValue: '',
      items: [],
      loading: true,
    };
    this.setAddress = this.setAddress.bind(this);
    this.search = this.search.bind(this);
  }

  getChar(): void {
    const characterQueryName = new URLSearchParams(this.props.location.search).get('name');
    if (characterQueryName) {
      getCharacter(characterQueryName).then((res) => {
        this.setState({
          items: res.data.data.results,
          inputValue: characterQueryName,
          loading: false,
        });
      });
    } else {
      getCharacter().then((res) => {
        this.setState({
          items: res.data.data.results,
          inputValue: '',
          loading: false,
        });
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
    if (this.state.inputValue !== '') {
      this.props.history.push(`?name=${this.state.inputValue}`);
    } else {
      this.props.history.push('/');
    }
  }

  render(): JSX.Element {
    const spinner = this.state.loading ? <Spinner /> : null;
    const content = !this.state.loading ? <CharacterList items={this.state.items} /> : null;
    return (
      <Container className="container">
        <Header />
        <SearchBar value={this.state.inputValue} click={this.search} onChange={this.setAddress} />
        {spinner}
        {content}
      </Container>
    );
  }
}

export default Home;
