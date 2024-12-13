export default function () {
  const addTask = () => {
    console.log("add task function called")
  }
  return (
    <>
      {/* <!-- add task form row --> */}
      <div className='add-task-container row p-5 rounded '>
        <div className='col-7'>
          <input type='text' className='form-control' id='task' placeholder='Add your Task' />
        </div>
        <div className='col-2'>
          <input type='number' className='form-control' id='hour' placeholder='Hours' />
        </div>
        <div className='col-3 d-grid'>
          <button type='button' className='btn btn-success' id='addTask' onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
    </>
  )
}
