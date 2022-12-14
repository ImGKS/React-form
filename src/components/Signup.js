import React from "react";
import { Formik , Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

export const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(20, "Must be of 20 characters or less")
            .required("Required"),
        lastName: Yup.string()
            .max(20, "Must be of 20 characters or less")
            .required("Required"),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, "Password must be atleast 6 characters")
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Password must match")
            .required("Confirm password is required"),
    })

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}

            validationSchema={validate}
            onSubmit={values => {
                console.log(values);
            }}

        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold .display-4">Sign up</h1>
                    <Form >
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="password" name="password" type="password" />
                        <TextField label="Confirm password" name="confirmPassword" type="password" />
                        <button className="btn btn-dark mt-3" type="submit">Register</button>
                        <button className="btn btn-denger mt-3 ml-3 error" type="reset" >Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    );
}