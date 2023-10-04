import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'components/button';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  author_name: Yup.string().required('Author Name is required'),
  slug: Yup.string().required('Slugs is required'),
});

const GetBlogId = () => {

  const initialValues = {
    username: '',
    password: '',
    author_name: '',
    slug: '',
  };

  const [submittedValues, setSubmittedValues] = useState([]);

  const onSubmit = (values) => {
    console.log("values", values);
    let slugs = values.slug.split(',');
    slugs.map((slug) => {
      axios.post(`${process.env.ROOT_URL}${process.env.BLOG_ID_ENDPOINT}`, { username: values.username, password: values.password, author_name: values.author_name, slug: slug }).then((response) => {
        console.log("response", response);
        setSubmittedValues(prevState => ([...prevState, response.data.data]))
      }, (error) => {
        console.log("ERROR", error);
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
    });
  };

  useEffect(() => {
    if(process.env.BLOG_ID_ENDPOINT === undefined){
      toast.error("BLOG_ID_ENDPOINT ENV Missing. Please contact admin", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    if(process.env.ROOT_URL === undefined){
      toast.error("ROOT_URL ENV Missing. Please contact admin", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [])

  useEffect(() => {
    console.log("submittedValues", submittedValues);
  }, [submittedValues])

  return (
    <div className='flex flex-col gap-rg p-huge'>
      <div
        className={`
                    [ flex flex-col gap-rg ]
                    [ w-full lg:w-6/12 order-1 ]
                `}
      >      
        <h1 className='text-3xl underline'>Get Blog Ids</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <div className='shadow-lg p-md'>
            <Form className="form">
              <div className="form-group py-4">
                <label htmlFor="username">Enter Username:</label>
                <Field type="text" id="username" name="username" className='input' placeholder="Enter Username" />
                <ErrorMessage name="username" component="div" className="error" />
              </div>
              <div className="form-group py-4">
                <label htmlFor="password">Enter Password:</label>
                <Field type="password" id="password" name="password" className='input' placeholder="Enter Password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <div className="form-group py-4">
                <label htmlFor="author_name">Enter Author Name:</label>
                <Field type="text" id="author_name" name="author_name" className='input' placeholder="Enter Author Name" />
                <ErrorMessage name="author_name" component="div" className="error" />
              </div>
              <div className="form-group py-4">
                <label htmlFor="slug">Enter Slugs (comma separated for multiple):</label>
                <Field type="text" id="slug" name="slug" className='input' placeholder="Enter Slugs (comma separated for multiple)" />
                <ErrorMessage name="slug" component="div" className="error" />
              </div>

              <Button text='Submit' type="submit" className='mt-xl' />

            </Form>
          </div>
        </Formik>
        {submittedValues && (
          <div className="table-container">
            <h2 className="py-10 underline text-3xl">Form Response</h2>
            <table className="py-4 [ w-full ]">
              <thead>
                <tr className='p-md'>
                  <th className='p-4 border-current border-2'>Slug</th>
                  <th className='p-4 border-current border-2'>Id</th>
                </tr>
              </thead>
              <tbody>
                {submittedValues.map((fieldEntry, index) => (
                  <tr key={index} className='p-md'>
                    <td className='p-4 border-current border-2'>{fieldEntry.slug}</td>
                    <td className='p-4 border-current border-2'>{fieldEntry.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default GetBlogId;
