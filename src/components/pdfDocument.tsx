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

  const { cliente, cnpj, cep, rua, numero, complemento, bairro, cidade, email, telefone, frete, transportadora, pagamento, obs } = checkoutState;
  const { cart, subtotal, desconto, totalFinal, totalItems } = cartState;

  const subtotalFormatado = subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const descontoReais = (subtotal * (desconto / 100)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const totalFinalFormatado = totalFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  let pedidos = [];
  for (let item of cart) {
    pedidos.push(
      <View style={styles.headerPedidos} key={item.product.id}>
        <Text style={styles.pedidoItem1}>{item.product.codigos[item.selectedMaterialIndex]}</Text>
        <Text style={styles.pedidoItem2}>{item.product.linha} - ({item.product.materias[item.selectedMaterialIndex]})</Text>
        <Text style={styles.pedidoItem3}>{item.quantity}</Text>
        <Text style={styles.pedidoItem4}>R${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
        <Text style={styles.pedidoItem5}>R${(item.quantity * item.price).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
      </View>
    );
  }

  const currentDate = new Date();
  const date = currentDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

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
          <View style={styles.headerRight}>
            <View>
              <Text style={{ fontSize: 10, marginBottom: 45 }}>Data de emissão: {date}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10, fontWeight: 700 }}>PEDIDO DE VENDA</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}><Text>NOME:</Text> {cliente}</Text>
          <Text style={styles.text}><Text>ENDEREÇO:</Text> Rua {rua}, {numero}, {complemento}, {bairro}, {cidade}, {cep}</Text>
          <Text style={styles.text}><Text>E-MAIL:</Text> {email}</Text>
          <Text style={styles.text}><Text>TELEFONE:</Text> {telefone}</Text>
          <Text style={styles.text}><Text>CPF/CNPJ:</Text> {cnpj}</Text>
          <Text style={styles.text}><Text>FRETE:</Text> {frete}</Text>
          {frete === 'FOB' && <Text style={styles.text}><Text>TRANSPORTADORA:</Text> {transportadora}</Text>}
          <Text style={styles.text}><Text>FORMA DE PAGAMENTO:</Text> {pagamento}</Text>
          <Text style={styles.text}><Text>OBSERVAÇÃO:</Text> {obs}</Text>
        </View>
        <View>
          <View style={styles.tableHeader}>
            <Text style={styles.headerItem1}>CÓDIGO</Text>
            <Text style={styles.headerItem2}>DESCRIÇÃO</Text>
            <Text style={styles.headerItem3}>QTD</Text>
            <Text style={styles.headerItem4}>VALOR UNIT.</Text>
            <Text style={styles.headerItem5}>SUBTOTAL</Text>
          </View>
          {pedidos}
        </View>
        <View style={styles.total}>
          <Text><Text>CAIXAS:</Text> {totalItems}</Text>
          <Text><Text>SUBTOTAL:</Text> R$ {subtotalFormatado}</Text>
          <Text><Text>DESCONTO:</Text> {desconto}% (-R$ {descontoReais})</Text>
          <Text><Text>TOTAL:</Text> R$ {totalFinalFormatado}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
