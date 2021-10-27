import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import CharacterList from '../CharacterList/CharacterList';
import { useHistory, useLocation } from 'react-router';
import './HomeSearch.css';
import Container from '@material-ui/core/Container';
import { Spinner } from '../Spinner/Spinner';
import { SearchBar } from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { loadCharacters } from '../../redux/actions/charactersActions';
import { IRootState } from '../../redux/reducers/index';

interface IValue {
  val: string;
}

function Home(): JSX.Element {
  const [inputValue, setInputValue] = useState({
    val: '',
  });
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { characters, loading, error } = useSelector((state: IRootState) => state.charactersReducer);

  function getChar(): void {
    const characterQueryName = new URLSearchParams(location.search).get('name');
    if (characterQueryName) {
      dispatch(loadCharacters(characterQueryName));
      setInputValue((prev): IValue => {
        return {
          ...prev,
          val: characterQueryName,
        };
      });
    } else {
      dispatch(loadCharacters());
      setInputValue((prev): IValue => {
        return {
          ...prev,
          val: '',
        };
      });
    }
  }

  useEffect(() => {
    getChar();
  }, [location.search]);

  function setAddress(event: React.SyntheticEvent): void {
    const { value } = event.target as HTMLInputElement;

    setInputValue((prev): IValue => {
      return {
        ...prev,
        val: value,
      };
    });
  }

  function search(): void {
    if (inputValue.val) {
      history.push(`?name=${inputValue.val}`);
    } else {
      history.push('/');
    }
  }

  function displayError() {
    if (error) {
      return <p className="search-error">{error}</p>;
    }
  }

  return (
    <Container className="container">
      <Header />
      <SearchBar value={inputValue.val} click={search} onChange={setAddress} />
      {displayError()}
      {loading ? <Spinner /> : null}
      <CharacterList items={characters} error={error} />
    </Container>
  );
}

export default Home;
