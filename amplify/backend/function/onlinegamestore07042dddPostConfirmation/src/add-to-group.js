/* eslint-disable-line */ const aws = require('aws-sdk');
const { useParams } = require('react-router-dom');

exports.handler = async (event, context, callback) => {
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
  
  let isAdmin = false;
  const adminEmails = ['nazifbarassounon@gmail.com'];

  if (adminEmails.indexOf(event.request.userAttributes.email) !== -1) {
    isAdmin = true;
  }

  const groupParams = {
    UserPoolId: event.userPoolId,
  };

  const addUserParams = {
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  if (isAdmin) {
    groupParams.GroupName = 'Admin';
    useParams.GroupName = 'Admin';

    try {
      await cognitoidentityserviceprovider.getGroup(groupParams).promise();
    } catch (e) {
      await cognitoidentityserviceprovider.createGroup(groupParams).promise();
    }
  
    try {
      await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
      callback(null, event);
    } catch (e) {
      callback(e);
    }
  } else {
    callback(null, event);
  }
};
