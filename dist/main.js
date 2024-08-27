"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet_1 = require("helmet");
const common_1 = require("@nestjs/common");
const port = process.env.PORT ? parseInt(process.env.PORT) : 3006;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use((0, helmet_1.default)());
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(port);
    common_1.Logger.log(`Running in port ${port}`, 'main');
}
bootstrap();
//# sourceMappingURL=main.js.map