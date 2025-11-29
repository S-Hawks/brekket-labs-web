import React, { use, useState } from "react";
import { AuthContext } from "../../../provider/AuthContext";
import { useNavigate } from "react-router";

const AddReviews = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleAddReviews = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const position = e.target.position.value;
    const image = e.target.image.value;
    const rating = e.target.rating.value;
    const review = e.target.review.value;
    const date = e.target.date.value;

    try {
      const userResponse = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user?.email }),
      });
      let userId = null;
      if (userResponse.ok) {
        const userData = await userResponse.json();
        userId = userData.user?.id;
      }
      const reviewData = {
        name,
        position,
        image,
        rating,
        review,
        date,
        user_id: userId,
      };

      const response = await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to add review");
      }
      alert("Review added successfully!");
      e.target.reset();
      navigate("/dashboard/reviews/all");
    } catch (err) {
      console.error("Error adding review:", err);
      alert(err.message || "Failed to add review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 p-4">
      <div className="card w-full max-w-3xl shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-6">
            Write a Review
          </h2>

          <form onSubmit={handleAddReviews} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Position</span>
                </label>
                <input
                  type="text"
                  name="position"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  name="image"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <select
                  name="rating"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select rating</option>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <textarea
                name="review"
                className="textarea textarea-bordered w-full"
                placeholder="Write your experience..."
                required
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control mt-4">
              <button
                className="btn btn-primary w-full"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Submitting...
                  </>
                ) : (
                  "Submit Review"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
