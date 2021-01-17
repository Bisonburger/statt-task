import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryColumn()
  id: string;

  @Column({ length: 500 })
  summary: string;

  @Column('text')
  detail: string;

  @Column('text')
  due: string;

}