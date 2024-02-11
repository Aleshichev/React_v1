import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button isActive={active == "main"} onClick={() => onChange("main")}>
        Main
      </Button>
      <Button
        isActive={active == "feedback"}
        onClick={() => onChange("feedback")}
      >
        Back Connect
      </Button>
    </section>
  );
}