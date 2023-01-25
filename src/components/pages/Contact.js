import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <form className="container">
      <h1>Contact</h1>
      <div class="mb-3">
        <label for="inputName" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="inputName" required/>
      </div>
      <div class="mb-3">
        <label for="inputEmail1" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="inputEmail1" required/>
      </div>
      <div class="mb-3">
        <label for="inputMessage" className="form-label">
          Message
        </label>
        <textarea type="text" className="form-control" required/>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
