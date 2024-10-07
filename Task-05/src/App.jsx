function App({ username }) {
  return (
    <div>
      <h2>Hello, {username}!</h2>
      <p>
        JSX allows embedding JavaScript expressions directly inside HTML-like syntax. 
        For example, the username "{username}" was embedded directly in this message using JSX!
      </p>
    </div>
  );
}
export default App;

