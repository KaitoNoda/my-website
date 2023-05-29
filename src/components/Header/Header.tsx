import React from 'react';
import styles from "components/Header/Header.module.css"

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1>Header</h1>
        </header>
    )
}

export default Header;