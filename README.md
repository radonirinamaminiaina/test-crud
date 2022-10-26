# Test CURD with Express

## Installation

```sh
yarn install
# or
npm install
```

## Start Server for development

```sh
yarn watch
# or
npm run watch
```

## Start Server for production

```sh
yarn start
# or
npm start
```

## Endpoint

### Customer

List all customers

```
endpoint: /api/customer
method: GET
```

List customer by id

```
endpoint: /api/customer/:id
method: GET
```

Create customer

```
endpoint: /api/customer
method: POST
payload:
{
  name: String;
  email: String;
  phone: String;
}
```

Update customer

```
endpoint: /api/customer/:id
method: PUT
payload:
{
  name: String;
  email: String;
  phone: String;
}
```

Delete customer

```
endpoint: /api/customer/:id
method: DELETE
```
