import React from "react";
import { useLoaderData } from "react-router";
import { IoEyeOutline, IoTrashOutline } from "react-icons/io5";

const AllProducts = () => {
  const products = useLoaderData();
  //console.log(products);
  
  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">All Products</h1>
        <p className="text-gray-600 mt-2">
          Total Products: {products?.length || 0}
        </p>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th className="text-center">S. NO</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Posted By</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products && products.length > 0 ? (
                  products.map((product) => (
                    <tr key={product.id} className="hover">
                      <td className="text-center font-semibold">
                        {product.id}
                      </td>
                      <td>
                        <div className="flex items-center gap-3">
                          {product.image && (
                            <div className="avatar">
                              <div className="w-12 h-12 rounded">
                                <img src={product.image} alt={product.name} />
                              </div>
                            </div>
                          )}
                          <div>
                            <div className="font-bold">{product.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-primary">
                          {product.category}
                        </span>
                      </td>
                      <td>
                        {product.user_name ? (
                          <div>
                            <div className="font-semibold text-sm">
                              {product.user_name}
                            </div>
                            {product.user_email && (
                              <div className="text-xs text-gray-500">
                                {product.user_email}
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
                    <td colSpan="7" className="text-center py-12">
                      <p className="text-xl text-gray-500">No products found</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Be the first to add a product!
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

export default AllProducts;
