import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { EntityUser } from "./EntityUser"

enum RoleType {
    Create = 1,
    Read = 2,
    Update = 3,
    Delete = 4
}

@Entity()
export class EntityRole {

    @PrimaryGeneratedColumn('uuid')
    Id: string

    @Column({type: 'enum', enum: RoleType, default: RoleType.Read })
    Role: number

    @Column()
    Values: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    CreatedDate: Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    UpdatedDate: Date

    @Column({ default: true})
    IsActive: boolean

    @ManyToOne(() => EntityUser)
    // @JoinColumn({ name: "entityId" })
    EntityUser: EntityUser;
}
