import { faker } from "@faker-js/faker";
import {
  PrismaClient,
  entity_contact_contacttype_enum,
  entity_role_role_enum,
  entity_user_entitytype_enum,
  product_media_uploadstatus_enum,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 50; i++) {
    // Create a user with its relations
    const user = await prisma.entity_user.create({
      data: {
        Email: faker.internet.email(),
        PasswordSalt: faker.internet.password(),
        PasswordHash: faker.internet.password(),
        ProfilePicture: faker.image.avatar(),
        PasswordResetToken: null,
        PasswordResetExpires: null,
        IsAccountLocked: false,
        FirstName: faker.person.firstName(),
        LastName: faker.person.lastName(),
        EntityType: entity_user_entitytype_enum.Customer,
        IsActive: true,
        CreatedDate: new Date(),
        UpdatedDate: new Date(),
        entity_contact: {
          create: [
            {
              ContactType: entity_contact_contacttype_enum.Email,
              Values: faker.internet.email(),
            },
            {
              ContactType: entity_contact_contacttype_enum.Address,
              Values: faker.location.streetAddress(),
            },
            {
              ContactType: entity_contact_contacttype_enum.Phone,
              Values: faker.phone.number(),
            },
          ],
        },
        entity_role: {
          create: [
            {
              Role: entity_role_role_enum.Create,
              Values: faker.lorem.words(7),
              CreatedDate: new Date(),
              UpdatedDate: new Date(),
              IsActive: true,
            },
            {
              Role: entity_role_role_enum.Read,
              Values: faker.lorem.words(7),
              CreatedDate: new Date(),
              UpdatedDate: new Date(),
              IsActive: true,
            },
            {
              Role: entity_role_role_enum.Update,
              Values: faker.lorem.words(7),
              CreatedDate: new Date(),
              UpdatedDate: new Date(),
              IsActive: true,
            },
            {
              Role: entity_role_role_enum.Delete,
              Values: faker.lorem.words(7),
              CreatedDate: new Date(),
              UpdatedDate: new Date(),
              IsActive: true,
            },
          ],
        },
      },
    });

    // Create a product with its relations
    const product = await prisma.product.create({
      data: {
        ProductName: faker.commerce.productName(),
        ProductDescription: faker.commerce.productDescription(),
        CreatedDate: new Date(),
        UpdatedDate: new Date(),
        IsActive: true,
        product_category: {
          create: {
            CategoryName: faker.commerce.department(),
            IsActive: true,
          },
        },
        inventory: {
          create: {
            QuantityAvailable: faker.number.int({ min: 0, max: 300 }),
            Price: 99,
            Currency: "RM",
          },
        },
        product_media: {
          create: [
            {
              Order: 1,
              Height: 480,
              Width: 640,
              MimeType: "image/jpeg",
              MediaUrl: faker.image.url(),
              ThumbnailUrl: faker.image.url(),
              UploadStatus: product_media_uploadstatus_enum.Completed,
            },
          ],
        },
      },
    });

    console.log(`User created with ID: ${user.Id}`);
    console.log(`Product created with ID: ${product.Id}`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
