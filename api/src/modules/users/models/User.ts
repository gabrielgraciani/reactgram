import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column()
  biography: string;

  @Column()
  telephone: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;
}
