import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

enum RoleType {
    Create = 1,
    Read = 2,
    Update = 3,
    Delete = 4
}

@Entity()
export class EntityRole {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'enum', enum: RoleType, default: RoleType.Read })
    role: number

    

    @Column()
    values: string
}
