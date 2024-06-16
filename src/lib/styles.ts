import { Font, StyleSheet } from '@react-pdf/renderer';
import RobotoBold from '../../public/fonts/Roboto-Bold.ttf'

Font.register({
  family: 'RobotoBold',
  fonts: [
    {
      src: RobotoBold,
      fontWeight: 'bold'
    }
  ],
});

export const styles = StyleSheet.create({
  page: { padding: 30 },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
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
    borderTop: 1,
    borderBottom: 1,
  },

  text: { fontSize: 10 },

  itemList: {
    fontSize: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    marginTop: 10,
    marginBottom: 10,
  },

  total: {
    fontSize: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    borderBottom: 1,
    borderTop: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },

  bold: { fontFamily: 'RobotoBold', fontWeight: 'bold' }, // Adicionando a classe bold para o estilo de texto em negrito
});
