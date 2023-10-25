"use client";
import UploadProductForm from "../components/uploadProductForm";

export default function CreateProductPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mt-10">Create a Product</h1>
      <UploadProductForm />
    </div>
  );
}
