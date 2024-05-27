import { SSTConfig } from "sst";
import { DemoStack } from "./stacks/DemoStack";

export default {
  config(_input) {
    return {
      name: "sst-rest-api",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {
    app.stack(DemoStack);
  }
} satisfies SSTConfig;
