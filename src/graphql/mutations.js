/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      title
      imageKey
      price
      orders {
        items {
          id
          game_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      title
      imageKey
      price
      orders {
        items {
          id
          game_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      title
      imageKey
      price
      orders {
        items {
          id
          game_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createGameOrder = /* GraphQL */ `
  mutation CreateGameOrder(
    $input: CreateGameOrderInput!
    $condition: ModelGameOrderConditionInput
  ) {
    createGameOrder(input: $input, condition: $condition) {
      id
      game_id
      order_id
      order {
        id
        user
        date
        total
        country
        city
        zipCode
        address
        games {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      game {
        id
        title
        imageKey
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const updateGameOrder = /* GraphQL */ `
  mutation UpdateGameOrder(
    $input: UpdateGameOrderInput!
    $condition: ModelGameOrderConditionInput
  ) {
    updateGameOrder(input: $input, condition: $condition) {
      id
      game_id
      order_id
      order {
        id
        user
        date
        total
        country
        city
        zipCode
        address
        games {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      game {
        id
        title
        imageKey
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const deleteGameOrder = /* GraphQL */ `
  mutation DeleteGameOrder(
    $input: DeleteGameOrderInput!
    $condition: ModelGameOrderConditionInput
  ) {
    deleteGameOrder(input: $input, condition: $condition) {
      id
      game_id
      order_id
      order {
        id
        user
        date
        total
        country
        city
        zipCode
        address
        games {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      game {
        id
        title
        imageKey
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      country
      city
      zipCode
      address
      games {
        items {
          id
          game_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      country
      city
      zipCode
      address
      games {
        items {
          id
          game_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      country
      city
      zipCode
      address
      games {
        items {
          id
          game_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
