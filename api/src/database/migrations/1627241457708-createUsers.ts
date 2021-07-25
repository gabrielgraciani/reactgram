import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createUsers1627241457708 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
            unsigned: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'username',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'biography',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'telephone',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: "datetime('now')",
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: "datetime('now')",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
