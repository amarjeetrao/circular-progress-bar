import ProgressBar from './components/progress/progressBar'
import './App.css';

function App() {
	return (
		<div className='App'>
			<ProgressBar
				progress={20}
				size={225}
				strokeWidth={12}
				strokeOffset={0}
				strokeStyle='round'
				circleBgStroke='white'
				circleStroke='#0ebffd'
			/>
		</div>
	);
}

export default App;
