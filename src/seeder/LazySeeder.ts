
import { EntityContact } from "../entity/EntityContact";
import { EntityUser } from "../entity/EntityUser";
import { faker } from '@faker-js/faker';
import { AppDataSource } from "../data-source"
import { EntityRole } from "../entity/EntityRole";
import { Product } from "../entity/Product";
import { ProductCategory } from "../entity/ProductCategory";
import { ProductMedia } from "../entity/ProductMedia";

export async function lazySeeder() {

    // let entityUsers = new Array<EntityUser>();

    // // Entity User
    // for(let i = 0; i < 100; i++) {

    //     // Save Entity User First
    //     let entityUser = new EntityUser();

    //     entityUser.Id = faker.string.uuid();
    //     entityUser.Email = faker.internet.email();
    //     entityUser.PasswordSalt = faker.string.uuid();
    //     entityUser.PasswordHash = faker.string.uuid();
    //     entityUser.ProfilePicture = faker.image.avatar();
    //     entityUser.PasswordResetToken = null;
    //     entityUser.PasswordResetExpires = null;
    //     entityUser.IsAccountLocked = false;
    //     entityUser.FirstName = faker.person.firstName();
    //     entityUser.LastName = faker.person.lastName();
    //     entityUser.EntityType = faker.number.int({ min: 1, max: 2 });
    //     entityUser.IsActive = true;
    //     entityUser.CreatedDate = faker.date.recent();
    //     entityUser.UpdatedDate = faker.date.recent();
    //     entityUser.EntityRoles = [];

    //     await AppDataSource.manager.save(entityUser)


    //     // Entity Contact Information
    //     for(let j = 1; j <= 3; j++) {
    //         let entityContact = new EntityContact();
    //         entityContact.Id = faker.string.uuid();
    //         entityContact.EntityUser = entityUser;
    //         entityContact.ContactType = j;

    //         if (j === 1) {
    //             let address = faker.location.buildingNumber + ", " + faker.location.streetAddress + ", " + faker.location.city + ", " + faker.location.state + ", " + faker.location.country;
    //             entityContact.Values = address;
    //         }

    //         if (j === 2) {
    //             entityContact.Values = faker.internet.email();
    //         }

    //         if (j === 3) {
    //             entityContact.Values = faker.phone.number();
    //         }
            
    //         console.log("Saved a new user contact with id: " + entityContact.Id)
    //         await AppDataSource.manager.save(entityContact)
    //     }
        
    //     // Entity Roles
    //     for(let k = 1; k <= 4; k++) {
    //         let entityRole = new EntityRole();

    //         entityRole.Id = faker.string.uuid();
    //         entityRole.EntityUser = entityUser;
    //         entityRole.Role = faker.number.int({ min: 1, max: 4 });
    //         entityRole.Values = faker.lorem.sentence();
    //         entityRole.IsActive = true;
    //         entityRole.CreatedDate = faker.date.recent();
    //         entityRole.UpdatedDate = faker.date.recent();
            
    //         console.log("Saved a new user role with id: " + entityRole.Id)
    //         await AppDataSource.manager.save(entityRole)
        
    //     }

    //     console.log("Saved a new user with id: " + entityUser.Id)
    // }

    // Product Category
    // for(let i = 0; i < 10; i++) {

    //     const categoryName = faker.commerce.department();
    //     let category = new ProductCategory();
    //     category.Id = faker.string.uuid();
    //     category.CategoryName = categoryName;
    //     category.IsActive = true;

    //     console.log("Saved a product category with id: " + category.Id)
    //     await AppDataSource.manager.save(category)
        
    //     for(let j = 0; j < 25 ; j++) {
    //         let product = new Product();
    //         product.Id = faker.string.uuid();
    //         product.ProductName = faker.commerce.productName();
    //         product.ProductDescription = faker.lorem.sentence();
    //         product.ProductCategory = category;
    //         product.CreatedDate = faker.date.recent();
    //         product.UpdatedDate = faker.date.recent();
    //         product.IsActive = true;
            

    //         // product.ProductMedias = [];
    //         let medias = new Array<ProductMedia>();

    //         for(let k = 0; k < 3; k++) {
    //             let img = faker.image.url();
    //             let productMedia = new ProductMedia();
    //             productMedia.Id = faker.string.uuid();
    //             productMedia.Product = product;
    //             productMedia.MediaUrl = img;
    //             productMedia.ThumbnailUrl = img;
    //             productMedia.UploadStatus = 3;
    //             productMedia.Height = 500;
    //             productMedia.Width = 500;
    //             productMedia.MimeType = "image/jpeg";
    //             productMedia.Order = k + 1;
    //             console.log("Saved a new product media with id: " + productMedia.Id)
    //             console.log(productMedia);
    //             medias.push(productMedia);
    //             // await AppDataSource.manager.save(productMedia)
    //         }

    //         product.ProductMedias = medias; 
    //         console.log(product);  
    //         await AppDataSource.manager.save(product)
    //         await AppDataSource.manager.save(medias)

    //         console.log("Saved a new product with id: " + product.Id)
                      
    //     }
    // }

    // Inventory...
}
