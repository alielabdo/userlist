import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Users from './components/Users'

function App() {

  return (
    <div className='bg-gray-100 flex flex-col min-h-screen w-full'>
      <Navbar />
      <Searchbar />
      <Users />
    </div>
  )
}

export default App
