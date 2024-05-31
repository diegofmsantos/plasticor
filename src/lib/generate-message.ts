import { useCheckoutStore } from '@/stores/checkout-store'
import { useCartStore } from '@/stores/cart-store'

export const generateMessage = () => {
    const { nome, cnpj, endereco, email, telefone, pagamento, frete } = useCheckoutStore.getState()
    const { cart } = useCartStore.getState()

    let pedidos = []
    let valorTotal = 0
    for (let item of cart) {
        valorTotal += (item.quantity * item.price)
        pedidos.push(`${item.quantity} x ${item.product.linha} (${item.product.materias[item.selectedMaterialIndex]}): R$ ${(item.quantity * item.price).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)
    }
    const valorTotalFormatado = valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return `**Dados do Cliente:**
  Nome: ${nome}
  CNPJ: ${cnpj}
  Endereço: ${endereco}
  E-mail: ${email}
  Telefone: ${telefone}
  Forma de pagamento: ${pagamento}
  Frete: ${frete}

  ----------------
  **Pedido**
  ${pedidos.join("\n")}
  **Total:** R$ ${valorTotalFormatado}
  `
}
