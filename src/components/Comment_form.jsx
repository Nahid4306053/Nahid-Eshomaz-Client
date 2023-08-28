import React from 'react'
import '../scss/Commentform.scss'
export default function Comment_form() {
  return (
    <form   class="p-0 mt-24 w-full  comment-2">
    <div class="col-12">
        <textarea id="text" class="form-control" placeholder="Masage" cols="30" rows="5" aria-label="With textarea">
        </textarea>
    </div> 
    <div class="mt-5 flex justify-end p-0"><button type="submit" class="btn btn-2 mt-1 py-3 px-5">Post Comment</button></div>
  </form>
  )
}
