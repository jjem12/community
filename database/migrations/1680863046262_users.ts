import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username', 50).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('email', 180).notNullable()
      table.string('ip', 180).notNullable()
      table.integer('role_id').notNullable().defaultTo(1) // 0이 관리자
      table.boolean('is_active').notNullable().defaultTo(false)
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
