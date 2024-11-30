import MuiInput from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { FormattedMessage } from 'react-intl';

export default function Review({ handleChangeReviewValue, reviewValue }) {
    return (
      <FormControl variant="outlined">
        <FormHelperText id="outlined-weight-text" >
          <FormattedMessage id='review' />
        </FormHelperText>
        <MuiInput
            value={reviewValue}
            onChange={(event) => handleChangeReviewValue(parseFloat(event.target.value ? event.target.value : 0))}
            size="small"
            inputProps={{
            step: 0.1,
            min: 0,
            max: 999,
            type: 'number',
            }}
        />
      </FormControl>
    )
};