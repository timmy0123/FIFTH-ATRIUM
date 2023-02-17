import { Layout } from "../components/layout";
import { Project } from "./Project";
import { About } from "./About";
import { Contact } from "./Contact";
const Base = () => {
    return(
        <Layout>
            <Project />
            <About />
            <Contact />
        </Layout>
    );
}

export {Base}