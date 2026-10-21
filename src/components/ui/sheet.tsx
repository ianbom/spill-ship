'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
export const Sheet=Dialog.Root;
export const SheetTrigger=Dialog.Trigger;
export const SheetClose=Dialog.Close;
export const SheetTitle=Dialog.Title;
export const SheetDescription=Dialog.Description;
export function SheetContent({children,className,...props}:React.ComponentProps<typeof Dialog.Content>){return <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 bg-black/55"/><Dialog.Content className={cn('fixed inset-y-0 right-0 z-50 w-[min(90vw,420px)] overflow-y-auto bg-white p-7 shadow-xl',className)} {...props}>{children}<Dialog.Close className="absolute right-5 top-6 flex size-11 items-center justify-center rounded-full border border-neutral-200" aria-label="Tutup menu"><X size={20}/></Dialog.Close></Dialog.Content></Dialog.Portal>}
