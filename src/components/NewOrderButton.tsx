import { LucideDot, LucidePlusCircle } from 'lucide-react'

export function NewOrderButton() {
  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="ml-3 w-[1px] flex-grow bg-secondary" />
      <div className="flex items-center gap-1">
        <LucidePlusCircle className="text-secondary transition-all hover:cursor-pointer hover:text-primary" />
        <LucideDot />
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm">
          16/02/2001
        </code>
      </div>
      <div className="ml-3 w-[1px] flex-grow bg-secondary" />
    </div>
  )
}
