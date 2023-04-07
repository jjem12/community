import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class BookMark extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number
  
  @column()
  public Book: string

  @column()
  public sendId: number

  @column()
  public receiveId: number



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'userId',
  })

  
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

}
