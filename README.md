NLW Valoriza | Next Level Week Together 

Mission Node | NLW6
---

 
NLW Valoriza is a platform where users can send compliments to other users

### Resources:
```
- Registration of tags (possible compliments)
- Only admin user

- Registration of compliments
- User ID receiving the compliment
- Tag ID
- Creation date

- User authentication
- Generate JWT Token
- Validate user logged in the necessary routes

- User Listing
- Tag listing
- List of compliments by user
 ```

### Technologies
This project was developed using the following technologies:

- [NodeJs](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://www.npmjs.com/package/express)
- [Sqlite](https://www.sqlite.org/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [uuid](https://www.npmjs.com/package/uuid)
- [beekeeper studio](https://www.beekeeperstudio.io/)
- [insomnia](https://insomnia.rest/download)

Start project
```bash
yarn dev
```

## Database rules

- User registration

[x] It is not allowed to register more than one user

[x] It is not allowed to register user without email

- TAG registration

[x] It is not allowed to register more than one tag with the same name

[x] It is not allowed to register an unnamed tag

[x] Registration by non-admin users is not allowed

- Compliment registration

[x] A user is not allowed to register a compliment for themselves

[x] It is not allowed to register compliments for invalid users

[x] User must be authenticated in the application
