import css from './App.module.css';
import TaskForm from './components/Form/Form';
function App() {
  return (
    <div className={css.page}>
      <div className={css.backPlate}>
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
