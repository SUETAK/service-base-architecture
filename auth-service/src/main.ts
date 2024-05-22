import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const useEmulator = configService.get('USE_FIRESTORE_EMULATOR') === 'true';

  if (useEmulator) {
    admin.initializeApp();
    admin.firestore().settings({
      host: 'localhost:8080',
      ssl: false,
    });
  } else {
    const serviceAccount = configService.get('FIREBASE_SERVICE_ACCOUNT');
    const parsedServiceAccount = JSON.parse(serviceAccount);
    admin.initializeApp({
      credential: admin.credential.cert(parsedServiceAccount),
    });
  }


  await app.listen(3000);
}

bootstrap();
