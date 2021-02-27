import { startsWith } from 'core-js/fn/string'

export function capitalaze(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
} 
