import { useState } from "react";
import Button from "./Button/Button.jsx";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "help",
  });
  // const [name, setName] = useState("");
  // const [hasError, setHasError] = useState(false);
  // const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length == 0);
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length == 0,
    }));
  }

  // function toggleError() {
  //   // setHasError((prev) => !prev);
  // }
  return (
    <section>
      <h3>Back Connection</h3>
      {/* <Button onClick={toggleError}>Toggle Error</Button> */}
      <form>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{ border: form.hasError ? "1px solid red" : null }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Reason</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Error</option>
          <option value="help">Help</option>
          <option value="suggest">Suggest</option>
        </select>

        <pre>
          {JSON.stringify(form, null, 2)}
          {/* Name: {form.name}
          <br />
          Reason: {form.reason} */}
        </pre>
        <Button disabled={form.hasError} isActive={!form.hasError}>
          Send
        </Button>
      </form>
    </section>
  );
}
