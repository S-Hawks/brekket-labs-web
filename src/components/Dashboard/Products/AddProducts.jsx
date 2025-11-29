import React, { use, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../provider/AuthContext";

const AddProducts = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [features, setFeatures] = useState([""]);
  const [technologies, setTechnologies] = useState([""]);
  const [howToUse, setHowToUse] = useState([""]);

  const addField = (setter, array) => {
    setter([...array, ""]);
  };

  const removeField = (setter, array, index) => {
    const newArray = array.filter((_, i) => i !== index);
    setter(newArray);
  };

  const updateField = (setter, array, index, value) => {
    const newArray = [...array];
    newArray[index] = value;
    setter(newArray);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const category = e.target.category.value;
    const image = e.target.image.value;
    const description = e.target.description.value;

    try {
      // Get logged-in user's database ID
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

      const productData = {
        name,
        category,
        image,
        description,
        features: features.filter((f) => f.trim() !== ""),
        technologies: technologies.filter((t) => t.trim() !== ""),
        howToUse: howToUse.filter((h) => h.trim() !== ""),
        user_id: userId,
      };

      // Post the product
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to add product");
      }

      alert("Product added successfully!");
      e.target.reset();
      setFeatures([""]);
      setTechnologies([""]);
      setHowToUse([""]);
      navigate("/dashboard/products/all");
    } catch (err) {
      console.error("Error adding product:", err);
      alert(err.message || "Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-6">
              Add New Product
            </h2>

            <form onSubmit={handleAddProduct} className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">Product Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder="Enterprise CRM Suite"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Category *</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    className="input input-bordered w-full"
                    placeholder="Category Name"
                    required
                  />
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  name="image"
                  className="input input-bordered w-full"
                  placeholder="https://example.com/image.png"
                />
              </div>

              {/* Description */}
              <div>
                <label className="label">
                  <span className="label-text">Description *</span>
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered w-full h-24"
                  placeholder="Describe your product..."
                  required
                ></textarea>
              </div>

              {/* Features */}
              <div>
                <label className="label">
                  <span className="label-text">Features</span>
                </label>
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) =>
                        updateField(
                          setFeatures,
                          features,
                          index,
                          e.target.value
                        )
                      }
                      className="input input-bordered w-full"
                      placeholder="Feature description"
                    />
                    {features.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          removeField(setFeatures, features, index)
                        }
                        className="btn btn-error btn-outline"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addField(setFeatures, features)}
                  className="btn btn-sm btn-primary mt-2"
                >
                  Add Feature
                </button>
              </div>

              {/* Technologies */}
              <div>
                <label className="label">
                  <span className="label-text">Technologies</span>
                </label>
                {technologies.map((tech, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={tech}
                      onChange={(e) =>
                        updateField(
                          setTechnologies,
                          technologies,
                          index,
                          e.target.value
                        )
                      }
                      className="input input-bordered w-full"
                      placeholder="Technology name"
                    />
                    {technologies.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          removeField(setTechnologies, technologies, index)
                        }
                        className="btn btn-error btn-outline"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addField(setTechnologies, technologies)}
                  className="btn btn-sm btn-primary mt-2"
                >
                  Add Technology
                </button>
              </div>

              {/* How to Use */}
              <div>
                <label className="label">
                  <span className="label-text">How to Use</span>
                </label>
                {howToUse.map((step, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={step}
                      onChange={(e) =>
                        updateField(
                          setHowToUse,
                          howToUse,
                          index,
                          e.target.value
                        )
                      }
                      className="input input-bordered w-full"
                      placeholder="Step description"
                    />
                    {howToUse.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          removeField(setHowToUse, howToUse, index)
                        }
                        className="btn btn-error btn-outline"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addField(setHowToUse, howToUse)}
                  className="btn btn-sm btn-primary mt-2"
                >
                  Add Step
                </button>
              </div>

              {/* Submit button */}
              <div className="form-control mt-6">
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
                    "Add Product"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
