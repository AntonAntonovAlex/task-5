import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../i18n/languages';

export default function LocaleSwitcher({ currentLocale, handleChangeLocale }) {
    return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
            <FormattedMessage id='language' />
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentLocale}
          label="Language"
          onChange={handleChangeLocale}
          >
            {LANGUAGES.map(({ name, code }) => (
                <MenuItem key={code} value={code}>{name}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
    );
};