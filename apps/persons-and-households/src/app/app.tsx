// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { CalculatorOsvcLib } from '@rtk-monorepo-test/calculator-osvc-lib';

export function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Osoby a domácnosti - samostatná obrazovka</h1>
        <CalculatorOsvcLib />
      </div>
    </Provider>
  );
}

export default App;
