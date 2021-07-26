import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('refresh_token')
export class RefreshToken {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  expires_in: number;

  @Column()
  user_id: number;
}
