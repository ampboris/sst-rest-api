import { SSTConfig } from "sst";
import { DemoStack } from "./stacks/DemoStack";

export default {
  config(_input) {
    console.log("_input.stage::", _input.stage);
    return {
      name: "sst-rest-api",
      region: "ap-southeast-2",
      // doesn't look like a good idea to add profile here
      // credential access issue!!
      profile: _input.stage // "dev" //_input.stage === "production" ? "production" : "dev",
    };
  },
  stacks(app) {
    app.stack(DemoStack);
  }
} satisfies SSTConfig;
