import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Backdrop, CircularProgress } from "@mui/material";

export default function PromptForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  const [loading, setLoading] = useState(false);

  const initialValues = {
    prompt: "",
  };

  const onSubmit = (data) => {
    setLoading(true);
    axios({
      method: "post",
      url: "https://ai-image-generator-api.onrender.com/openai/generateImage",
      data: data,
    }).then((response) => {
      setLoading(false);
      setImageUrl(response.data.data);
      setImageAlt(data.prompt);
    });
  };

  const validationSchema = Yup.object().shape({
    prompt: Yup.string().required("*OpenAI doesn't allow empty prompts*"),
  });

  return (
    <div className="prompt-form">
      <h1>Describe Your Desired Image</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form style={formStyle}>
          <ErrorMessage name="prompt" component="div" />
          <Field
            style={promptStyle}
            name="prompt"
            placeholder="Enter your ideas here..."
          />
          <button style={buttonStyle} type="submit">
            Generate
          </button>
        </Form>
      </Formik>
      <div className="image-container">
        <img src={imageUrl} alt={imageAlt}></img>
      </div>
      <Backdrop
        open={loading}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: "100%",
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  alignItems: "center",
};

const promptStyle = {
  margin: "1rem 0",
  padding: "10px",
  width: "400px",
};

const buttonStyle = {
  border: "none",
  borderRadius: "5px",
  fontSize: "20px",
  width: "200px",
  padding: "1rem 2rem",
  textAlign: "center",
  backgroundColor: "black",
  color: "#f4f4f4",
  cursor: "pointer",
};
