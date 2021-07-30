import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
	experience: { school, degree, fieldofstudy, curent, to, from, description },
}) => {
	return (
		<div>
			<h3 class='text-dark'>{school}</h3>
			<p>
				<Moment format='DD/MM/YYYY'>{from}</Moment> -{' '}
				{!to ? ' Now' : <Moment format='DD/MM/YYYY'>{to}</Moment>}
			</p>
			<p>
				<strong>Degree: </strong>
				{degree}
			</p>
			<p>
				<strong>Field Of Study: </strong>
				{fieldofstudy}
			</p>
			<p>
				<strong>Description: </strong>
				{description}
			</p>
		</div>
	);
};

ProfileEducation.propTypes = {
	experience: PropTypes.array.isRequired,
};

export default ProfileEducation;
