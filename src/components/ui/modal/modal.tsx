import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Close } from '@/assets/icons'
import { Typography } from '@/components'
import * as ModalPrimitive from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './modal.module.scss'

export type ModalProps = {
  className?: string
  title?: string
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof ModalPrimitive.Root>

export const Modal = forwardRef<ElementRef<typeof ModalPrimitive.Root>, ModalProps>(
  ({ children, className, onOpenChange, open, title, trigger, ...props }: ModalProps, ref) => {
    const classNames = {
      close: clsx(s.close),
      content: clsx(s.content, className),
      overlay: clsx(s.overlay),
      root: clsx(s.root),
      title: clsx(s.title),
    }

    return (
      <ModalPrimitive.Root onOpenChange={onOpenChange} open={open}>
        {trigger}
        <ModalPrimitive.Portal>
          <ModalPrimitive.Overlay className={classNames.overlay} ref={ref}>
            <div className={classNames.root}>
              <Typography.H3 className={classNames.title}>
                {title}
                <ModalPrimitive.Close aria-label={'Close'} className={classNames.close}>
                  <Close size={24} />
                </ModalPrimitive.Close>
              </Typography.H3>
              <ModalPrimitive.Content {...props} className={classNames.content}>
                {children}
              </ModalPrimitive.Content>
            </div>
          </ModalPrimitive.Overlay>
        </ModalPrimitive.Portal>
      </ModalPrimitive.Root>
    )
  }
)

type ModalTriggerProps = {
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<typeof ModalPrimitive.Trigger>
export const ModalTrigger = forwardRef<
  ElementRef<typeof ModalPrimitive.Trigger>,
  ModalTriggerProps
>(({ children, className }: ModalTriggerProps, ref) => {
  const classNames = {
    trigger: clsx(s.trigger, className),
  }

  return (
    <ModalPrimitive.Trigger asChild className={classNames.trigger} ref={ref}>
      {children}
    </ModalPrimitive.Trigger>
  )
})
