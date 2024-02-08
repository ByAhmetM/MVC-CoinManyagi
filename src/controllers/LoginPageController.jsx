import LoginPageView from "../views/LoginPageView";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { schema } from "../schema";

const LoginPageController = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });
  return <LoginPageView formik={formik} />;
};

export default LoginPageController;
