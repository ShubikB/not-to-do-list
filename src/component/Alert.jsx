export default function Alert() {
  return (
    <>
      <div className='row'>
        <div className='col'>
          <div className='alert alert-success' role='alert'>
            Total Hours Allocated = <span id='totalHours'>0</span> hours
          </div>
        </div>
      </div>
    </>
  )
}
