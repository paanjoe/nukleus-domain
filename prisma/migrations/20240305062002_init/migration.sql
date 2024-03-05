-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "public";

-- CreateEnum
CREATE TYPE "entity_contact_contacttype_enum" AS ENUM ('1', '2', '3');

-- CreateEnum
CREATE TYPE "entity_role_role_enum" AS ENUM ('1', '2', '3', '4');

-- CreateEnum
CREATE TYPE "entity_user_entitytype_enum" AS ENUM ('1', '2');

-- CreateEnum
CREATE TYPE "product_media_uploadstatus_enum" AS ENUM ('1', '2', '3', '4');

-- CreateTable
CREATE TABLE "entity_contact" (
    "Id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "ContactType" "entity_contact_contacttype_enum" NOT NULL,
    "Values" VARCHAR NOT NULL,
    "entityUserId" UUID,

    CONSTRAINT "PK_5f348b06ec063cd1763a7216731" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "entity_role" (
    "Id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "Role" "entity_role_role_enum" NOT NULL DEFAULT '2',
    "Values" VARCHAR NOT NULL,
    "CreatedDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "IsActive" BOOLEAN NOT NULL DEFAULT true,
    "entityUserId" UUID,

    CONSTRAINT "PK_0b0ea2ccc01f5e939e40560de83" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "entity_user" (
    "Id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "Email" VARCHAR NOT NULL,
    "PasswordSalt" VARCHAR NOT NULL,
    "PasswordHash" VARCHAR NOT NULL,
    "ProfilePicture" VARCHAR,
    "PasswordResetToken" VARCHAR,
    "PasswordResetExpires" TIMESTAMP(6),
    "IsAccountLocked" BOOLEAN NOT NULL DEFAULT false,
    "FirstName" VARCHAR NOT NULL,
    "LastName" VARCHAR NOT NULL,
    "EntityType" "entity_user_entitytype_enum" NOT NULL DEFAULT '1',
    "IsActive" BOOLEAN NOT NULL DEFAULT true,
    "CreatedDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_f3327832cc778fa8eeb960d2436" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "inventory" (
    "Id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "QuantityAvailable" INTEGER NOT NULL DEFAULT 0,
    "Price" INTEGER NOT NULL DEFAULT 0,
    "Currency" VARCHAR NOT NULL DEFAULT 'RM',
    "productId" UUID,
    "entityUserId" UUID,

    CONSTRAINT "PK_057fdfcc3d80c960e76a966a817" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "product" (
    "Id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "ProductName" VARCHAR NOT NULL,
    "ProductDescription" VARCHAR,
    "CreatedDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "IsActive" BOOLEAN NOT NULL DEFAULT true,
    "productCategoryId" UUID,

    CONSTRAINT "PK_a22f8718d47066cb0a07aa5db66" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "product_category" (
    "Id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "CategoryName" VARCHAR NOT NULL,
    "IsActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PK_744674b12781617d3d1e6376fab" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "product_media" (
    "Id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "Order" INTEGER NOT NULL DEFAULT 1,
    "Height" INTEGER,
    "Width" INTEGER,
    "MimeType" VARCHAR,
    "MediaUrl" VARCHAR NOT NULL,
    "ThumbnailUrl" VARCHAR NOT NULL,
    "UploadStatus" "product_media_uploadstatus_enum" NOT NULL DEFAULT '1',
    "productId" UUID,

    CONSTRAINT "PK_c7d41a3c21de05b9b60f7df7f50" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "entity_contact" ADD CONSTRAINT "FK_d13bde87ffcd54702b2c53d63b0" FOREIGN KEY ("entityUserId") REFERENCES "entity_user"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "entity_role" ADD CONSTRAINT "FK_de0d1aa85f76422f76f5f8bab98" FOREIGN KEY ("entityUserId") REFERENCES "entity_user"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "FK_7860db7e4860aa43b21b55755ca" FOREIGN KEY ("entityUserId") REFERENCES "entity_user"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "FK_c8622e1e24c6d054d36e8824490" FOREIGN KEY ("productId") REFERENCES "product"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "FK_618194d24a7ea86a165d7ec628e" FOREIGN KEY ("productCategoryId") REFERENCES "product_category"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_media" ADD CONSTRAINT "FK_50e3945c6150d80b69b5f18515a" FOREIGN KEY ("productId") REFERENCES "product"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION;
