import CalculatorOsvcContent from './calculator-osvc-content';
import styles from './calculator-osvc-lib.module.css';

/* eslint-disable-next-line */
export interface CalculatorOsvcLibProps {}

export function CalculatorOsvcLib(props: CalculatorOsvcLibProps) {
  // Nemá vlastní Provider a očekává že bude obalena providerem v rámci aplikace, která ji použije
  // Pouze vystavuje vlastní api slice (createApi)

  return (
    <div className={styles['container']}>
      <h3>Komponenta kalkulačka OSVČ</h3>
      <CalculatorOsvcContent />
    </div>
  );
}

export default CalculatorOsvcLib;
