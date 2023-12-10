import Menu from "./components/Menu";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Menu />
    </div>
  );
};

export default Layout;
