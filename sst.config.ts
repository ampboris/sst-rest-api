import { SSTConfig } from "sst";
import { DemoStack } from "./stacks/DemoStack";

export default {
  config(_input) {
    return {
      name: "sst-rest-api",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(DemoStack);
  }
} satisfies SSTConfig;
