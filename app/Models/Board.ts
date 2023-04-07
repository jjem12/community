import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Board extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public userId: number

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public viewcount: number

  @column()
  public suggestion: number
  
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
