export default function Toaster() {
  return (
    <>
      <div class='toast-container position-fixed bottom-0 end-0 p-3'>
        <div id='liveToast' class='toast' role='alert' aria-live='assertive' aria-atomic='true'>
          <div class='toast-header'>
            <img src='..' class='rounded me-2' alt='...' />
            <strong class='me-auto'>TASK</strong>

            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='toast'
              aria-label='Close'
            ></button>
          </div>
          <div class='toast-body'>TASK ADDED</div>
        </div>
      </div>
    </>
  )
}
