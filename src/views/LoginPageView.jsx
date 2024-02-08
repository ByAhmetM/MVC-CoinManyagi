import InputFieldView from "./InputFieldView";
import { inputs } from "./../constants";

const LoginPageView = ({ formik }) => {
  return (
    <div className="login-page">
      <div className="container py-5 ">
        <h2 className="d-flex gap-3 justify-content-center  align-items-center ">
          <img height={60} src="c-logo.png" />
          <span>Coin Manyağı</span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data, i) => (
            <InputFieldView key={i} formik={formik} data={data} />
          ))}
          <button type="submit">Kaydol</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPageView;
