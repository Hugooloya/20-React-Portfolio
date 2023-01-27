import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="container-fluid">
      <form className="container">
        <h1>Contact</h1>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            autoFocus
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputMessage" className="form-label">
            Message
          </label>
          <textarea type="text" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
