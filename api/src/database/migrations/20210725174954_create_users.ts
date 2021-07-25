import { Knex } from 'knex';

exports.up = (knex: Knex) => {
  return knex.schema.createTable('users', table => {
    table.increments().primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.string('biography').nullable();
    table.string('telephone').nullable();
    table.string('avatar').nullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex: Knex) => {
  return knex.schema.dropTable('users');
};
