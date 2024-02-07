import { useFormik } from "formik";
import { schema } from "../schema";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { inputs } from "../constants";

const LoginPage = () => {
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

  return (
    <div className="login-page">
      <div className="container py-5 ">
        <h2 className="d-flex gap-3 justify-content-center  align-items-center ">
          <img height={60} src="c-logo.png" />
          <span>Coin Manyağı</span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data, i) => (
            <InputField key={i} formik={formik} data={data} />
          ))}
          <button type="submit">Kaydol</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
