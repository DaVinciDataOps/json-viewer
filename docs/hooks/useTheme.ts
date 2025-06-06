import type { JsonViewerTheme } from '@wim4you/json-viewer'
import { useTheme } from 'nextra-theme-docs'

export function useNextraTheme () {
  const { theme, systemTheme } = useTheme()
  const currentTheme = (theme === 'system' ? systemTheme : theme) as JsonViewerTheme
  return currentTheme
}
