import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./component/Header"
import Addtask from "./component/Addtask"
import TaskList from "./component/TaskList"
import Toaster from "./component/Toaster"
import Alert from "./component/Alert"

function App() {
  const goodList = [
    { type: "good", task: "Typing Practice", hours: 1 },
    { type: "good", task: "coding Practice", hours: 3 },
  ]
  const badList = [
    { type: "bad", task: "Watch TV", hours: 1 },
    { type: "bad", task: "Scroll Social Media", hours: 3 },
  ]

  return (
    <div className='container-md'>
      <Header />
      <Addtask />
      <TaskList goodList={goodList} badList={badList} />
      <Alert />
      <Toaster />
    </div>
  )
}

export default App
