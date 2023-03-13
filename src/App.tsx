import { Navbar } from "./components/Navbar/Navbar";
import { NavbarSecondary } from "./components/NavbarSecondary/NavbarSecondary";
import { Header } from "./container/Header/Header";
import ScrollToTop from "./container/ScrollToTop/ScrollToTop";
import "./App.scss";
import ScrollNavigationButtons from "./container/ScrollNavigationButtons/ScrollNavigationButtons";

export function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <NavbarSecondary />
      <Header />
      <ScrollNavigationButtons sections={["1"]} />
      {/* <ScrollToTop showBelow={3} /> */}
    </div>
  );
}
