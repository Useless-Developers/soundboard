import { PropsWithChildren } from 'react'
import { View as RNView } from 'react-native'
import { tw } from '@/lib'

type Props = PropsWithChildren<{ className: string }>

/**
 * Re-export View with Tailwind
 *
 * @param props
 * @param props.className - tailwind classNames
 * @param props.children
 */
export const View = ({ className, children }: Props) => (
  <RNView style={tw.style(className)}>{children}</RNView>
)
