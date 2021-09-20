import React from 'react';

export interface IComicsItem {
  name: string;
}

function ComicsItem(props: any): JSX.Element {
  const { comicsName } = props;
  return (
    <li>
      <p>{comicsName}</p>
    </li>
  );
}

export default ComicsItem;
