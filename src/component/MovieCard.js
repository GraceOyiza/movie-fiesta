import PropTypes from 'prop-types';
import { imageBaseUrl } from '../helpers/constant';

const MovieCard = ({ imgUrl }) => (
  <div className=" movie-card">
    <img className="movie-img" src={`${imageBaseUrl}${imgUrl}`} alt="Card cap" />
  </div>
);

MovieCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default MovieCard;
