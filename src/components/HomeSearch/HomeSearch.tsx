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

function Home(): JSX.Element {
  let [inputValue, setInputValue] = useState('');
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { characters, loading, error } = useSelector((state: IRootState) => state.charactersReducer);

  const getChar = (): void => {
    const characterQueryName = new URLSearchParams(location.search).get('name');
    if (characterQueryName) {
      dispatch(loadCharacters(characterQueryName));
      setInputValue((): string => {
        return (inputValue = characterQueryName);
      });
    } else {
      dispatch(loadCharacters(null));
      setInputValue((): string => {
        return (inputValue = '');
      });
    }
  };

  useEffect(() => {
    getChar();
  }, [location.search]);

  const setAddress = (event: React.SyntheticEvent): void => {
    const { value } = event.target as HTMLInputElement;

    setInputValue((): string => {
      return (inputValue = value);
    });
  };

  const search = (): void => {
    if (inputValue) {
      history.push(`?name=${inputValue}`);
    } else {
      history.push('/');
    }
  };

  const displayError = () => {
    return <p className="search-error">{error}</p>;
  };

  return (
    <Container className="container">
      <Header />
      <SearchBar value={inputValue} click={search} onChange={setAddress} />
      {error ? displayError() : null}
      {loading ? <Spinner /> : null}
      <CharacterList items={characters} error={error} />
    </Container>
  );
}

export default Home;
