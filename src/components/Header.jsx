import logo from "/logo-name.svg";
import { useState } from "react";

export default function Header() {
  const [now, setNow] = useState(new Date());
  // const now = new Date()
  setInterval(() => setNow(new Date(), 1000));
  return (
    <header>
      <img src={logo} alt={"Result"} />
      {/* <h3>Result University</h3> */}
      <span>Current time {now.toLocaleTimeString()}</span>
    </header>
  );
}
