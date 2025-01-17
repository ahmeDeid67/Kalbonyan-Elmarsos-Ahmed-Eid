const config = {
  SENTRY_DSN:
    "https://9e8dc4964eb74afcb849f0335cbc9959@o1383715.ingest.sentry.io/6753416",
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51LYHReAHHkDEwxyLLoCgX6PKgjgJYptdEdcsf2hbeFoEmzdEyROgEqkwxlf6t3FoRnT9PAOqMiacueQ0Cp6bkl63000KNXbLXe",
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
