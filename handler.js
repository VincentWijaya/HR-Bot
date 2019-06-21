'use strict';

const ssmStore = require('aws-param-store');
const keys = ssmStore.getParameterSync([
  'HR-Bot-client-email',
  'HR-Bot-private-key',
  'HR-Bot-sheetId',
], {
  region: 'ap-southeast-1'
});

const getSsmParams = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'AWS SSM Params',
      data: keys
    }, null, 2)
  };
};

const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Welcome to serverless!'
    }, null, 2)
  };
};

module.exports = {
  getSsmParams,
  hello
};
