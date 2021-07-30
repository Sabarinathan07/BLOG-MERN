import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
	experience: { company, title, location, curent, to, from, description },
}) => {
	return (
		<div>
			<h3 class='text-dark'>{company}</h3>
			<p>
				<Moment format='DD/MM/YYYY'>{from}</Moment> -{' '}
				{!to ? ' Now' : <Moment format='DD/MM/YYYY'>{to}</Moment>}
			</p>
			<p>
				<strong>Position: </strong>
				{title}
			</p>
			<p>
				<strong>Description: </strong>
				{description}
			</p>
		</div>
	);
};

ProfileExperience.propTypes = {
	experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
