import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

enum ContactType {
    Address = 1,
    Email = 2,
    Phone = 3
}

@Entity()
export class EntityContact {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    entityId: string

    @Column({ type: 'enum', enum: ContactType })
    contactType: number

    @Column()
    values: string
}
