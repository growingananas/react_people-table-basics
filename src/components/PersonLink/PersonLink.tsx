import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Person } from '../../types';

interface Props {
  person: Person;
}

export const PersonLink: React.FC<Props> = ({ person }) => {
  const { slug, name, sex } = person;

  return (
    <NavLink
      to={`/people/${slug}`}
      className={classNames({ 'has-text-danger': sex === 'f' })}
    >
      {name}
    </NavLink>
  );
};