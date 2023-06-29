import React from "react";
import HeaderComponent from "../../components/header/Header.component";
import FooterComponent from "../../components/footer/Footer.component";

type Layoutprops = {
  children: React.ReactNode;
};

const Layout = ({ children }: Layoutprops) => {
  return (
    <React.Fragment>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </React.Fragment>
  );
};

export default Layout;
