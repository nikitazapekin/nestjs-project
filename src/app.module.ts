import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppServise } from "./app.service";
  import {SequelizeModule} from "@nestjs/sequelize";
  import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
 
  /*
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import {Post} from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import { UsersModule } from './users/users.module';
import * as path from 'path';
*/
@Module({
    controllers: [
        AppController
    ],

    //провайдеры - то что может переиспользоваться
    providers: [
        AppServise

    ],
    imports: [
           ConfigModule.forRoot({
              envFilePath: `.${process.env.NODE_ENV}.env`
    //      envFilePath: `.env`
            }),
     /*       ServeStaticModule.forRoot({
                rootPath: path.resolve( __dirname, 'static'),
            }),
          */
            SequelizeModule.forRoot({
                dialect: 'postgres',
                /*  
                */
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRESS_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,  
                /*

                port:5432,
                username: 'postgres',
                password: 'Belorus2010',
                database:'nest-course',
                host: 'localhost',
                */
                models: [
                    User
                //    User, Role, UserRoles, Post
                ],
                autoLoadModels: true
            }),
       UsersModule,
      /*      UsersModule,
            RolesModule,
            AuthModule,
            PostsModule,
            FilesModule, 
            */
            
    ]
})
export class AppModule { }