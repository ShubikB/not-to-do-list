import { useState } from "react"
import "../App.css"

export default function TaskList({ goodList, badList }) {
  console.log(`The good list is ${goodList}`) //undefined
  console.log(`The bad list is ${badList}`) //undefined
  return (
    <>
      {/* <!-- task list row --> */}
      <div className='row mt-5 gap-2'>
        <div className='col'>
          <div className='row'>
            <div className='col text-center'>
              <h2>Entry List</h2>
              <hr />
            </div>
          </div>

          <div className='row'>
            <table className='table table-striped text-center'>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Task</th>
                  <th>Hours</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody id='entry-list'>
                {goodList.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.task}</td>
                    <td>{item.hours}</td>
                    <td>
                      <button type='button' className='btn btn-danger mx-2'>
                        Delete
                      </button>
                      <button type='button' className=' btn btn-warning mx-2'>
                        Move
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='col'>
          <div className='row'>
            <div className='col text-center'>
              <h2>Bad List</h2>
              <hr />
            </div>
          </div>
          <div className='row'>
            <table className='table border table-hover text-center'>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Task</th>
                  <th>Hours</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id='bad-list'>
                {badList.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.task}</td>
                    <td>{item.hours}</td>
                    <td>
                      <button type='button' className='btn btn-danger mx-2'>
                        Delete
                      </button>
                      <button type='button' className=' btn btn-warning mx-2'>
                        Move
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='row'>
            <div className='alert alert-danger' role='alert'>
              You could have saved <span id='badHour'>0</span> hours
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
