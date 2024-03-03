import { AppDataSource } from "./data-source"
import { lazySeeder } from "./seeder/LazySeeder";  

AppDataSource.initialize().then(async () => {
 await lazySeeder();
}).catch(error => console.log(error))
