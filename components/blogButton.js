import * as React from 'react';
import Button from '@mui/material/Button';
import styles from './blogButton.module.css';


export default function BlogButton(route) {
    console.log(route)
    return (
        <Button href={route.route} variant="outlined" className={styles.orangeButton}>Read More</Button>
    )
}
