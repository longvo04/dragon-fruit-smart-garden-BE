# dragon-fruit-smart-garden-BE
# Dragon Fruit Smart Garden Backend

This is the backend for the Dragon Fruit Smart Garden project. It is built using Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/dragon-fruit-smart-garden-BE.git
    ```
2. Navigate to the project directory:
    ```sh
    cd dragon-fruit-smart-garden-BE
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Create a [.env](http://_vscodecontentref_/1) file in the root directory and add your environment variables. You can use the [.env.example](http://_vscodecontentref_/2) file as a reference.
2. Start the server:
    ```sh
    npm start
    ```
3. The server will be running on :`http://localhost3000`.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Users

- `GET /api/users` - Get all users (requires authentication)
- `GET /api/users/:id` - Get a user by ID (requires authentication)

## Environment Variables

The following environment variables are required:

- `DB_HOST` - Your database host
- [DB_USER](http://_vscodecontentref_/3) - Your database user
- [DB_PASSWORD](http://_vscodecontentref_/4) - Your database password
- `PORT` - The port number (optional, default is 3000)
- [TOKEN_SECRET](http://_vscodecontentref_/5) - Your token secret

## License

This project is licensed under the MIT License.