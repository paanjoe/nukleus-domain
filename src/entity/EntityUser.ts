import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { EntityRole } from "./EntityRole"
import { EntityContact } from "./EntityContact"

enum EntityType {
    Customer = 1,
    Supplier = 2
}

@Entity()
export class EntityUser {

    @PrimaryGeneratedColumn('uuid')
    Id: string

    @Column()
    Email: string

    @Column()
    PasswordSalt: string

    @Column()
    PasswordHash: string

    @Column({ nullable: true })
    ProfilePicture: string

    @Column({ nullable: true })
    PasswordResetToken: string

    @Column({ type: 'timestamp', nullable: true })
    PasswordResetExpires: Date

    @Column({ default: false })
    IsAccountLocked: boolean

    @Column()
    FirstName: string

    @Column()
    LastName: string
    
    @Column({ type: 'enum', enum: EntityType, default: EntityType.Customer })
    EntityType: number

    @Column({ default: true })
    IsActive: boolean

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    CreatedDate: Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    UpdatedDate: Date

    @OneToMany(() => EntityRole, (entityRole) => entityRole.EntityUser)
    EntityRoles: EntityRole[]

    @OneToMany(() => EntityContact, (entityContact) => entityContact.EntityUser)
    EntityContacts: EntityContact[]
}
