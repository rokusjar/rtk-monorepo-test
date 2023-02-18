import styles from './calculator-osvc-lib.module.css';

/* eslint-disable-next-line */
export interface CalculatorOsvcLibProps {}

export function CalculatorOsvcLib(props: CalculatorOsvcLibProps) {
  return (
    <div className={styles['container']}>
      <p>Komponenta kalkulačka OSVČ</p>
    </div>
  );
}

export default CalculatorOsvcLib;
