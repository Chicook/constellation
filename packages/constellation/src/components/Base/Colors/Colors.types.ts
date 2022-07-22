import { FC } from 'react'

type ColorsComponent = FC

export type { ColorsComponent }

/**
 * A selection of colors intended for specific semantic purpose in a UI
 */
export enum SemanticColors {
  background = 'var(--color-background)',
  'background-blue' = 'var(--color-background-blue)',
  'background-dark' = 'var(--color-dark)',
  'background-green' = 'var(--color-background-green)',
  'background-light' = 'var(--color-background-light)',
  'background-orange' = 'var(--color-background-orange)',
  'background-red' = 'var(--color-background-red)',
  body = 'var(--color-body)',
  error = 'var(--color-error)',
  medium = 'var(--color-medium)',
  muted = 'var(--color-muted)',
  overlay = 'var(--color-overlay)',
  primary = 'var(--color-primary)',
  success = 'var(--color-success)',
  title = 'var(--color-title)',
  warning = 'var(--color-warning)',
}

/**
 * A list of all available brand colors
 */
export enum PaletteColors {
  'blue-000' = 'var(--color-blue-000)',
  'blue-100' = 'var(--color-blue-100)',
  'blue-200' = 'var(--color-blue-200)',
  'blue-300' = 'var(--color-blue-300)',
  'blue-400' = 'var(--color-blue-400)',
  'blue-500' = 'var(--color-blue-500)',
  'blue-600' = 'var(--color-blue-600)',
  'blue-700' = 'var(--color-blue-700)',
  'blue-800' = 'var(--color-blue-800)',
  'blue-900' = 'var(--color-blue-900)',
  'dark-000' = 'var(--color-dark-000)',
  'dark-100' = 'var(--color-dark-100)',
  'dark-200' = 'var(--color-dark-200)',
  'dark-300' = 'var(--color-dark-300)',
  'dark-400' = 'var(--color-dark-400)',
  'dark-500' = 'var(--color-dark-500)',
  'dark-600' = 'var(--color-dark-600)',
  'dark-700' = 'var(--color-dark-700)',
  'dark-800' = 'var(--color-dark-800)',
  'dark-900' = 'var(--color-dark-900)',
  gold = 'var(--color-tiers-gold)',
  'green-000' = 'var(--color-green-000)',
  'green-100' = 'var(--color-green-100)',
  'green-200' = 'var(--color-green-200)',
  'green-300' = 'var(--color-green-300)',
  'green-400' = 'var(--color-green-400)',
  'green-500' = 'var(--color-green-500)',
  'green-600' = 'var(--color-green-600)',
  'green-700' = 'var(--color-green-700)',
  'green-800' = 'var(--color-green-800)',
  'green-900' = 'var(--color-green-900)',
  'grey-000' = 'var(--color-grey-000)',
  'grey-100' = 'var(--color-grey-100)',
  'grey-200' = 'var(--color-grey-200)',
  'grey-300' = 'var(--color-grey-300)',
  'grey-400' = 'var(--color-grey-400)',
  'grey-500' = 'var(--color-grey-500)',
  'grey-600' = 'var(--color-grey-600)',
  'grey-700' = 'var(--color-grey-700)',
  'grey-800' = 'var(--color-grey-800)',
  'grey-900' = 'var(--color-grey-900)',
  'orange-000' = 'var(--color-orange-000)',
  'orange-100' = 'var(--color-orange-100)',
  'orange-200' = 'var(--color-orange-200)',
  'orange-300' = 'var(--color-orange-300)',
  'orange-400' = 'var(--color-orange-400)',
  'orange-500' = 'var(--color-orange-500)',
  'orange-600' = 'var(--color-orange-600)',
  'orange-700' = 'var(--color-orange-700)',
  'orange-800' = 'var(--color-orange-800)',
  'orange-900' = 'var(--color-orange-900)',
  'overlay-dark-000' = 'var(--color-overlay-dark-000)',
  'overlay-dark-100' = 'var(--color-overlay-dark-100)',
  'overlay-dark-200' = 'var(--color-overlay-dark-200)',
  'overlay-dark-400' = 'var(--color-overlay-dark-400)',
  'overlay-dark-600' = 'var(--color-overlay-dark-600)',
  'overlay-dark-800' = 'var(--color-overlay-dark-800)',
  'overlay-light-060' = 'var(--color-overlay-light-060)',
  'overlay-light-100' = 'var(--color-overlay-light-100)',
  'overlay-light-200' = 'var(--color-overlay-light-200)',
  'overlay-light-400' = 'var(--color-overlay-light-400)',
  'overlay-light-600' = 'var(--color-overlay-light-600)',
  'overlay-light-800' = 'var(--color-overlay-light-800)',
  'overlay-light-900' = 'var(--color-overlay-light-900)',
  'purple-000' = 'var(--color-purple-000)',
  'purple-100' = 'var(--color-purple-100)',
  'purple-200' = 'var(--color-purple-200)',
  'purple-300' = 'var(--color-purple-300)',
  'purple-400' = 'var(--color-purple-400)',
  'purple-500' = 'var(--color-purple-500)',
  'purple-600' = 'var(--color-purple-600)',
  'purple-700' = 'var(--color-purple-700)',
  'purple-800' = 'var(--color-purple-800)',
  'purple-900' = 'var(--color-purple-900)',
  'red-000' = 'var(--color-red-000)',
  'red-100' = 'var(--color-red-100)',
  'red-200' = 'var(--color-red-200)',
  'red-300' = 'var(--color-red-300)',
  'red-400' = 'var(--color-red-400)',
  'red-500' = 'var(--color-red-500)',
  'red-600' = 'var(--color-red-600)',
  'red-700' = 'var(--color-red-700)',
  'red-800' = 'var(--color-red-800)',
  'red-900' = 'var(--color-red-900)',
  'teal-000' = 'var(--color-teal-000)',
  'teal-100' = 'var(--color-teal-100)',
  'teal-200' = 'var(--color-teal-200)',
  'teal-300' = 'var(--color-teal-300)',
  'teal-400' = 'var(--color-teal-400)',
  'teal-500' = 'var(--color-teal-500)',
  'teal-600' = 'var(--color-teal-600)',
  'teal-700' = 'var(--color-teal-700)',
  'teal-800' = 'var(--color-teal-800)',
  'teal-900' = 'var(--color-teal-900)',
  'tiers-silver' = 'var(--color-tiers-silver)',
  transparent = 'transparent',
  'white-000' = '#FFFFFF',
  'white-060' = 'rgba(255, 255, 255, 0.06)',
  'white-100' = 'rgba(255, 255, 255, 0.1)',
  'white-200' = 'rgba(255, 255, 255, 0.2)',
  'white-400' = 'rgba(255, 255, 255, 0.4)',
  'white-600' = 'rgba(255, 255, 255, 0.6)',
  'white-800' = 'rgba(255, 255, 255, 0.8)',
}

export type Colors = PaletteColors | SemanticColors
