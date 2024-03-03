import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { ProductCategory } from "./ProductCategory"
import { Product } from "./Product";
import { EntityUser } from "./EntityUser";

enum UploadStatus {
    Uploading = 1,
    Converting = 2,
    Completed = 3,
    Failed = 4
}

@Entity()
export class ProductMedia {

    @PrimaryGeneratedColumn('uuid')
    Id: string

    @ManyToOne(() => Product)
    // @JoinColumn({ name: "entityId" })
    Product: Product;

    @Column()
    Order: number

    @Column()
    Height: number

    @Column()
    Width: number

    @Column()
    MimeType: string

    @Column()
    MediaUrl: string

    @Column()
    ThumbnailUrl: string

    @Column({ type: 'enum', enum: UploadStatus, default: UploadStatus.Uploading })
    UploadStatus: number
}
