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
        <CalculatorOsvcLib />
      </div>
    </Provider>
  );
}

export default App;
