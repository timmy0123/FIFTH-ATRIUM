import { Layout } from "../components/layout";
import { Project } from "./Project";
import { About } from "./About";
const Base = () => {
    return(
        <Layout>
            <Project />
            <About />
        </Layout>
    );
}

export {Base}