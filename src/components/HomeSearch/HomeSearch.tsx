import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import CharacterList from '../CharacterList/CharacterList';
import { useHistory, useLocation } from 'react-router';
import './HomeSearch.css';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/core/Pagination';
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

  const [currentPage, setCurrentPage] = useState(1);
  const [totalCharacter, setTotalCharacter] = useState(0);

  const getChar = (): void => {
    const characterQueryName = new URLSearchParams(location.search).get('name');
    const currentPage = new URLSearchParams(location.search).get('page');

    const offset = currentPage ? Number(currentPage) * 10 - 10 : 0;

    if (characterQueryName) {
      dispatch(loadCharacters(offset, characterQueryName));
      setInputValue((): string => {
        return (inputValue = characterQueryName);
      });
    } else {
      dispatch(loadCharacters(offset));
      setInputValue((): string => {
        return (inputValue = '');
      });
      console.log(currentPage);
    }
  };

  useEffect(() => {
    getChar();
    setTotalCharacter(100);
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

  const paginate = (page: any): any => {
    const characterQueryName = new URLSearchParams(location.search).get('name');
    setCurrentPage(page);
    if (characterQueryName) {
      history.push(page === 1 ? `/?name=${characterQueryName}` : `/?name=${characterQueryName}&page=${page}`);
    } else {
      history.push(page === 1 ? '' : `?page=${page}`);
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
      <Pagination
        onChange={(event, page) => {
          paginate(page);
        }}
        color="secondary"
        page={currentPage}
        count={Math.ceil(totalCharacter / 10)}
      />
    </Container>
  );
}

export default Home;
