import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity('picture')
export class Picture {
    @ObjectIdColumn()
    id: number;

    @Column()
    email: string;
}
