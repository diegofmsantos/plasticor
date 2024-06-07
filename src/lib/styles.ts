import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 70,
  },
  companyInfo: {
    fontSize: 8,
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    fontWeight: 'bold'
  },
  section: {
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    borderTop: 1,
    borderBottom: 1
  },
  text: {
    fontSize: 10,
    fontStyle: 'bold',
    fontWeight: 'bold'
  },
  bold: {
    fontWeight: 'bold',
  },
  itemList: {
    fontSize: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    marginTop: 10,
    marginBottom: 10
  },
  item: {
    fontSize: 10
  },
  total: {
    fontWeight: 'extrabold',
    fontSize: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    borderBottom: 1,
    borderTop: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
  emissao: {
    fontSize: 8
  }
});