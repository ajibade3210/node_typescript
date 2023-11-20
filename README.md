# NodeJs + TypeScript

- install Typescript:

```bash
npm install --save-dev typescript
```

- Next setup TSC configuration file

```bash
npx tsc --init
```

- Install other need dependencies

```bash
npm i express
```

Next express types

```bash
npm i --save-dev @types/express
```

To Run Typescript Code

```bash
npx tsc
```

This will convert our .ts files into .js.
To make the converted files move into a folder. Head to the tsconfig file and update the Outdir property to the folder dir of your choice.

Next Install Nodemon (only works with js) and TsNode (allows nodemon to work with js)

```bash
npm i -D nodemon ts-node eslint
npx eslint --init
```

Eslint doesnt enforce env variables like Port to be avaliable. We need either check it manaully ourselves `if (!port){}`

or install an external depency `envalid`

```bash
npm i envalid
```

To specify the type of req.body you are expecting you need to declare an interface we can declare a type. But interface is better in this scenerio.

Status Code 204 does not return a response body.
