import { useFormik } from "formik";
import { schema } from "../schema";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {},
  });

  return (
    <div className="login-page">
      <div className="container py-5 ">
        <h2 className="d-flex gap-3 justify-content-center  align-items-center ">
          <img height={60} src="c-logo.png" />
          <span>Coin Manyağı</span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Emailiniz </label>
            <input
              name="email"
              onChange={formik.handleChange}
              className="form-control mt-2 "
              type="text"
            />

            {formik.errors.email && <span>{formik.errors.email}</span>}
          </div>

          <div>
            <label>Yaş </label>
            <input
              name="age"
              onChange={formik.handleChange}
              className="form-control mt-2 "
              type="number"
            />
            {formik.errors.age && <span>{formik.errors.age}</span>}
          </div>

          <div>
            <label>Şifre </label>
            <input
              name="password"
              onChange={formik.handleChange}
              className="form-control mt-2  "
              type="text"
            />
            {formik.errors.password && <span>{formik.errors.password}</span>}
          </div>

          <div>
            <label>Şifre Onay </label>
            <input
              name="confirmPassword"
              onChange={formik.handleChange}
              className="form-control mt-2  "
              type="text"
            />
            {formik.errors.confirmPassword && (
              <span>{formik.errors.confirmPassword}</span>
            )}
          </div>
          <button type="submit">Kaydol</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
