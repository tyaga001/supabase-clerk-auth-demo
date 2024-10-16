import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import Success from "./components/success";
function App() {
  return (
    <>
      <h1>Clerk Auth</h1>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          <Success />
        </SignedIn>
      </header>
    </>
  );
}

export default App;
