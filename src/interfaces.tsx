export interface ICharacter {
  id: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

export interface IComics {
  title: string;
  id: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}