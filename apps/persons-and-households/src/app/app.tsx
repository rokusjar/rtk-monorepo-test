// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { CalculatorOsvcLib } from '@rtk-monorepo-test/calculator-osvc-lib';

export function App() {
  return (
    <div>
      <h1>Osoby a domácnosti - samostatná obrazovka</h1>
      <CalculatorOsvcLib />
    </div>
  );
}

export default App;
