import React, { useEffect, useState } from 'react';
import { Document, Page, View, Text, Image } from '@react-pdf/renderer';
import { useCheckoutStore } from '@/stores/checkout-store';
import { useCartStore } from '@/stores/cart-store';
import { styles } from '@/lib/styles';

const PdfDocument = () => {
  const [checkoutState, setCheckoutState] = useState(useCheckoutStore.getState());
  const [cartState, setCartState] = useState(useCartStore.getState());

  useEffect(() => {
    const unsubscribeCheckout = useCheckoutStore.subscribe(setCheckoutState);
    const unsubscribeCart = useCartStore.subscribe(setCartState);

    return () => {
      unsubscribeCheckout();
      unsubscribeCart();
    };
  }, []);

  const {
    cliente, cnpj, cep, rua, numero, complemento, bairro, cidade, email, telefone, frete, transportadora, pagamento
  } = checkoutState;
  const { cart, subtotal, desconto, totalFinal, totalItems } = cartState;

  let pedidos = [];
  for (let item of cart) {
    pedidos.push(`${item.quantity} x ${item.product.linha} (${item.product.materias[item.selectedMaterialIndex]}): R$ ${(item.quantity * item.price).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  }
  const subtotalFormatado = subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const descontoReais = (subtotal * (desconto / 100)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const totalFinalFormatado = totalFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Image src="/assets/logo.png" style={styles.logo} />
          <View style={styles.companyInfo}>
            <Text>PLASTICOR BRINDES INDÚSTRIA E COMÉRCIO LTDA</Text>
            <Text>RUA ARTUR AZEVEDO, 79</Text>
            <Text>ENCRUZILHADA - CEP 52021190 - RECIFE-PE</Text>
            <Text>Fone: (81)3241-2410 / 3241-6276 - Fax: (81)3241-2410</Text>
            <Text>CNPJ/CPF: 097.573.189/0001-86 - Inscr. Estadual: 011226-45</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>CLIENTE: {cliente}</Text>
          <Text style={styles.text}>CNPJ/CPF: {cnpj}</Text>
          <Text style={styles.text}>CEP: {cep}</Text>
          <Text style={styles.text}>RUA: {rua}, Nº: {numero}</Text>
          <Text style={styles.text}>COMPLEMENTO: {complemento}</Text>
          <Text style={styles.text}>BAIRRO: {bairro}</Text>
          <Text style={styles.text}>CIDADE: {cidade}</Text>
          <Text style={styles.text}>E-MAIL: {email}</Text>
          <Text style={styles.text}>TELEFONE: {telefone}</Text>
          <Text style={styles.text}>FRETE: {frete}</Text>
          {frete === 'FOB' && <Text style={styles.text}>TRANSPORTADORA: {transportadora}</Text>}
          <Text style={styles.text}>FORMA DE PAGAMENTO: {pagamento}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Pedido</Text>
          <View style={styles.itemList}>
            {pedidos.map((pedido, index) => (
              <Text key={index} style={styles.item}>{pedido}</Text>
            ))}
          </View>
        </View>
        <View style={styles.total}>
          <Text>CAIXAS: {totalItems}</Text>
          <Text>SUBTOTAL: R$ {subtotalFormatado}</Text>
          <Text>DESCONTO: {desconto}% (-R$ {descontoReais})</Text>
          <Text>TOTAL: R$ {totalFinalFormatado}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
