import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: number;

    @Column()
    email: string;
}
