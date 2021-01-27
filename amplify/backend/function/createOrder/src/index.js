const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

const ORDER_TABLE = 'Order-iotpswp6lzccxmes2qyq4eaftm-dev';
const ORDER_TYPE = 'Order';
const GAME_ORDER_TABLE = 'GameOrder-iotpswp6lzccxmes2qyq4eaftm-dev';
const GAME_ORDER_TYPE = 'GameOrder';

const createOrder = async (payload) => {
  const { order_id, username, ...other } = payload;
  var params = {
    TableName: ORDER_TABLE,
    Item: {
      id: order_id,
      __typename: ORDER_TYPE,
      user: username,
      ...other,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  };
  console.log(params);
  await documentClient.put(params).promise();
};

const createGameOrder = async (payload) => {
  let gameOrders = [];
  for (let i = 0; i < payload.cart.length; i++) {
    const cartItem = payload.cart[i];
    gameOrders.push({
      PutRequest: {
        Item: {
          id: uuidv4(),
          __typename: GAME_ORDER_TYPE,
          game_id: cartItem.id,
          order_id: payload.order_id,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      },
    });
  }
  let params = {
    RequestItems: {},
  };
  params['RequestItems'][GAME_ORDER_TABLE] = gameOrders;
  console.log(params);
  await documentClient.batchWrite(params).promise();
};

/*
 * Get order details from processPayment lambda
 * Create an order
 * Link games to the order - Users can see the past orders and admins can view orders by user
 * Email the invoice (Will be added later)
 */
exports.handler = async (event) => {
  try {
    let payload = event.prev.result;
    payload.order_id = uuidv4();

    // create a new order
    await createOrder(payload);

    // links games with the order
    await createGameOrder(payload);

    // Note - You may add another function to email the invoice to the user

    return 'SUCCESS';
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
};
