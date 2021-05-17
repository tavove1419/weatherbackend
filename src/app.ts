import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Routes from './Routes/routes';
 
export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.setting();
        this.middleware();
        this.routes();
    }

    setting() {
        this.app.set("port", this.port || 3000);
    }

    middleware() {
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes () {
      this.app.use(Routes);
    }

    async listen() {
        await this.app.listen(this.app.get("port"));
        console.log("Sever on port 3000");
    }
}