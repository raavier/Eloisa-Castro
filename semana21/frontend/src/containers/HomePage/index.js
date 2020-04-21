import React from "react";
import { connect } from "react-redux";
import { FormComponent } from "../../components/FormComponent";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Link from '@material-ui/core/Link';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from "../../theme";
import Box from "@material-ui/core/Box";
import { LogoComponent } from "../../components/Logo";
import { userLogin } from "../../actions/user"
import { HeaderComponent } from "../../components/HeaderComponent";
import Button from '@material-ui/core/Button';

export function HomePage() {
  let pageToRender
  // const token = window.localStorage.getItem("token")
  // if (token !== null) {
  //   this.props.goToLoginPage()
  // } else {
    pageToRender = (
      <div>
        <HeaderComponent />
        <Button variant="contained" color="primary">
          Feed
        </Button>
        <Button variant="contained" color="primary">
          Incluir novo vídeo
        </Button>
        <Button variant="contained" color="primary">
          Alterar senha
        </Button>
      </div>
    );
  //}

  return (
    <ThemeProvider theme={theme}>
      {pageToRender}
    </ThemeProvider>
    );
};

const mapDispatchToProps = dispatch => ({
  goToLoginPage: () => dispatch(push(routes.loginPage)),
});

export default connect(null, mapDispatchToProps)(HomePage);