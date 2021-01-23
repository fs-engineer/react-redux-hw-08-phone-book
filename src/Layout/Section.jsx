import propTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({ children, title }) {
  return (
    <section className={s.section}>
      {title ? <h2 className={s.title}>{title}</h2> : null}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: propTypes.string,
};
