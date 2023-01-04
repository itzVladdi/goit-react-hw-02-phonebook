import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ filter, handleChange }) {
  return (
    <div className={css.wrapper}>
      <label htmlFor="Find">Find contacts by name</label>
      <input
        value={filter}
        id="Find"
        type="text"
        name="filter"
        onChange={event => handleChange(event)}
      />
    </div>
  );
}
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
