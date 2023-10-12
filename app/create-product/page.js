"use client";
import React, { useState } from "react";

export default function CreateProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState("");
  const [category, setCategory] = useState("");
  const [userId, setUserId] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-96 w-96 p-10 m-10">
      <label>
        Name:
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          className="textarea textarea-bordered"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          className="input input-bordered w-full max-w-xs"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Condition:
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
      </label>
      <label>
        Category:
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <label>
        User ID:
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>
      <label>
        Images:
        <input
          className="file-input file-input-bordered w-full max-w-xs"
          type="file"
          multiple
          onChange={(e) =>
            setImages(
              Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
              )
            )
          }
        />
      </label>
      <button className="btn" type="submit">
        Create Product
      </button>
    </form>
  );
}
