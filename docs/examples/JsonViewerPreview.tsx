import type { JsonViewerProps } from '@wim4you/json-viewer'
import { JsonViewer } from '@wim4you/json-viewer'
import type { FC } from 'react'

import { useNextraTheme } from '../hooks/useTheme'

export const JsonViewerPreview: FC<JsonViewerProps> = (props) => {
  const theme = useNextraTheme()
  return (
    <JsonViewer
      theme={theme}
      sx={{
        fontSize: 12
      }}
      value={props.value}
    />
  )
}
