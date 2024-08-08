import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from "./users/users.module"
import { BrandsModule } from './brands/brands.module';
import { CarsModule } from './cars/cars.module';
import { CarFindeksModule } from './carfindeks/carfindeks.module'; 
import { CarImagesModule } from './carimages/carimages.module';   
import { ColorsModule } from './colors/colors.module';
import { ContactsModule } from "./contacts/contacts.module"
import { CustomersModule } from './customers/customers.module';
import { FindeksModule } from "./findeks/carfindeks.module"
import { PaymentsModule } from "./payments/payments.module"
import { RentalsModule } from './rentals/rentals.module';

import { PrismaModule } from "./prisma/prisma.module"



@Module({
  imports: [
    AuthModule,
    UsersModule,
    BrandsModule,
    CarsModule,
    CarFindeksModule,
    CarImagesModule,
    ColorsModule,
    ContactsModule,
    CustomersModule,
    FindeksModule,
    PaymentsModule,
    RentalsModule,
    PrismaModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
