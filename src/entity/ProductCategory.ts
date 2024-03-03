import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class ProductCategory {

    @PrimaryGeneratedColumn('uuid')
    Id: string

    @Column()
    CategoryName: string

    @Column({ default: true})
    IsActive: boolean
}
