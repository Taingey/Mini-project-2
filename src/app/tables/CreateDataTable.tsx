"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

const url_based = "https://store.istad.co/api/products";

const FILE_SIZE = 1024 * 1024 * 5;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

const fieldStyle = "border border-gray-300 rounded-md";

const CreateDataTable = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0Mjg3MDg1LCJpYXQiOjE3MTIxMjcwODUsImp0aSI6IjZlNTZjZmVhMmYzNjQ5MWZiODBjNjQzMDUxMGNmYjBjIiwidXNlcl9pZCI6Mjd9.y7Q1_2jGpWzLIbNDS1eMdeybyi9Is4TfenCC3Fu3YYo"
  );
  myHeaders.append(
    "Cookie",
    "csrftoken=GRqwv2b5Hy7cdCEWxJ3awPkre0LuihlQN6iRxWggvNJNIjPhFcKwanvS3vNqYtLF; sessionid=qs5l7g6fua0us31wew30hxgkew3puisp"
  );

  const handleSubmitToServer = async (values: any) => {
    try {
      const response = await axios.post(
        `${url_based}file/product/`,
        values.image
      );
      return response.data.image;
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateProduct = async (values: any, imageData: any) => {
    try {
      const imageUrl = await handleSubmitToServer(imageData);
      console.log("data: ", values);
      const postData = await fetch(`${url_based}products/`, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          ...values,
          image: imageUrl,
        }),
      });
      console.log("post data: ", postData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full pt-9">
      <Formik
        onSubmit={(values: any, { setSubmitting, resetForm }) => {
          console.log(values);
          const formData = new FormData();
          formData.append("image", values.image);
          handleCreateProduct(values, { image: formData });
          setSubmitting(false);
          resetForm();
        }}
        initialValues={{
          category: {
            name: "Hiking shoes",
            icon: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1693342954-rincon-3-64ee5ca62e001.jpg?crop=1xw:1xh;center,top&resize=980:*",
          },
          name: "",
          desc: "",
          image: undefined,
          price: 0,
          quantity: 0,
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="flex m-[30px] absolute flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Product Name: </label>
              <Field
                placeholder="T-shirt"
                className={fieldStyle}
                name="name"
                type="text"
              />
              <ErrorMessage name="name">
                {(msg) => <p className="text-red-600 text-sm italic">{msg}</p>}
              </ErrorMessage>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="desc">Description: </label>
              <Field
                placeholder="This is a t-shirt"
                className={fieldStyle}
                name="desc"
                type="text"
              />
              <ErrorMessage name="desc">
                {(msg) => <p className="text-red-600 text-sm italic">{msg}</p>}
              </ErrorMessage>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price">Price: </label>
              <Field
                placeholder="100"
                className={fieldStyle}
                name="price"
                type="number"
              />
              <ErrorMessage name="price">
                {(msg) => <p className="text-red-600 text-sm italic">{msg}</p>}
              </ErrorMessage>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="quantity">Quantity: </label>
              <Field
                placeholder="1"
                className={fieldStyle}
                name="quantity"
                type="number"
              />
              <ErrorMessage name="quantity">
                {(msg) => <p className="text-red-600 text-sm italic">{msg}</p>}
              </ErrorMessage>

              <div>
                <Field
                  name="image"
                  className={fieldStyle}
                  type="file"
                  title="Select a file"
                  setFieldValue={setFieldValue}
                  component={CustomInput}
                />
                <ErrorMessage name="image">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-pink-600 text-white rounded-md"
                disabled={isSubmitting}
              >
                Create
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateDataTable;

function CustomInput({ field, form, setFieldValue, ...props }: any) {
  const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);
  const name = field.name;
  const onChange: any = (event: any) => {
    console.log("event:", event.currentTarget.files);
    const file = event.currentTarget.files[0];
    setFieldValue(name, file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col gap-4 justify-center">
      <input
        type="file"
        onChange={onChange}
        {...props}
        className="border border-gray-300 rounded-md"
      />
      {previewImage && (
        <Image
          className="rounded-md"
          src={previewImage}
          alt="preview Image"
          width={100}
          height={100}
        />
      )}
    </div>
  );
}
