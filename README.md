# Test CURD with Express

## Requirements

- Node
- MySQL
- Npm

## Used stack

- Typescript
- Express
- Prisma
- MySQL

## Env variable

```sh
# see .env.sample
DATABASE_URL=mysql://username:password@localhost:3306/DATABASE_NAME
```

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
yarn build
# or
npm run build

# and then

yarn production
# or
npm run production
```

## Endpoint

You can import `postman/Test_CRUD.postman_collection.json` into your postman client

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

### Address

List all address

```
endpoint: /api/address
method: GET
```

List address by id

```
endpoint: /api/address/:id
method: GET
```

Create address

```
endpoint: /api/address
method: POST
payload:
{
  zip: Number;
  city: String;
  province: String;
  house: String;
  customerId: Number
}
```

Update address

```
endpoint: /api/address/:id
method: PUT
payload:
{
  zip: Number;
  city: String;
  province: String;
  house: String;
}
```

Delete address

```
endpoint: /api/address/:id
method: DELETE
```
