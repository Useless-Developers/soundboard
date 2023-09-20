import { PropsWithChildren } from 'react'
import { Text } from 'react-native'
import { tw } from '@/lib'

type Props = PropsWithChildren<{ className?: string }>

/**
 * Re-export Text with Tailwind
 *
 * Had to call it Txt due to the way Typescript auto imports Text
 *
 * @param props
 * @param props.className - tailwind classNames
 * @param props.children
 */
export const Txt = ({ className, children }: Props) => (
  <Text style={tw.style(className)}>{children}</Text>
)
