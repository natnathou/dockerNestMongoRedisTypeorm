import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Picture {
    @ObjectIdColumn()
    id: number;

    @Column()
    email: string;
}
