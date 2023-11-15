"use client";
import UploadProductForm from "../components/uploadProductForm";

export default function CreateProductPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center mt-auto" style={{ backgroundImage: "url(/jean.jpg)" }}>
      <h1 className="text-4xl font-bold mt-10">Create a Product</h1>
      <UploadProductForm />
    </div>
  );
}
