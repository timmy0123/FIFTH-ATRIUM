import { Layout } from "../components/layout";
import { Project } from "./Project";
import { About } from "./About";
import { Contact } from "./Contact";
import { createTheme,MuiThemeProvider } from "@material-ui/core/styles";


const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });


const Base = () => {
    return(
        <MuiThemeProvider theme={theme}>
            <Layout>
                <Project />
                <About />
                <Contact />
            </Layout>
        </MuiThemeProvider>
    );
}

export {Base}