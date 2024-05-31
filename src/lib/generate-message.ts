import { useCartStore } from "@/stores/cart-store"
import { useCheckoutStore } from "@/stores/checkout-store"

export const generateMessage = () => {
    const { nome, cnpj, endereco, email, telefone, pagamento, frete } = useCheckoutStore(state => state)
    const { cart } = useCartStore(state => state)

    let pedidos = []
    let valorTotal = 0
    for (let item of cart) {
        valorTotal += (item.quantity * item.price)
        pedidos.push(`${item.quantity} x ${item.product.linha} (${item.product.materias[item.selectedMaterialIndex]}): R$ ${valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)
    }
    const valorTotalFormatado = valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    console.log(nome, cnpj, endereco, email, telefone, pagamento, frete, cart)

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
