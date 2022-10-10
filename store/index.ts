import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import axios, { AxiosError, AxiosResponse } from "axios";

interface Menu {
  link: string;
  text: string;
}

interface CustomerService {
  link: string;
  text: string;
}

interface Information {
  link: string;
  text: string;
}

interface Texts {
  menu: Array<Menu>;
  customerServiceTitle: string;
  customerServiceDescription: string;
  customerService: Array<CustomerService>;
  informationTitle: string;
  informationDescription: string;
  information: Array<Information>;
}

@Module({
  namespaced: true,
})
export default class Index extends VuexModule {
  texts = {};

  @Mutation
  setTexts(data: Texts) {
    this.texts = data;
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
}
