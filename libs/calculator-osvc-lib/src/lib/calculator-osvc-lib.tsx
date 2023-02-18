import { Provider } from 'react-redux';
import CalculatorOsvcContent from './calculator-osvc-content';
import styles from './calculator-osvc-lib.module.css';
import { store } from './store';

/* eslint-disable-next-line */
export interface CalculatorOsvcLibProps {}

export function CalculatorOsvcLib(props: CalculatorOsvcLibProps) {
  return (
    <Provider store={store}>
      <div className={styles['container']}>
        <h3>Komponenta kalkulačka OSVČ</h3>
        <CalculatorOsvcContent />
      </div>
    </Provider>
  );
}

export default CalculatorOsvcLib;
