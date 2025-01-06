import React from "react";

function BookCard({ title, author, status, publishedYear, isAdmin = false, handleaction }) {
  return (
    <div className="book-card h-[40vh] md:h-[27vh] m-8 relative  w-full bg-white shadow-md rounded-lg p-4 md:max-w-md flex flex-col gap-4 hover:shadow-lg transition-all duration-200">
      {/* Title */}
      <div className="title text-xl font-bold text-gray-800">{title}</div>

      {/* Author */}
      <div className="author text-md text-gray-600">
        <span className="font-semibold text-gray-700">Author:</span> {author}
      </div>

      {/* Published Year */}
      <div className="published-year text-md text-gray-600">
        <span className="font-semibold text-gray-700">Published Year:</span> {publishedYear}
      </div>

      {/* Status */}
      <div className="status text-md">
        <span
          className={`px-2 py-1 rounded-md text-sm ${
            status === "available"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Admin Edit Button */}
      {isAdmin && (
        <button
          onClick={handleaction}
          className="edit-button absolute bottom-8 right-4 bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        >
          Edit
        </button>
      )}

      {/* Status Dot */}
      <div
        className={`absolute bottom-2 right-4 w-4 h-4 rounded-full ${
          status === "available" ? "bg-green-500" : "bg-yellow-700"
        }`}
      ></div>
    </div>
  );
}

export default BookCard;
