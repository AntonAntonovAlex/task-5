import Button from '@mui/material/Button';
import { unparse } from 'papaparse';
import { FormattedMessage } from 'react-intl';
import { useCallback } from 'react';

export default function ExportButton({ bookList }) {
    const handleExport = useCallback(() => {
        const csv = unparse(bookList);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');

        link.href = URL.createObjectURL(blob);
        link.download = 'books.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, [bookList]);
    return (
        <Button variant="outlined" onClick={handleExport}>
            <FormattedMessage id='exportButton' />
        </Button>
    );
};