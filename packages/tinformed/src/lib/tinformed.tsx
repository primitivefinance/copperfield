import styles from './tinformed.module.css';

/* eslint-disable-next-line */
export interface TinformedProps {}

export function Tinformed(props: TinformedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Tinformed!</h1>
    </div>
  );
}

export default Tinformed;
