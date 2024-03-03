import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm"
import { EntityUser } from "./EntityUser";
import { Product } from "./Product";

@Entity()
export class Inventory {

    @PrimaryGeneratedColumn('uuid')
    Id: string

    @ManyToOne(() => Product)
    @JoinColumn()
    Product: Product

    @ManyToOne(() => EntityUser)
    @JoinColumn()
    EntityUser: EntityUser

    @Column({ default: 0} )
    QuantityAvailable: number

    @Column( { default: 0} )
    Price: number

    @Column( { default: "RM"} )
    Currency: string
}
