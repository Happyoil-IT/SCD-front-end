import { styled } from '@mui/material/styles';
import '@fontsource/sarabun';
import { Button, IconButton, TableCell } from '@mui/material';
import theme from './theme';

const TablecellHeader = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.error.main,
    color: theme.palette.primary.contrastText, 
    textAlign: "center",
    borderRightColor: theme.palette.primary.contrastText,
    borderLeft: "1px solid "+theme.palette.primary.contrastText,
    fontWeight: "bold"
}));

const TablecellBody = styled(TableCell)(({ theme }) => ({
  textAlign: "center",
  borderLeft: "1px solid "+theme.palette.grey[500]
}));

const IconButtonError = styled(IconButton)(({theme}) => ({
  backgroundColor: theme.palette.primary.contrastText,
   '&:hover': 
   { 
    backgroundColor: theme.palette.error.main,
    color: theme.palette.primary.contrastText 
   }
}))

const IconButtonWarning = styled(IconButton)(({theme}) => ({
  backgroundColor: theme.palette.primary.contrastText,
   '&:hover': 
   { 
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.primary.contrastText 
   }
}))

const IconButtonSuccess = styled(IconButton)(({theme}) => ({
  backgroundColor: theme.palette.primary.contrastText,
   '&:hover': 
   { 
    backgroundColor: theme.palette.success.main,
    color: theme.palette.primary.contrastText 
   }
}))

export { TablecellBody,TablecellHeader,IconButtonError,IconButtonWarning,IconButtonSuccess }