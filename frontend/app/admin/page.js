"use client";

import { useState } from "react";
import { api } from "../services/api";

export default function AdminPage() {

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");


 const handleSubmit = async () => {

  try {

    await api.post("/feed", {
      title,
      description,
    });

    alert("Feed Added");

    setTitle("");
    setDescription("");

  } catch (error) {

    console.log(error);

    alert(
      error.response?.data?.message
      || "Something went wrong"
    );
  }
};


  return (
    <div style={{ padding: 20 }}>

      <h1>Admin Feed Page</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        Add Feed
      </button>

    </div>
  );
}