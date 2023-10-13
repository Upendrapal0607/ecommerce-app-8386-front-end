import React from 'react'
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div style={{ width: "100%", margin: "4rem auto", display: 'flex', flexDirection: "column", gap: "1rem", justifyContent: "center", alignItems: "center", padding: "4rem" }}>
      <h1 style={{ fontSize: "42px", fontWeight: "600" }}>Sorry Wroung Path </h1>
      <button style={{ padding: "1rem 2rem", background: "#000000fb", color: "#fff", borderRadius: "13px" }} onClick={() => navigate("/")}>Return to home page</button>
    </div>
  )
}

export default PageNotFound
