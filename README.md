# Supabase and Clerk Auth Demo

[![Blog Post](https://img.shields.io/badge/Blog-Read%20More-blue)](https://www.devtoolsacademy.com/blog/supabase-vs-clerk)

This repository demonstrates the integration of [Supabase](https://supabase.com/) and [Clerk](https://clerk.dev/) for authentication in a React app, with backend support from a .NET API. It includes examples of `user authentication` and API call setup using Bearer tokens, providing a secure, user-friendly way to manage access in your app.

## Overview

This project shows how to use Supabase's and Clerk's powerful auth capabilities to manage user login, token generation, and access control within a React frontend and a .NET backend API. 

### Key Features

- **User Authentication**: Secure login and logout functionality with Clerk and Supabase
- **Token Management**: Retrieves and manages access tokens from Clerk, which can be used for authorization in API requests
- **Protected API Calls**: Example of calling a .NET API with Bearer token-based authentication
- **Frontend with React and Vite**: A streamlined, fast setup for frontend development using Vite

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: .NET API
- **Auth Providers**: Supabase, Clerk
- **Dependencies**: 
  - `@supabase/supabase-js`
  - `@supabase/auth-ui-react`
  - `@supabase/auth-ui-shared`
  - `axios`
  - `react-router-dom`

## Getting Started

### Prerequisites

- Node.js and npm installed
- .NET SDK installed
- Supabase and Clerk accounts to set up authentication

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tyaga001/supabase-clerk-auth-demo.git
   cd supabase-clerk-auth-demo
   ```

2. **Install frontend dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL = your-supabase-url
   VITE_SUPABASE_KEY = your-supabase-key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Set up the backend (.NET API)**:
   - Create a new .NET Web API project or use the provided code
   - Configure it to accept Bearer token authentication using Clerk

### Project Structure

- **`src/`**: Contains all frontend components and hooks
- **`App.js`**: Main entry point where Clerk and Supabase configurations are initialized
- **`.env.local`**: Stores environment variables like Supabase API credentials (not included in the repo for security)
- **`api/`**: Example .NET API that interacts with the frontend using Bearer token authentication

## Usage

1. **Start the Frontend**:
   ```bash
   npm run dev
   ```

2. **Access the Application**:
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)
   - Use the authentication UI to sign up or log in
   - Test protected routes and API calls

## Learn More

For a detailed comparison of Supabase and Clerk authentication implementations, check out our [blog post](https://www.devtoolsacademy.com/blog/supabase-vs-clerk).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
