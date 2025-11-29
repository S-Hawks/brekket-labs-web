import React from "react";
import { useLoaderData } from "react-router";
import { IoEyeOutline, IoTrashOutline } from "react-icons/io5";

const AllReviews = () => {
  const reviews = useLoaderData();
  //console.log(reviews);

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">All Reviews</h1>
        <p className="text-gray-600 mt-2">
          Total Reviews: {reviews?.length || 0}
        </p>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th className="text-center">S. NO</th>
                  <th>Reviewer</th>
                  <th>Position</th>
                  <th>Rating</th>
                  <th>Date</th>
                  <th>Posted By</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews && reviews.length > 0 ? (
                  reviews.map((review) => (
                    <tr key={review.id} className="hover">
                      <td className="text-center font-semibold">{review.id}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          {review.image ? (
                            <div className="avatar">
                              <div className="w-10 h-10 rounded-full">
                                <img src={review.image} alt={review.name} />
                              </div>
                            </div>
                          ) : (
                            <div className="avatar placeholder">
                              <div className="bg-neutral text-neutral-content rounded-full w-10">
                                <span className="text-sm">
                                  {review.name?.charAt(0).toUpperCase()}
                                </span>
                              </div>
                            </div>
                          )}
                          <div>
                            <div className="font-bold">{review.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-sm">
                          {review.position || "N/A"}
                        </span>
                      </td>
                      <td>
                        <span className="badge badge-warning text-sm font-semibold">
                          {review.rating}
                        </span>
                      </td>
                      <td>
                        <span className="text-sm">{review.date || "N/A"}</span>
                      </td>
                      <td>
                        {review.user_name ? (
                          <div>
                            <div className="font-semibold text-sm">
                              {review.user_name}
                            </div>
                            {review.user_email && (
                              <div className="text-xs text-gray-500">
                                {review.user_email}
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-sm text-gray-500">N/A</span>
                        )}
                      </td>
                      <td className="text-center">
                        <div className="flex gap-2 justify-center">
                          <button className="btn btn-ghost btn-xs" title="View">
                            <IoEyeOutline size={16} />
                          </button>
                          <button
                            className="btn btn-ghost btn-xs text-error"
                            title="Delete"
                          >
                            <IoTrashOutline size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center py-12">
                      <p className="text-xl text-gray-500">No reviews found</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Be the first to add a review!
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
