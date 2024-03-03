import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Product } from "./Product"

@Entity()
export class ProductCategory {

    @PrimaryGeneratedColumn('uuid')
    Id: string

    @Column({ nullable: false })
    CategoryName: string

    @Column({ default: true})
    IsActive: boolean
}
