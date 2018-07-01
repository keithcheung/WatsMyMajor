import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import StarRatings from 'react-star-ratings';
import CartIcon from 'material-ui/svg-icons/maps/local-grocery-store';

const styles = {
	button: {
		margin: '10px auto',
		width: 150,
	},
	stars: {
		starRatedColor: '#ffcc00',
		starWidthAndHeight: '25px',
		starSpacing: '1px'
	}
};

const CourseHeader = (props) => {
	const {
		subject,
		catalogNumber,
		title,
		rating,
		termsOffered,
		addToCartHandler
	} = props;

	return (
		<div className="course-header">
			<div className="course-header-left">
				<div className="course-code">
					<h1>{subject} {catalogNumber}</h1>
					<StarRatings
						rating={rating}
						isSelectable={false}
						isAggregateRating={true}
						numOfStars={5}
						{...styles.stars}
					/>
				</div>
				<span className="title">{title}</span>
			</div>
			<div className="course-header-right">
				{termsOffered.length > 0 && (
					<span>Offered in: {termsOffered.join(', ')}</span>
				)}
				<RaisedButton
					onClick={() => addToCartHandler(subject, catalogNumber)}
					label="Add To Cart"
					backgroundColor="#a4c639"
					style={styles.button}
					icon={<CartIcon />}
				/>
			</div>
		</div>
	);
};

CourseHeader.propTypes = {
	subject: PropTypes.string.isRequired,
	catalogNumber: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	termsOffered: PropTypes.array.isRequired,
	addToCartHandler: PropTypes.func.isRequired
};

export default CourseHeader;
