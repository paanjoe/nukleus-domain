import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { EntityUser } from "./EntityUser";

enum ContactType {
    Address = 1,
    Email = 2,
    Phone = 3
}

@Entity()
export class EntityContact {

    @PrimaryGeneratedColumn('uuid')
    Id: string

    @ManyToOne(() => EntityUser)
    // @JoinColumn({ name: "entityId" })
    EntityUser: EntityUser;

    @Column({ type: 'enum', enum: ContactType })
    ContactType: number

    @Column()
    Values: string
}
