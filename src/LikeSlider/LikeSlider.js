import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';
import { debounce } from 'lodash';
import { useCallback, useEffect } from 'react';

export default function LikeSlider({ handleChangeLikesValue }) {
    const debouncedChange = useCallback(
        debounce((value) => handleChangeLikesValue(value), 300),
        [handleChangeLikesValue]
    );

    useEffect(() => {
        return () => {
            debouncedChange.cancel();
        };
    }, [debouncedChange]);


    return (
        <Box sx={{ width: 200 }}>
            <Typography id="input-slider" color='rgba(0, 0, 0, 0.6)' gutterBottom>
                <FormattedMessage id='likes' />
            </Typography>
            <Slider
                aria-label="Likes slider"
                aria-labelledby="input-slider"
                defaultValue={0}
                onChange={(event, value) => debouncedChange(value)}
                valueLabelDisplay="auto"
                shiftStep={10}
                step={0.1}
                marks={true}
                min={0}
                max={10}
            />
        </Box>
    );
};