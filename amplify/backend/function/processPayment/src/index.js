const { CognitoIdentityServiceProvider } = require('aws-sdk');
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = process.env.USER_POOL_ID;
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const getUserEmail = async (event) => {
  const params = {
    UserPoolId: USER_POOL_ID,
    Username: event.identity.claims.username,
  };
  const user = await cognitoIdentityServiceProvider
    .adminGetUser(params)
    .promise();
  const { Value: email } = user.UserAttributes.find((attr) => {
    if (attr.Name === 'email') {
      return attr.Value;
    }
  });
  return email;
};

/*
 * Get the total price of the order
 * Charge the customer
 */
exports.handler = async (event) => {
  try {
    const {
      cart,
      total,
      token,
      country,
      zipCode,
      address,
    } = event.arguments.input;
    const { username } = event.identity.claims;
    const email = await getUserEmail(event);

    await stripe.charges.create({
      amount: total,
      currency: 'usd',
      source: token,
      description: `Order ${new Date()} by ${username} with ${email} email`,
    });
    return { cart, total, address, username, country, zipCode };
  } catch (err) {
    throw new Error(err);
  }
};
