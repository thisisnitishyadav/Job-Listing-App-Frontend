export default function JobDetails({ job }) {
  if (!job) {
    return (
      <div className="p-4 text-center text-gray-500 border rounded-md shadow-md">
        Select a job to view details
      </div>
    );
  }

  return (
    <div className="p-6 bg-white ">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{job.title || "N/A"}</h1>
          <p className="text-gray-600 text-base">{job.company || "N/A"}</p>
          <p className="text-gray-600 text-base">{job.location || "N/A"}</p>
        </div>
        {job.companyImageUrl && (
          <div className="mt-4 sm:mt-0">
            <img
              src={job.companyImageUrl}
              alt={`${job.company || "Company"} Logo`}
              className="w-24 h-24 object-contain"
            />
          </div>
        )}
      </div>

      {/* Quick Apply Button */}
      <div className="mb-4">
        <a
          href={job.jobLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block sm:inline-block bg-gradient-to-r from-rose-500 to-pink-500
          text-white font-medium px-4 py-2 rounded-3xl shadow hover:bg-pink-600 transition text-center"
        >
          Quick Apply
        </a>
      </div>

      <hr className="border-gray-200 mb-4" />

      {/* Job Details Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Job Details</h2>
        <div className="space-y-1 text-gray-600">
          <p>
            <span className="inline-block w-24 font-medium">Type:</span> {job.employmentType || "N/A"}
          </p>
          <p>
            <span className="inline-block w-24 font-medium">Posted:</span>{" "}
            {job.postedDateTime
              ? `${Math.ceil((Date.now() - new Date(job.postedDateTime)) / (1000 * 60 * 60 * 24))} days ago`
              : "N/A"}
          </p>
          <p>
            <span className="inline-block w-24 font-medium">Pay:</span> {job.pay || "N/A"}
          </p>
        </div>
      </div>

      {/* Qualifications Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Qualifications</h2>
        <div className="flex flex-wrap gap-2">
          {job.qualifications?.length > 0 ? (
            job.qualifications.map((qual, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full"
              >
                {qual}
              </span>
            ))
          ) : (
            <p className="text-gray-600">No qualifications listed</p>
          )}
        </div>
      </div>

      {/* Job Description Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Full Job Description</h2>
        <p className="text-gray-600 leading-relaxed">{job.description || "No description provided"}</p>
      </div>

      {/* Company Profile Button */}
      {job.companyUrl && (
        <div className="mt-4">
          <a
            href={job.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block sm:inline-block bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition text-center"
          >
          Visit Company Profile
          </a>
        </div>
      )}
    </div>
  );
}
