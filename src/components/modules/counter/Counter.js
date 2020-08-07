import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
    selectIsProgress,
} from '../../../features/counter/counterSlice';
import styles from './Counter.module.css';
import Button from '../../atoms/common/Button';
import Progress from '../../atoms/common/Progress';
import Liked from '../../atoms/Liked';
import Linked from '../../atoms/Linked';

function Counter() {
    const count = useSelector(selectCount);
    const isProgress = useSelector(selectIsProgress);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <div className={styles.row}>
                <Button
                    type="icon"
                    color="primary"
                    size="medium"
                    icon="add"
                    onClick={() => dispatch(increment())}
                />
                <span className={styles.value}>{count}</span>
                <Button
                    type="icon"
                    color="primary"
                    size="medium"
                    icon="remove"
                    onClick={() => dispatch(decrement())}
                />
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <Button
                    type="iconLabel"
                    variant="contained"
                    color="primary"
                    size="large"
                    icon="add"
                    iconLocation="start"
                    label="Add Amount"
                    onClick={() =>
                        dispatch(
                            incrementByAmount(Number(incrementAmount) || 0)
                        )
                    }
                />
                <Button
                    type="text"
                    variant="contained"
                    color="primary"
                    size="large"
                    label="Add Async"
                    onClick={() =>
                        dispatch(incrementAsync(Number(incrementAmount) || 0))
                    }
                />
                {isProgress && <Progress type="circular" color="Primary" />}
            </div>
            <div className={styles.row}>
                <Liked color="inherit" count={100000} isLiked />
            </div>
            <div className={styles.row}>
                <Linked color="inherit" count={100000} isLinked />
            </div>
        </div>
    );
}

export default Counter;
