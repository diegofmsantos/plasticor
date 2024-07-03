import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  page: { padding: 30 },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10
  },

  headerRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  logo: { width: 150, height: 70 },

  companyInfo: {
    fontSize: 8,
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },

  section: {
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    borderTop: '1px dashed black',
    borderBottom: '1px dashed black',
  },

  text: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '20px',
    fontSize: 9,
    marginRight: '50px'
  },
  
  tableHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },

  headerItem1: {
    width: '50px',
    fontSize: 9,
    marginBottom: 10
  },

  headerItem2: {
    width: '200px',
    fontSize: 9,
    marginBottom: 10
  },

  headerItem3: {
    width: '30px',
    fontSize: 9,
    marginBottom: 10
  },

  headerItem4: {
    width: '100px',
    fontSize: 9,
    marginBottom: 10
  },

  headerItem5: {
    width: '100px',
    fontSize: 9,
    marginBottom: 10
  },

  headerPedidos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },

  pedidoItem1: {
    width: '50px',
    fontSize: 8,
    marginBottom: 10
  },

  pedidoItem2: {
    width: '200px',
    fontSize: 8,
    marginBottom: 10
  },

  pedidoItem3: {
    width: '30px',
    fontSize: 8,
    marginBottom: 10
  },

  pedidoItem4: {
    width: '100px',
    fontSize: 8,
    marginBottom: 10
  },

  pedidoItem5: {
    width: '100px',
    fontSize: 8,
    marginBottom: 10
  },

  total: {
    fontSize: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    borderTop: '1px dashed black',
    borderBottom: '1px dashed black',
    paddingBottom: 10,
    paddingTop: 10,
  }
})
