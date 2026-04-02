export default function Home() {
  function login() {
    alert("Access Granted");
  }

  return (
    <div style={{ 
      background: "#0a0a0a", 
      color: "white", 
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      <div style={{
        background: "#111",
        padding: "30px",
        borderRadius: "10px",
        width: "300px",
        textAlign: "center"
      }}>
        <h2>Secure Login</h2>
        <p style={{ fontSize: "12px", color: "gray" }}>
          Authorized Access Only
        </p>

        <input 
          placeholder="Username"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px"
          }}
        />

        <input 
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px"
          }}
        />

        <button 
          onClick={login}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            background: "lime",
            border: "none",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
