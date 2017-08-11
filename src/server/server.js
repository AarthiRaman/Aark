import setupExpress from "./config_prod";
import setupDevServer from "./config_dev";
import routes from "./routes";

if(process.env.NODE_ENV !== "development") {
	setupExpress(routes);
} else {
	setupDevServer(routes);
}

