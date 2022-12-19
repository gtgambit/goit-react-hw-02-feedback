import PropTypes from 'prop-types';
import css from './Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={css.Title}>{title}</h1>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
