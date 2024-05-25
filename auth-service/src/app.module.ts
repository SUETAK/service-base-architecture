import { Module } from '@nestjs/common';
import { UserService } from './user.service';

import { UserRepository } from './repository/user-repository';
import { UserController } from './user.controller';
import { Firestore } from '@google-cloud/firestore';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { logger } from '@google-cloud/firestore/build/src/logger';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: ['.env', '.env.local'] })],
  controllers: [UserController],
  providers: [UserService, UserRepository,
    {
      provide: 'FIRESTORE_INSTANCE',
      useFactory: async (configService: ConfigService) => {
        const useEmulator = configService.get('USE_FIRESTORE_EMULATOR') === 'true';
        let firestore: Firestore;
        console.log(useEmulator)

        if (useEmulator) {
          firestore = new Firestore({
            projectId: 'your-project-id',
            port: 8080,
            ssl: false,
            host: 'firestore-emulator',
          });
          console.log(firestore.databaseId)
          console.log(firestore.listCollections())
        } else {
          console.log('Using Firestore production instance');
          const projectId = configService.get('PROJECT_ID');
          firestore = new Firestore({
            projectId,
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
