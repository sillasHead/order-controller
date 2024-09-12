import { LucideDot, LucideInfo } from 'lucide-react'
import { Checkbox } from './ui/checkbox'

function Order() {
  return (
    <div className="flex items-start gap-5 [&:not(:first-child)]:mt-6">
      <div>
        <Client />
        <div className="ml-6">
          <Products />
        </div>
      </div>
      <LucideInfo className="text-secondary transition-all hover:cursor-pointer hover:text-primary" />
    </div>
  )
}

function Client() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      {/* className="flex italic line-through items-center gap-1 font-medium text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" */}
      <label
        htmlFor="terms"
        className="flex items-center gap-1 font-medium text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Cursino
        <LucideDot className="text-secondary" />
        <span className="">Rua Paulo Egídio Carvalho, 17</span>
      </label>
    </div>
  )
}

function Products() {
  const products = ['Cubo 5kg', 'Cubo 10kg', 'Britado 15kg']
  return products.map((p) => {
    return (
      <div
        key={p}
        className="flex w-full gap-2 font-medium text-muted-foreground text-sm leading-4"
      >
        <span className="w-24">{p}</span>
        <span className="text-secondary">{'>'}</span>
        <span className="w-8 text-center">10</span>
        <span className="text-secondary">{'>'}</span>
        <span className="w-40">R$10,00</span>
      </div>
    )
  })
}

export function Orders() {
  return (
    <div className="flex w-1/3">
      <Order />
    </div>
  )
}
