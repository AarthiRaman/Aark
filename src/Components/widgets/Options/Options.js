import React from 'react';
import Proptypes from 'prop-types';
import styles from './Options.scss';

export default function Options({items, heading, onSelect}) {
	return <div className={styles.aarkOptions}>
            <h2 className={styles.aarkOptionsHeading}>{heading}</h2>
            <div className={styles.aarkOptionsWrapper}>
            {
                items.map((item) => <div className={styles.aarkOptionsItemWrapper}
                                        onClick={() => onSelect( item)}>
                    {item.name}
                </div>)
            }
            </div>
        </div>; 
}

Options.propTypes = {
	heading: Proptypes.string.isRequired,
	items: Proptypes.object.isRequired,
	onSelect: Proptypes.func.isRequired
};