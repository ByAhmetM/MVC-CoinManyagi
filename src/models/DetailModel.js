import axios from "axios";

export default class DetailModel {
  constructor() {
    this.coin = null;
    this.chartData = null;
    this.infoFields = null;
  }

  static async getCoinDetails(coin) {
    try {
      const res = await axios.get(`https://api.coincap.io/v2/assets/${coin}`);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
}
