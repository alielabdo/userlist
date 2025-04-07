import Button from "./Button"
import moon from '../../assets/moon.png'

const Navbar = () => {
  return (
    <div className="flex justify-between bg-primary w-full p-3 items-center">
      <h1 className="text-white text-lg">User Management</h1>
      <div className="flex gap-3">
        <Button color="primary" bgColor="white" size="md">
          Create User
        </Button>
        <Button color="white" bgColor="red-500" size="md">
          Logout
        </Button>
        <img src={moon} alt="dark mode" style={{width: '40px' , height:'40px'}}/>
      </div>
    </div>
  )
}

export default Navbar