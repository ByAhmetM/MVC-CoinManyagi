import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header className="d-flex justify-content-between p-3 align-items-center">
      <Link className="d-flex gap-3 align-items-center" to={"/home"}>
        <img height={40} src="/c-logo.png" alt="" />
        <h5 className="text-light">CoinManyağı</h5>
      </Link>

      <nav className="d-flex gap-4 fs-5">
        <NavLink to={"/"}>Giriş Yap</NavLink>
        <NavLink to={"/home"}>Anasayfa</NavLink>
      </nav>
    </header>
  );
};

export default HeaderView;
