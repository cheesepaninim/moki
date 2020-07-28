import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { selectList, getUsers } from '../../../features/users/usersSlice';
import styles from './Users.module.css';

function User({ ...user }) {
    return (
        <div>
            <b>
                {user.id} : {user.employee_name}
            </b>{' '}
            <span>{user.employee_salary}</span> <span>{user.employee_age}</span>{' '}
            <span>{user.profile_image}</span>
        </div>
    );
}

function Users() {
    const list = useSelector(selectList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }); // todo 왜 dependency dispatch 를 넣어야 하는지 ???... lint에서 넣으라고함..

    return (
        <div className={styles.wrapper}>
            {list.map((user) => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}

User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        employee_name: PropTypes.string,
        employee_salary: PropTypes.string,
        employee_age: PropTypes.string,
        profile_image: PropTypes.string,
    }),
};

User.defaultProps = {
    user: {
        id: '0',
        employee_name: '',
        employee_salary: '',
        employee_age: '',
        profile_image: '',
    },
};

export default Users;
