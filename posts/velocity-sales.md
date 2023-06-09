---
title: 'Velocity Sales'
slug: 'velocity-sales'
description: 'Second hand car dealership website on the ethereum blockchain'
coverImage: '/projects/VelocitySales/coverImage.png'
technologies: [Nextjs, TypeScript, Ethers.js]
date: '2023-03-28T00:00:00.000Z'
repository: 'https://github.com/kingdennis-crypto/Car-Dealership'
draft: false
---

For one of my classes in my blockchain semester I needed to make a second hand car dealership that would communicate and store data on the ethereum blockchain. So I decided to use NextJS and Ethers.js to handle the website and communication with the blockchain.

Welcome to "Velocity Sales", a second-hand car dealership website built on the Ethereum blockchain. As part of my blockchain semester, I developed this project to create a decentralized platform for buying and selling used cars. Leveraging technologies such as Next.js, TypeScript, and Ethers.js. Velocity Sales enables secure communication and data storage on the Ethereum blockchain.

## Implementation

To establish the connection between the website and the Ethereum blockchain, I utilized Next.js and Ethers.js. The project's architecture involved creating a React Context that handles all the communication between the blockchain and the website.

## Connecting to the contract

Upon starting the website, a function called `connectToContract` is invoked to establish a connection with the deployed smart contract on the Ethereum blockchain. Here is how it works:

```typescript
async function connectToContract(): Promise<void> {
  try {
    // Check if MetaMask is installed
    if (typeof (window as any) === 'undefined') {
      throw new Error('Please install MetaMask first.')
    }

    // Connect to Web3Provider using MetaMask
    const _provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    )

    const _signer = _provider.getSigner()
    const _contract = new ethers.Contract(contractAddress, abi.abi, _signer)

    const _address = await _provider.listAccounts()

    if (_address.length > 0) {
      setAddress(_address[0])
    }

    // Set the provider, signer, and contract
    setProvider(_provider)
    setSigner(_signer)
    setContract(_contract)

    const ethereuem = (window as any).ethereum

    // Add event listener for account changes
    ethereuem.on('accountsChanged', (_accounts: any) => {
      setAddress(_accounts.length > 0 ? _accounts[0] : null)
    })

    setIsConnected(true)
  } catch (err) {
    console.error(err)
  }
}
```

This function checks if the MetaMask extension is installed and then establishes a connection using the Web3Provider provided by MetaMask. It sets the provider, signer, and contract for further interactions with the blockchain.

## Interacting with the Contract

To communicate with the functions on the smart contract, I created the `callContractFunction` function. Here is how it works:

```typescript
async function callContractFunction(
  functionName: string,
  ...args: any[]
): Promise<any> {
  try {
    if (!contract) {
      console.error('Contract not initialized')
      return null
    }

    const result = await contract[functionName](...args)
    return result
  } catch (error) {
    console.error(`Error calling function ${functionName}: ${error}`)
    return null
  }
}
```

This function takes the name of the contract function and any required arguments. It then calls the corresponding function on the contract and returns the result. This simplifies the process of interacting with the smart contract from the website.

## Detail

![Detail page of a car](/projects/VelocitySales/detail.png)

The detail page provides comprehensive information about a specific car, including its license plate, brand, type, and mileage. Each car is represented as a non-fungible token (NFT) on the blockchain, with an owner identified by a wallet address. If the wallet address connected to the website matches the owner's address, additional options such as deleting, modifying, canceling, and unlisting the car are available. These options directly communicate with the blockchain to update the token's data.

For visitors who are potential buyers and do not own the car, purchasing options are displayed. If the buyer has sufficient Ethereum in their wallet (including the car's price and gas fees), they can initiate the purchase process. The payment process involves transferring the funds from the buyer's wallet to the contract and updating the car's status as "sold". The buyer and seller can then arrange the physical transfer of the car.

After the buyer collects the car, they can press a button to transfer the funds from the contract to the seller's wallet. Simultaneously, the NFT token ownership is transferred to the new owner, completing the purchase.

## Empty handling

![Your garage which is empty](/projects/VelocitySales/empty.png)

The user's garage page displays all the cars they have entered int he application or purchased. However, if the user has no cars associated with their account, the application gracefully handles the situation by displaying an image indicating that there are no cars available.

## Unauthorized

![The user isn't authorized to view this page](/projects/VelocitySales/unauthorized.png)

To make sure that no user would be able to view pages without connecting his or her wallet I made a route guard that wraps around all pages and checks on every URL change which URL it's on and throw the user out if he or she isn't connected.

To ensure that users cannot access pages without connecting their wallets, I implemented a route guard that wraps around all pages. This guard checks the URL on every change and redirects users if they are not connected. Here's an example of how it works:

```typescript
const authCheck = async (url: string): Promise<void> => {
  // Redirect to login page if accessing a private page and not logged in
  const restrictedPaths: string[] = ['profile', 'cars']

  if (restrictedPaths.includes(url) && !address) {
    setAuthorized(false)
    router.push({
      pathname: '/unauthorized',
      query: { returnUrl: router.pathname },
    })
  } else {
    setAuthorized(true)
  }
}
```

The function checks the current URL against the restricted paths array. If the user is not connected and tries to access a private page, they are redirected to the unauthorized page `(/unauthorized)`. This ensures that only authorized users can access certain parts of the website.

## Conclusion

This project demonstrates the potential of using blockchain technology, specifically the Ethereum network, for creating decentralized applications. By leveraging Next.JS, TypeScript, and Ethers.js, I build a secure and reliable platform for second-hand car sales.

The integration of smart contracts allows for transparent and immutable transactions, providing users with a trustworthy environment. I am excited about the possibilities of blockchain technology brings and look forward to exploring further innovative applications in the future.
