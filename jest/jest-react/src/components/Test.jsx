export default function Test({ user }) {
  return user && user.name ? (
    <h2>hello! {user.name}</h2>
  ) : (
    <button>Login</button>
  );
}
