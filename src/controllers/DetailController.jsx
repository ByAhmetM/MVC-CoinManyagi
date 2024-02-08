import { useParams } from "react-router-dom";
import Model from "../models/DetailModel";
import DetailView from "./../views/DetailView";
import { useEffect } from "react";
const DetailController = () => {
  const { id } = useParams();

  useEffect(() => {
    Model.getCoinDetails(id).then((data) => console.log(data));
  }, []);
  return <DetailView />;
};

export default DetailController;
