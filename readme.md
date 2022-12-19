# CRUD operations for User and Organization with type script,
##  tools  
* node v16.17.1 ,
* npm v9.1.2,
* express v4.18.2 ,
* joi v17.7.0,
* dotenv v16.0.3,
* bcryptjs v2.4.3 ,
* esm v3.2.25,
* jsonwebtoken v8.5.1,
* mongoose v6.7.3;
* watch v0.13.0;
* nodemailer v6.8.0;
* jsonschema v1.4.1
* #### devDependencies 
   * @types/bcrypt v5.0.0,
   * @types/express: v4.17.15,
   * @types/jsonwebtoken v8.5.9,
   * @types/node v18.11.15,
   * nodemon v2.0.20,
   * npm-watch ^0.11.0,
   * typescript v4.9.4
### 1.Create a new directory/folder for project  name - src
### 2.Create a js file named as app.ts
### 3.initialize a new npm project
* npm init -y  
* npm i express
### 4.import express in app.ts 
### 5.Setting Up the Server
* mongoose 6.7.3
* mongodb v6.0.2
### 6.Created Router folder for route.ts file
* all routes are created in route.ts
* user routes are crrated in user_routes.ts
* organization routes are created inn organization_routes.ts
### 7.Middleware folder in utils folder
#### in middleware folder we have 
* 1.auth_Middleware.ts ,  jsonwebtoken (jwt) validation 
* 2.Joi_Middleware.ts ,  joi validation with  validation helper that is placed in helper folder.
* 3.json_schema.ts , define json schema validation 
* 4.json_middleware.ts , for validate req with json_schema
### 8.helper (folder) in utils folder ->we place comman messages and validation in it 
* 1.messagehelper.ts- for res or error messages
* 2.multervalidation.ts- for images storage and validation
* 3.response helper.ts - for pre defined structure for response 
* 4.validation helper.ts- for joi validation structure for input validation 
### 9.services (folder)
* user_services.ts ,
* organization_services.ts
### CRUD API links & Working 
* #### Register user  post:(localhost:3200/user/register)
  * firstName:required,
  * lastName:required,
  * userName:required, uerName is unique 
  * email:required,
  * password:required , convert by  bcrypt
  * Organization :optional 
  * Organization.Address : optional
  * if user enter any field of address then
  * addressLine1:required, 
  * addressLine2:optional,
  * OrgNo:required,
  * city:required,
  * state:required,
  * country:required,
  * zipCode:required,
* #### Login user  post: (localhost:3200/user/login)
  * userName:required,
  * password:required,
  * then token is generated ( Token Expiry time : 15 minute)
* #### Profile  get :(localhost:3200/user/getone)
  * add token in  Auth/Bearer 
  * In Response it Shows user  details with organization list 
* #### Update user   put:(localhost:3200/user/updateuser) 
  * userName is required 
  * token is required
* #### Add organization post:(localhost:3200/organization/add)
  * orgName: required,
  * address is optional 
  * if any input for address  then=
  * addressLine1:required, 
  * addressLine2:optional,
  * OrgNo:required,
  * city:required,
  * state:required,
  * country:required,
  * zipCode:required,
* #### update organization by id put:(localhost:3200/org/getbyid/:id)
  * token required and id of organization object  
  * orgName: required,
  * address is optional 
  * if any input for address  then=
  * addressLine1:required, 
  * addressLine2:optional,
  * OrgNo:required,
  * city:required,
  * state:required,
  * country:required,
  * zipCode:required,
* #### list of all Organization with their userName  get:(localhost:3200/org/getall)