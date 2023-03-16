import { Navbar } from "./components/Navbar/Navbar";
import { Cover } from "./container/Cover/Cover";
import { ScrollingPage } from "./container/ScrollingPage/ScrollingPage";
import "./App.scss";

export function App() {
  return (
    <div className="app">
      <Navbar />
      <Cover />
      <ScrollingPage />
    </div>
  );
}
