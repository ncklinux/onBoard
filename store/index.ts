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

interface sortItem {
  sort: string;
  disabled: boolean;
  text: Record<string, Languages>;
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
  currencies: Array<string>;
  selectedCurrency: string;
  sortBy: Array<sortItem>;
}

interface productItem {
  link: string;
  image: string;
  title: Record<string, Languages>;
  description: Record<string, Languages>;
  price: number;
  discountRate?: number;
  availability: boolean;
  starRate: number;
}

interface Products {
  items: Array<productItem>;
}

// TODO: TypeScript runtime validation

@Module({
  namespaced: true,
})
export default class Index extends VuexModule {
  texts = {
    selectedCurrency: "",
  };
  products = {};

  @Mutation
  setTexts(data: Texts) {
    this.texts = data;
  }

  @Mutation
  setProducts(data: Products) {
    this.products = data;
  }

  @Mutation
  setCurrency(currency: string) {
    this.texts.selectedCurrency = currency;
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

  @Action
  switchCurrency(currency: string) {
    this.context.commit("setCurrency", currency);
  }
}
