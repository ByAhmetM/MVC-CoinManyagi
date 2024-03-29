import axios from "axios";
import { SiCoinmarketcap } from "react-icons/si";
import { MdEventAvailable } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";

export default class DetailModel {
  constructor(coin) {
    this.coin = coin;
    console.log(coin);
    this.chartData = {
      labels: coin?.history.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          label: coin?.detail.name,
          data: coin?.history.map((i) => i.priceUsd),
          borderColor: "red",
          backgroundColor: "yellow",
        },
      ],
    };
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Hacmi",
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Fiyat",
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24s Değişim (%)",
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24s Hacim",
        value: coin?.detail.volumeUsd24Hr,
      },
    ];
  }

  static async getCoinDetails(coin) {
    try {
      const detailRes = await axios.get(
        `https://api.coincap.io/v2/assets/${coin}`
      );

      const historyRes = await axios.get(
        `https://api.coincap.io/v2/assets/${coin}/history?interval=d1`
      );
      return { detail: detailRes.data.data, history: historyRes.data.data };
    } catch (error) {
      console.log("Veriler çekerken hata oluştu.", error);
    }
  }
}
