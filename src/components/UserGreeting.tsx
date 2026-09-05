interface Info {
  isLoggedIn: boolean;
  username: string;
}

function UserGreeting({ isLoggedIn = false, username = 'Guest' }: Info) {
  const welcomeMessage = <h2>Welcome, {username}</h2>
  const loginPrompt = <h2>Please Log in</h2>
  return isLoggedIn ? welcomeMessage : loginPrompt;
}

export default UserGreeting;
