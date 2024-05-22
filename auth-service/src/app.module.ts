import { Module } from '@nestjs/common';
import { UserService } from './user.service';

import { UserRepository } from './repository/user-repository';
import { UserController } from './user.controller';
import { Firestore } from '@google-cloud/firestore';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: ['.env', '.env.local'] })],
  controllers: [UserController],
  providers: [UserService, UserRepository,
    {
      provide: 'FIRESTORE_INSTANCE',
      useFactory: async (configService: ConfigService) => {
        const useEmulator = configService.get('USE_FIRESTORE_EMULATOR') === 'true';
        let firestore: Firestore;

        if (useEmulator) {
          firestore = new Firestore({
            projectId: 'your-project-id',
            servicePath: 'localhost',
            port: 8080,
            ssl: false,
          });
        } else {
          firestore = new Firestore({
            projectId: 'your-project-id',
            keyFilename: '/path/to/your/serviceAccountKey.json',
          });
        }

        return firestore;
      },
      inject: [ConfigService],
    },
  ],

})
export class AppModule {
}
