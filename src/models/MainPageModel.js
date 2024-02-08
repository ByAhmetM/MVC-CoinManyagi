import axios from "axios";

export default class MainPageModel {
  static async getCoins() {
    const params = {
      limit: 15,
    };
    try {
      const res = await axios.get("https://api.coincap.io/v2/assets", {
        params,
      });
      return res.data.data;
    } catch (error) {
      console.log("Verileri çekerken hata oluştu");
    }
  }
}
