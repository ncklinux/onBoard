import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import axios, { AxiosError, AxiosResponse } from "axios";
interface Menu {
  link: string;
  text: Record<string, Languages>;
}

interface CustomerService {
  link: string;
  text: Record<string, Languages>;
}

interface Information {
  link: string;
  text: Record<string, Languages>;
}

interface Currencies {
  currency: string;
}

interface Texts {
  menu: Array<Menu>;
  customerServiceTitle: Record<string, Languages>;
  customerServiceDescription: Record<string, Languages>;
  customerService: Array<CustomerService>;
  informationTitle: Record<string, Languages>;
  informationDescription: Record<string, Languages>;
  information: Array<Information>;
  various: Record<string, Languages>;
  currencies: Array<Currencies>;
}

interface surfboardItem {
  link: string;
  image: string;
  title: Record<string, Languages>;
  description: Record<string, Languages>;
  price: number;
  availability: boolean;
}

interface Products {
  surfboards: Array<surfboardItem>;
}

@Module({
  namespaced: true,
})
export default class Index extends VuexModule {
  texts = {};
  products = {};

  @Mutation
  setTexts(data: Texts) {
    this.texts = data;
  }

  @Mutation
  setProducts(data: Products) {
    this.products = data;
  }

  @Action
  async getTexts() {
    await axios
      .get("http://localhost:3000/texts.json", {})
      .then((rsp: AxiosResponse) => {
        this.context.commit("setTexts", rsp.data);
      })
      .catch((err: Error | AxiosError) => {
        console.log("ERROR: ", err);
      });
  }

  @Action
  async getProducts() {
    await axios
      .get("http://localhost:3000/products.json", {})
      .then((rsp: AxiosResponse) => {
        this.context.commit("setProducts", rsp.data);
      })
      .catch((err: Error | AxiosError) => {
        console.log("ERROR: ", err);
      });
  }
}
