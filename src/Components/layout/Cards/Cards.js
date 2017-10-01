import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Cards({heading, text, tag, href, img, containerClass}) {
	const cardClass = classnames('card-img', containerClass);

	return <div className={cardClass}>
            <a href={href}>
                <div className="card-img__container">
                    <img src={img} />
                    <span className="card-img__tag">{tag}</span>
                </div>
                <h4 className="card-img__heading">{heading}</h4>
                <p  className="card-img__text">{text}</p>
            </a>
        </div>;
}

Cards.propTypes = {
	heading: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	containerClass: PropTypes.string.isRequired
};

Cards.defaultProps = {
	containerClass: ''
};
  