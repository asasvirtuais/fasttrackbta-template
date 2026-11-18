'use server'
import { action } from '@/lib/action'
import { db } from './db'

// Passes straight to the raw interface until the table middleware is written (stage 4).
export const find = action(db.find)
export const list = action(db.list)
export const create = action(db.create)
export const update = action(db.update)
export const remove = action(db.remove)
