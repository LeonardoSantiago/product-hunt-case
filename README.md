# Product Hunt CLone

This project is a React,  We are using [Vite](https://vite.dev/). React 19 and GraphQL.
The solution is a clone of a proposal to consume the public API [Product Hunt](https://www.producthunt.com/)

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Node Compatibility](#NodeCompatibility)


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LeonardoSantiago/product-hunt-case.git
   ```
2. Change to the project directory:
   ```bash
    cd product-hunt-case
   ```
3. Install the dependencies
   ```bash
    npm install
   ```
4. Run an application
   ```bash
    npm run dev
   ```

5. Open your browser or device

## Configuration
    To use the Product Hunt API you will need a token. You only need to create a account in [Product Hunt](https://www.producthunt.com/) and generate a developer token, after you need to put in .env, following the example below:
    ```env
    VITE_API_TOKEN=your_api_token_here
    ```

## NodeCompatibility 
    To create this project I used v20.9 of Node. Is necessary use a version bigger than v16
