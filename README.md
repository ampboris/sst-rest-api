# sst-rest-api
Demo SST

npx create-sst@latest --template=base/example sst-rest-api

create .gitignore
rename ExampleStack to DemoStack (sst.confog.ts)

pnpm install
make sure pnpm-workspace.yaml is created.
(The "workspaces" field in package.json is not supported by pnpm. Create a "pnpm-workspace.yaml" file instead.)
this will resolve "Cannot find module 'sst'" warnings