import { Operators } from '../constants'
import type { Condition, ConditionInput, Collection } from '../types'

/** Type guard to narrow ConditionInput to Condition. */
export function isCondition (c: ConditionInput): c is Condition {
  if (!Object.keys(c).length || typeof c === 'string') {
    return false
  }
  for (const key in c) {
    const validKeys = Object.keys(Operators).filter((k) => {
      return isNaN(Number(k)) === true
    })
    if (validKeys.indexOf(key) < 0) {
      return false
    }
  }
  return true
}

/** Type guard to narrow ConditionInput to Collection */
export function isCollection (c: ConditionInput): c is Collection {
  if (
    typeof c === 'string' ||
    c instanceof RegExp ||
    Array.isArray(c) ||
    isCondition(c)
  ) {
    return false
  }
  for (const key in c) {
    if (!isCondition(c[key])) return false
  }
  return true
}
