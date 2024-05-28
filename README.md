# sst-rest-api
Demo SST

npx create-sst@latest --template=base/example sst-rest-api

create .gitignore
rename ExampleStack to DemoStack (sst.confog.ts)

pnpm install
make sure pnpm-workspace.yaml is created.
(The "workspaces" field in package.json is not supported by pnpm. Create a "pnpm-workspace.yaml" file instead.)
this will resolve "Cannot find module 'sst'" warnings

› pnpm run dev

* current credentials could not be used to assume 'arn:aws:iam::967XXXXXX15:role/cdk-hnb659fds-file-publishing-role-967XXXXXX15-ap-southeast-2', but are for the right account. Proceeding anyway.

npx sst deploy --stage prod/dev/t2

** "You cannot assume a role while using a root account, under any circumstances. You have to use an IAM account."

-- just create a non-root user!

› aws sts get-caller-identity
› aws iam get-user
› aws sts assume-role --role-arn arn:aws:iam::967XXXXXX15:role/cdk-hnb659fds-file-publishing-role-967XXXXXX15-ap-southeast-2 --role-session-name TestSession

› aws sts get-caller-identity
{
    "UserId": "967XXXXXX15",
    "Account": "967XXXXXX15",
    "Arn": "arn:aws:iam::967XXXXXX15:root"
}

› aws sts get-caller-identity
{
    "UserId": "AIDAXXXXXXXXIT",
    "Account": "967XXXXXX15",
    "Arn": "arn:aws:iam::967XXXXXX15:user/sst-user"
}

An error occurred (AccessDenied) when calling the AssumeRole operation: Roles may not be assumed by root accounts.

https://docs.sst.dev/setting-up-aws

# Cannot find name 'console'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.ts(2584)
pnpm add  @types/node -D --workspace 


in sst-rest-api/ on main 
› pnpm add  @types/node -D --workspace   
 ERR_PNPM_ADDING_TO_ROOT  Running this command will add the dependency to the workspace root, which might not be what you want - if you really meant it, make it explicit by running this command again with the -w flag (or --workspace-root). If you don't want to see this warning anymore, you may set the ignore-workspace-root-check setting to true.

in sst-rest-api/ on main 
› pnpm add @types/node -D -w 


profile: _input.stage
Must have all profile setup
otherwise
```
Error: Could not load credentials from any providers

Trace: CredentialsProviderError: Could not load credentials from any providers
    at /Users/wpc/workspace/sst-rest-api/node_modules/.pnpm/@aws-sdk+credential-provider-node@3.583.0_@aws-sdk+client-sso-oidc@3.583.0_aws-crt@1.21.2__@a_ir5ohosn36lnb5vnqikkmurtgm/node_modules/@aws-sdk/credential-provider-node/dist-cjs/index.js:111:13
    at /Users/wpc/workspace/sst-rest-api/node_modules/.pnpm/@smithy+property-provider@3.0.0/node_modules/@smithy/property-provider/dist-cjs/index.js:79:33
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at process.<anonymous> (file:///Users/wpc/workspace/sst-rest-api/node_modules/.pnpm/sst@2.42.0_@aws-sdk+client-sso-oidc@3.583.0_aws-crt@1.21.2__aws-crt@1.21.2/node_modules/sst/cli/sst.js:58:21)
    at process.emit (node:events:529:35)
    at process.emit (node:domain:489:12)
    at process._fatalException (node:internal/process/execution:169:25)
    at processPromiseRejections (node:internal/process/promises:288:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:96:32)
    ```