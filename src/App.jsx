import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./component/Header"
import Addtask from "./component/Addtask"
import TaskList from "./component/TaskList"
import Toaster from "./component/Toaster"
import Alert from "./component/Alert"

function App() {
  return (
    <div className='container-md'>
      <Header />
      <Addtask />
      <TaskList />
      <Alert />
      <Toaster />
    </div>
  )
}

export default App
