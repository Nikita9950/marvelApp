import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { getCharacters } from '../../Api/Api';
// import { getCharacterById } from '../../Api/Api';

class Search extends React.Component {
  public render(): JSX.Element {
    return (
      <>
        <input type="text" name="nameCharacter" />
        <button>Search</button>
        <button>Get All Characters</button>
      </>
    );
  }
}

export default Search;

// 1011334

// class Search extends React.Component {
//   state = {
//     characters: [],
//     inputValue: '',
//   };

//   handler = (e: any) => {
//     const { value } = e.target;
//     this.setState({
//       inputValue: value,
//     });
//   };

//   startSearch = () => {
//     this.props.history.push(`/search?name=${this.state.inputValue}`);
//   };

//   public render(): JSX.Element {
//     return (
//       <>
//         <form action="">
//           <input type="text" name="nameCharacter" value={inputValue} onChange={this.handler} />
//           <button type="button" onClick={this.startSearch}>
//             search
//           </button>
//         </form>
//       </>
//     );
//   }
// }

// export default Search;
