// import { createTheme } from '@mui/material/styles';
// import { blue, lightBlue, lightGreen, purple } from '@mui/material/colors';

// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: purple
//         },
//         secondary: {
//             main: lightGreen
//         }
//     }
// });

import { createTheme } from '@mui/material/styles';
import { blue, lightBlue, lightGreen, purple } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: purple[500], // Use '500' or another shade from the 'purple' palette
        },
        secondary: {
            main: lightGreen[500], // Use '500' or another shade from the 'lightGreen' palette
        },
    },
});
