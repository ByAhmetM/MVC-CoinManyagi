import { useEffect } from "react";
import Model from "../models/MainPageModel";
import MainPageView from "../views/MainPageView";

const MainPageController = () => {
  useEffect(() => {
    Model.getCoins().then((data) => console.log(data));
  }, []);
  return <MainPageView />;
};

export default MainPageController;
