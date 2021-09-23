import React from 'react';
import Header from '../Header/Header';
import { getCharacter } from '../../Api/Api';
import CharacterList from '../CharacterList/CharacterList';
import { RouteComponentProps } from 'react-router';

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
}

class Home extends React.Component<RouteComponentProps, IHomeSearchState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      inputValue: '',
      items: [],
    };
    this.setAddress = this.setAddress.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount(): void {
    const characterQueryName = new URLSearchParams(this.props.location.search).get('name');
    if (characterQueryName !== null && characterQueryName !== '') {
      getCharacter(`nameStartsWith=${characterQueryName}`).then((res) => {
        this.setState({
          items: res.data.data.results,
          inputValue: characterQueryName,
        });
      });
    } else {
      getCharacter('limit=5').then((res) => {
        this.setState({
          items: res.data.data.results,
        });
      });
    }
  }

  componentDidUpdate(prevProps: RouteComponentProps): void {
    if (this.props.location !== prevProps.location) {
      const characterQueryName = new URLSearchParams(this.props.location.search).get('name');
      if (characterQueryName !== null && characterQueryName !== '') {
        getCharacter(`limit=5&nameStartsWith=${characterQueryName}`).then((res) => {
          this.setState({
            items: res.data.data.results,
            inputValue: characterQueryName,
          });
        });
      } else {
        getCharacter('limit=5').then((res) => {
          this.setState({
            items: res.data.data.results,
            inputValue: '',
          });
        });
      }
    }
    console.log(this.state.items);
  }

  setAddress(e: React.SyntheticEvent): void {
    const { value } = e.target as HTMLInputElement;
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
    return (
      <>
        <Header />
        <input
          onChange={this.setAddress}
          value={this.state.inputValue}
          type="text"
          name="nameCharacter"
        />
        <button onClick={this.search}>Search</button>
        <CharacterList items={this.state.items} />
      </>
    );
  }
}

export default Home;
