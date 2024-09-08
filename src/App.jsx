import "./App.css";

function App() {
  const date = new Date();
  const currentTime = date.getHours();

  let greetings;
  let customStyle = { color: "" };

  if (currentTime < 12) {
    greetings = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greetings = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greetings = "Good Night";
    customStyle.color = "blue";
  }
  return (
    <>
      <h1 className="heading" style={customStyle}>
        {greetings}
      </h1>
    </>
  );
}

export default App;
