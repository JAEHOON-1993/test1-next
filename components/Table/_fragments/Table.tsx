import React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Table = ({ children }: Props) => {
  return <>{children}</>;
};

export default Table;
