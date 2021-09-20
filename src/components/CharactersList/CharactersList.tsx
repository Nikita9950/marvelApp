import React from 'react';
import getCharacters from '../../Api/Api';
import CharacterItem from '../CharacterItem/CharacterItem';

interface IState {
  items: [];
}

class CharactersList extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount(): void {
    getCharacters('nameStartsWith=iron').then((res) => {
      this.setState({
        items: res.data.data.results,
      });
    });
  }

  render(): JSX.Element {
    return (
      <>
        <ul>
          {this.state.items.map((item: any) => {
            const imgSrc = `${item.thumbnail.path}.${item.thumbnail.extension}`;
            return (
              <CharacterItem
                name={item.name}
                imgSrc={imgSrc}
                description={item.description}
                key={item.id}
                id={item.id}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default CharactersList;
