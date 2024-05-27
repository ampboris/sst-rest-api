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