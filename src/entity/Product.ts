import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm"
import { ProductCategory } from "./ProductCategory"
import { ProductMedia } from "./ProductMedia"

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    Id: string

    @Column()
    ProductName: string

    @Column( {nullable: true} )
    ProductDescription: string

    @ManyToOne(() => ProductCategory)
    // @JoinColumn()
    ProductCategory: ProductCategory

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    CreatedDate: Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    UpdatedDate: Date

    @Column({ default: true})
    IsActive: boolean

    @OneToMany(() => ProductMedia, (media) => media.Product, { cascade: true, nullable: true })
    ProductMedias: ProductMedia[]
}
