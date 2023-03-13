import { Navbar } from "./components/Navbar/Navbar";
import { NavbarSecondary } from "./components/NavbarSecondary/NavbarSecondary";
import { Header } from "./container/Header/Header";
import "./App.scss";

export function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <NavbarSecondary />
      <Header />
    </div>
  );
}
