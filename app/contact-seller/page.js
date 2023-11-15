"use client";

import React from "react";
import ContactSellerCard from "../components/contactSellerCard";

export default function ContactSellerPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url(/telephone.jpg)" }}>
      <ContactSellerCard />
    </div>
  );
}