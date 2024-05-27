import { SSTConfig } from "sst";
import { TestApiStack } from "./stacks/TestApiStack";

export default {
  config(_input) {
    return {
      name: "sst-rest-api",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(TestApiStack);
  }
} satisfies SSTConfig;
