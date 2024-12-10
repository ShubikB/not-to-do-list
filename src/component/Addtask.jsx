export default function () {
  return (
    <>
      {/* <!-- add task form row --> */}
      <div class='add-task-container row p-5 rounded '>
        <div class='col-7'>
          <input type='text' class='form-control' id='task' placeholder='Add your Task' />
        </div>
        <div class='col-2'>
          <input type='number' class='form-control' id='hour' placeholder='Hours' />
        </div>
        <div class='col-3 d-grid'>
          <button type='button' class='btn btn-success' id='addTask' onclick='addTask()'>
            Add Task
          </button>
        </div>
      </div>
    </>
  )
}
