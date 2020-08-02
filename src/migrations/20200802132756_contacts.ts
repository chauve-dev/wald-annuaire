import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('contacts', t => {
        t.increments('id');
        t.string('nom');
        t.string('prenom');
        t.string('telephone');
        t.string('email');
        t.integer('userid')
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('contacts');
}

