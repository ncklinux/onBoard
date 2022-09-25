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
  customerService: Array<CustomerService>;
  customerServiceDescription: string;
  information: Array<Information>;
  informationDescription: string;
}

@Module({
  namespaced: true,
})
export default class Index extends VuexModule {
  texts = {};

  @Mutation
  setData(data: Texts) {
    this.texts = data;
  }

  @Action
  async getData() {
    await axios
      .get("http://localhost:3000/texts.json", {})
      .then((rsp: AxiosResponse) => {
        this.context.commit("setData", rsp.data);
      })
      .catch((err: Error | AxiosError) => {
        console.log("ERROR: ", err);
      });
  }
}
