export const awsConfig = {
  Auth: {
    identityPoolId: "eu-west-2_CzHZ8Yr42",
    region: "us-east-2",
    userPoolId: "eu-west-2_inlZDFvQM",
    authenticationFlowType: "CUSTOM_AUTH",
    userPoolWebClientId: "1fvqnndkusbga5etadejai1lmt"
  },
  API: {
    endpoints: [
      {
        name: "WildRydesAPI",
        endpoint: "",
        region: "us-east-2"
      }
    ]
  },
  Storage: {
    bucket: "", //example: 'wildrydesbackend-profilepicturesbucket-1wgssc97ekdph'
    region: "" // example: 'us-east-2'
  }
};
