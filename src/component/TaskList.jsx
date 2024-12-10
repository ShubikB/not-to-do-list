export default function TaskList() {
  return (
    <>
      {/* <!-- task list row --> */}
      <div class='row mt-5 gap-2'>
        <div class='col'>
          <div class='row'>
            <div class='col text-center'>
              <h2>Entry List</h2>
              <hr />
            </div>
          </div>

          <div class='row'>
            <table class='table border table-hover text-center'>
              <tbody id='entry-list'></tbody>
            </table>
          </div>
        </div>
        <div class='col'>
          <div class='row'>
            <div class='col text-center'>
              <h2>Bad List</h2>
              <hr />
            </div>
          </div>
          <div class='row'>
            <table class='table border table-hover text-center'>
              <tbody id='bad-list'></tbody>
            </table>
          </div>

          <div class='row'>
            <div class='alert alert-danger' role='alert'>
              You could have saved <span id='badHour'>0</span> hours
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
