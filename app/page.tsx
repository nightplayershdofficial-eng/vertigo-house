export default function Home() {
  return (
    <div style={{
      backgroundColor: "#0a0a0a",
      color: "white",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      <div style={{
        background: "#111",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0,0,0,0.8)",
        width: "300px",
        textAlign: "center"
      }}>
        <h2>Government Secure System</h2>
        <p style={{ fontSize: "12px", color: "gray" }}>
          Authorized Personnel Only
        </p>

        <input
          placeholder="Username"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            borderRadius: "5px",
            border: "none"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "5px",
            border: "none"
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            background: "#00ff99",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
          onClick={() => alert("Access Granted")}
        >
          Login
        </button>
      </div>
    </div>
  );
}
