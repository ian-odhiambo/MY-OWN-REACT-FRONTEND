import React from 'react'
import {Link} from 'react-router-dom'
import Card from "./Card"

const HomeCards = () => {
  return (
    <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            {/* first card */}
            <Card>
              <h3 className="text-2xl font-bold">For Developers</h3>
              <p className="mt-2 mb-4">
                Browse our react jobs and start your career today
              </p>
              <Link
                to="/jobs"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-amber-500"
              >
                Browse Jobs
              </Link>
            </Card>
            <Card bg="bg-indigo-500">
              <h3 className="text-2xl font-bold">For Employers</h3>
              <p className="mt-2 mb-4">
                List your job to find the perfect developer for the role
              </p>
              <Link
                to="/add-jobs"
                className="inline-block bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-800"
              >
                Add Job
              </Link>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default HomeCards