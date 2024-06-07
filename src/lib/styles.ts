import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 80,
  },
  companyInfo: {
    fontSize: 10,
    textAlign: 'right',
  },
  section: {
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
  },
  itemList: {
    marginTop: 10,
  },
  item: {
    marginBottom: 5,
  },
  total: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
