import {NestFactory} from "@nestjs/core";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {AppModule} from "./app.module";
/* 
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {ValidationPipe} from "./pipes/validation.pipe";
 */

async function start() {


 

    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('eg')
        .setDescription('eg')
        .setVersion('1.0.0')
        .addTag('eff')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

//    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()

/*
PORT=7000
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRESS_PASSWORD=Belorus2010
POSTGRES_DB=nest-course
POSTGRESS_PORT=5433


host: 'localhost',
                port:5432,
                username: 'postgres',
                password: 'Belorus2010',
                database:'nest-course', 
                 "start": "cross-env NODE_ENV=production nest start",
    "start:dev": "cross-env NODE_ENV=development nest start --watch",
                */