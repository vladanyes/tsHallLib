# TypeScript hateoas model library 

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/alexjoverm/typescript-library-starter.svg)](https://greenkeeper.io/)
[![Coverage Status](https://coveralls.io/repos/github/vladanyes/tsHallLib/badge.svg?branch=master)](https://coveralls.io/github/vladanyes/tsHallLib?branch=master)
[![Build Status](https://travis-ci.org/vladanyes/tsHallLib.svg?branch=master)](https://travis-ci.org/vladanyes/tsHallLib)

### Usage

```bash
# Run following command 
  npm i hateoas-typescript-model-test
```  
``` javascript  
# Then import needed type from the library  
  - import {HalLink, HalLinks, HalPage, Resource, ResourceCollection} from 'hateoas-typescript-model-test';
```

**Keep in mind**

```javascript
# Type Resource and ResourceCollection uses generic type variables
  type Resource<T> 
  interface ResourceCollection<T, K extends string>
```

You may take a deeper look at :
```bash
node_modules/hateoas-typescript-model-test/dist/types/index.d.ts
```
