export default function JobList({ jobs, onJobSelect }) {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Job Listings</h2>
      <ul className="divide-y divide-gray-200">
        {jobs.map((job) => (
          <li
            key={job._id}
            onClick={() => onJobSelect(job)}
            className="p-4 hover:bg-gray-100 cursor-pointer rounded-md transition duration-200"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">{job.title}</span>
              <span className="text-sm text-gray-500">{job.location}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
