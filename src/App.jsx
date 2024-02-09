import Header from "./components/Header.jsx";
import WayToTeach from "./components/WayToTeach.jsx";
import { ways } from "./data";



export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}
