import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import Container from '@material-ui/core/Container';
import './CharacterComics.css';
import { useDispatch, useSelector } from 'react-redux';
import ComicsList from '../ComicsList/ComicsList';
import { loadComics } from '../../redux/actions/comicsActions';
import { IRootState } from '../../redux/reducers/index';

interface ICharacterId {
  characterId: string;
}

function CharacterComics(): JSX.Element {
  const { comics, loading } = useSelector((state: IRootState) => state.comicsReducer);
  const dispatch = useDispatch();
  const match: ICharacterId = useParams();

  useEffect(() => {
    dispatch(loadComics(2, match.characterId));
  }, []);

  return (
    <Container className="container">
      <Header />
      <ComicsList loading={loading} comics={comics} />
    </Container>
  );
}

export default CharacterComics;
