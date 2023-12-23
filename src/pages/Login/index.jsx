import React from "react";

import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from'yup';

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            email:"",
            password:''
        },
        validationSchema:Yup.object({
            email:Yup.string().email('Invalid credentials...').required("Required"),
            password:Yup.string().required("Required")
        }),
        onSubmit:(values)=>{
            if (values.email === "creditfixprivatelimited@gmail.com" && values.password === "Twinkle786@") {
                alert("Welcome back!!");
                setTimeout(()=>{
                    navigate("/AddNews");
                },1500)
              } else {
                alert("Invalid credentials");
            }
        }
    })

    return (
        <section style={{ overflow: 'hidden' }} className="fade-in w-full bg-black justify-center items-center flex flex-col">

            <div className="sm:w-[80%] h-[600px] w-[500px] flex justify-center items-center">
                <form onSubmit={formik.handleSubmit} className="pm:p-5 bg-white w-full flex flex-col gap-4 justify-center items-center p-10 rounded-lg">
                <h1 className="pm:text-[11px] text-red-500">Enter the credentials if you are an admin!</h1>
                <input
                    className="pm:p-1 w-[90%] p-3 border-2 border-black rounded-lg"
                    type="email"
                    placeholder="Email"
                    {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
                <input
                    className="pm:p-1 w-[90%] p-3 border-2 border-black rounded-lg"
                    type="password"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
                <button
                    type="submit"
                    className="pm:p-1 w-[90%] p-3 bg-red-500 text-white ease-linear duration-200 hover:text-white hover:bg-black border-black rounded-lg"
                >
                    Submit
                </button>
                </form>
            </div>

        </section>
    )
}
export default Login