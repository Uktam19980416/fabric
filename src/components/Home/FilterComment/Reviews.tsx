import { FC } from 'react'
import { Stars } from './Stars'

export const Reviews: FC = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex flex-col gap-5">
        <h4 className="text-3xl font-bold">Reviews</h4>
        <p className="text-slate-500">There are no reviews yet.</p>
        <div>
          <p className="font-bold">Be the first to review “Evening Garden”</p>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="flex items-center gap-5">
            <p className="font-bold">Your mark *</p>
            <Stars rating={0} />
          </div>
        </div>
      </div>

      <form>
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex items-center gap-5">
            <div className="w-full">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                className="w-full border-2 border-slate-200 rounded-lg p-2 bg-stone-200"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                className="w-full border-2 border-slate-200 rounded-lg p-2 bg-stone-200"
              />
            </div>
          </div>
          <div>
            <label htmlFor="comment">Your feedback *</label>
            <textarea
              id="comment"
              className="w-full border-2 border-slate-200 rounded-lg p-2 bg-stone-200"
              rows={5}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="w-fit px-10 py-2 bg-orange-600 text-slate-50 rounded-full">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
