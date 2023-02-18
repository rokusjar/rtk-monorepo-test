// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { CalculatorOsvcLib } from '@rtk-monorepo-test/calculator-osvc-lib';
import { Provider } from 'react-redux';
import { store } from './store';
import AppContent from './app-content';

export function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Kalkulačka OSVČ - samostatná obrazovka</h1>
        <AppContent />
        <h1>Komponenta kalkulačka OSVČ</h1>
        <CalculatorOsvcLib />
      </div>
    </Provider>
  );
}

export default App;
