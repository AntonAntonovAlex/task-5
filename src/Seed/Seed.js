import AutorenewIcon from '@mui/icons-material/Autorenew';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function Seed({ seedValue, handleChangeSeedValue, getRandomNumber }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
         <TextField
          id="outlined-number"
          label="Seed"
          value={seedValue}
          onChange={({ target: { value } }) => handleChangeSeedValue(value)}
          slotProps={{
            input: {
              endAdornment:
                <InputAdornment position="start">
                    <AutorenewIcon
                        onClick={() => handleChangeSeedValue(getRandomNumber())}
                    />
                </InputAdornment>,
            },
          }}
        />
      </Box>
    );
};