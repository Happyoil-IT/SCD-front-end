import { styled } from '@mui/material/styles';
import '@fontsource/sarabun';
import { TableCell } from '@mui/material';
import theme from './theme';

const TablecellHeader = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.error.main,
    color: theme.palette.primary.contrastText, 
    textAlign: "center",
    borderRightColor: theme.palette.primary.contrastText,
    borderLeft: "1px solid "+theme.palette.primary.contrastText
}));

const TablecellBody = styled(TableCell)(({ theme }) => ({
  textAlign: "center",
  borderLeft: "1px solid "+theme.palette.grey[500]
}));

export { TablecellBody,TablecellHeader }