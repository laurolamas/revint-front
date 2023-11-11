import React, { useState } from "react";

export default function UploadProductForm({ mode, product }) {
  if (!product) {
    product = {
      name: "",
      description: "",
      price: 0,
      condition: "",
      category: "",
      user_id: "",
      images: [],
    };
  }
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [condition, setCondition] = useState(product.condition);
  const [category, setCategory] = useState(product.category);
  const [userId, setUserId] = useState(product.user_id);
  const [images, setImages] = useState(product.images);

  console.log(product);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("category", category);
    // el user_id deberia sacarlo de la cookie por ahora van todos pal pipi
    formData.append("user_id", "652491720504dbe29f7cba54");
    console.log(formData);
    if (mode == "edit") {
      editProduct(formData);
    } else if (mode == "create") {
      createProduct(formData);
    }
  };

  const createProduct = async (formData) => {
    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      body: formData,
    });
    console.log(await res.json());
  };

  const editProduct = async (formData) => {
    const res = await fetch(`http://localhost:5000/products/${product._id}`, {
      method: "PUT",
      body: formData,
    });
    console.log(await res.json());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-full h-full w-full p-10 m-10 border border-gray-300 rounded-md max-w-sm md:max-w-3xl"
    >
      <div className="md:flex md:justify-around">
        <div className="flex-col">
          <label>Name:</label>
          <div>
            <input
              className="input mb-3 input-bordered w-full max-w-xs"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <label>Description:</label>
          <div>
            <textarea
              className="textarea mb-3 textarea-bordered w-full max-w-xs"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <label>Price:</label>
          <div>
            <input
              className="input mb-3 input-bordered w-full max-w-xs"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-col">
        <label>Condition:</label>
          <div>
            <select
              className="select mb-3 select-bordered w-full max-w-xs"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="used">Used - Some details</option>
              <option value="used-details">Used - Like New </option>
              <option value="new">New</option>
            </select>
          </div>
          <label>Category:</label>
          <div>
            <select
              className="select mb-3 select-bordered w-full max-w-xs"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="Jacket">Jacket</option>
              <option value="Coat">Coat</option>
              <option value="Sweater">Sweater</option>
              <option value="Short Sleeve">Short Sleeve</option>
              <option value="Long Sleeve">Long Sleeve</option>
              <option value="Skirt">Skirt</option>
              <option value="Pants">Pants</option>
              <option value="Shorts">Shorts</option>
            </select>
          </div>
          <label>Images:</label>
          <div>
            <input
              className="file-input mb-3 file-input-bordered w-full max-w-xs"
              type="file"
              multiple
              onChange={(e) => setImages(e.target.files)}
            />
          </div>
          <div className="pt-3">
            <button className="btn w-full max-w-xs" type="submit">
              Create Product
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
