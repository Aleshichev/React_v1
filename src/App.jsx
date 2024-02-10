import Header from "./components/Header.jsx";
import TeachingSection from './components/TeachingSection.jsx'
import DifferencesSection from "./components/DifferencesSection.jsx";

export default function App() {
 
  return (
    <div>
      <Header />
      <main>
        <TeachingSection />
        <DifferencesSection />
      </main>
    </div>
  );
}
