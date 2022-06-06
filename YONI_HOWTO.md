## hot reloading

run `npx docusaurus start` and you can start hot reloading stuff

## deploy locally on windows

    url: "https://yonichechik.github.io",
    baseUrl: "/AlgoMonkeys/",


    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "YoniChechik", // Usually your GitHub org/user name.
    projectName: "AlgoMonkeys", // Usually your repo name.
    trailingSlash: false,
    deploymentBranch: "gh-pages",

and then:
`cmd /C "set "GIT_USER=yonichechik" && set "USE_SSH=true" && npm run deploy"`

if this is the first time you deploy you need to set github pages:
in your repo `setting -> pages` choose source as `gh-pages` and `/ (root)`
