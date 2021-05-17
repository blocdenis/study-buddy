import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UserListItem.styles';
const UsersListItem = ({ userData: { average, name, attendance } }) => (
  <Wrapper>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
