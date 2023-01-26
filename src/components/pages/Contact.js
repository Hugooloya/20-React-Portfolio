import React from "react";
import { useState, useEffect } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const initialValues = { username: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formError]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!values.username) {
      errors.username = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }
    return errors;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container"
    >
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
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail1"
          // value={formValues.email}
          onChange={handleChange}
        />
      </div>
      {/* <p>{formError.email}</p> */}
      <div className="mb-3">
        <label htmlFor="inputMessage" className="form-label">
          Message
        </label>
        <textarea
          type="text"
          className="form-control"
          // value={formValues.message}
          onChange={handleChange}
        />
      </div>
      {/* <p>{formError.message}</p> */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
