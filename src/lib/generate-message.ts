import { useCheckoutStore } from '@/stores/checkout-store'
import { useCartStore } from '@/stores/cart-store'

export const generateMessage = () => {
    const { nome, cnpj, endereco, email, telefone, pagamento, frete } = useCheckoutStore.getState()
    const { cart, subtotal, desconto, totalFinal } = useCartStore.getState()

    let pedidos = []
    for (let item of cart) {
        pedidos.push(`${item.quantity} x ${item.product.linha} (${item.product.materias[item.selectedMaterialIndex]}): R$ ${(item.quantity * item.price).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)
    }
    const subtotalFormatado = subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const descontoReais = (subtotal * (desconto / 100)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const totalFinalFormatado = totalFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return `
   *DADOS DO CLIENTE:*
   
*CLIENTE:* ${nome}

*CNPJ/CPF:* ${cnpj}

*Endereço:* ${endereco}

*E-MAIL:* ${email}

*TELEFONE:* ${telefone}

*Forma de Pagamento:* ${pagamento}

*Frete:* ${frete}

--------------------------------------

*PEDIDO:*

${pedidos.join("\n")}

*Caixas:* Total de caixas

*Subtotal:* R$ ${subtotalFormatado}

*Desconto:* - R$ ${descontoReais}

*Total:* R$ ${totalFinalFormatado}
  `
}
