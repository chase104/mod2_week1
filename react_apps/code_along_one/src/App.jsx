import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>First React App!</h1>
      <Sidebar />
      <nav>
        <span>Home</span>
        <span>About</span>
        <span>Counter</span>
        <span>New Profile</span>
      </nav>
      <Counter count={count} />
    </>
  )
}

export default App
