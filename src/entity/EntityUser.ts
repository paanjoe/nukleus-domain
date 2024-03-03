import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

enum EntityType {
    Customer = 1,
    Supplier = 2
}

@Entity()
export class EntityUser {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    email: string

    @Column()
    passwordSalt: string

    @Column()
    passwordHash: string

    @Column()
    profilePicture: string

    @Column()
    firstName: string

    @Column()
    lastName: string
    
    @Column({ type: 'enum', enum: EntityType, default: EntityType.Customer })
    entityType: number

    @Column()
    isActive: boolean

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdDate: Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updatedDate: Date
}
