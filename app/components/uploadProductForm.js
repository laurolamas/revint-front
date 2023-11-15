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

  if (mode == undefined) {
    mode = "create";
  }

  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [condition, setCondition] = useState(product.condition);
  const [category, setCategory] = useState(product.category);
  const [images, setImages] = useState(product.images);

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
    console.log(formData);
    if (mode == "edit") {
      console.log("Edit mode submit");
      editProduct(formData);
    } else if (mode == "create") {
      console.log("Create mode submit");
      createProduct(formData);
    }
  };

  const createProduct = async (formData) => {
    const res = await fetch("http://localhost:8080/products", {
      method: "POST",
      body: formData,
    });
    console.log(await res.json());
  };

  const editProduct = async (formData) => {
    const res = await fetch(`http://localhost:8080/products/${product._id}`, {
      method: "PUT",
      body: formData,
    });
    console.log(await res.json());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 rounded-md md:flex md:justify-around gap-5 flex flex-col"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col gap-3">
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
        <div className="flex flex-col gap-3">
          <label>Condition:</label>
          <div>
            <input
              className="input mb-3 input-bordered w-full max-w-xs"
              type="text"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
          </div>
          <label>Category:</label>
          <div>
            <input
              className="input mb-3 input-bordered w-full max-w-xs"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
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
        </div>
      </div>
      <div className="pt-3">
        <button className="btn w-full max-w-xs" type="submit">
          Create Product
        </button>
      </div>
    </form>
  );
}
