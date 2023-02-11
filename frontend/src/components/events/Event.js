import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PetsIcon from '@mui/icons-material/Pets';
import '../categories/category.css'
const categories = [
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10px' }}>
        <PetsIcon style={{ fontSize: '18px' }} />
        <Typography style={{ fontSize: '13px', fontFamily: 'Poppins', fontWeight: 'bold' }} >Animals</Typography>
    </Box>,
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10px' }}>
        <PetsIcon style={{ fontSize: '18px' }} />
        <Typography style={{ fontSize: '13px', fontFamily: 'Poppins', fontWeight: 'bold' }} >Animals</Typography>
    </Box>,
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10px' }}>
        <PetsIcon style={{ fontSize: '18px' }} />
        <Typography style={{ fontSize: '13px', fontFamily: 'Poppins', fontWeight: 'bold' }} >Animals</Typography>
    </Box>,
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10px' }}>
        <PetsIcon style={{ fontSize: '18px' }} />
        <Typography style={{ fontSize: '13px', fontFamily: 'Poppins', fontWeight: 'bold' }} >Animals</Typography>
    </Box>,
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10px' }}>
        <PetsIcon style={{ fontSize: '18px' }} />
        <Typography style={{ fontSize: '13px', fontFamily: 'Poppins', fontWeight: 'bold' }} >Animals</Typography>
    </Box>,
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10px' }}>
        <PetsIcon style={{ fontSize: '18px' }} />
        <Typography style={{ fontSize: '13px', fontFamily: 'Poppins', fontWeight: 'bold' }} >Animals</Typography>
    </Box>,
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10px' }}>
        <PetsIcon style={{ fontSize: '18px' }} />
        <Typography style={{ fontSize: '13px', fontFamily: 'Poppins', fontWeight: 'bold' }} >Animals</Typography>
    </Box>,
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10px' }}>
        <PetsIcon style={{ fontSize: '18px' }} />
        <Typography style={{ fontSize: '13px', fontFamily: 'Poppins', fontWeight: 'bold' }} >Animals</Typography>
    </Box>,
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10px' }}>
        <PetsIcon style={{ fontSize: '18px' }} />
        <Typography style={{ fontSize: '13px', fontFamily: 'Poppins', fontWeight: 'bold' }} >Animals</Typography>
    </Box>,
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10px' }}>
        <PetsIcon style={{ fontSize: '18px' }} />
        <Typography style={{ fontSize: '13px', fontFamily: 'Poppins', fontWeight: 'bold' }} >Animals</Typography>
    </Box>
]
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {categories.map((category, idx) => {
                        return <Tab key={idx} label={category} {...a11yProps(idx)} />
                    })}
                </Tabs>
            </Box>
            {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
                return (
                    <TabPanel key={num} value={value} index={num}>
                        Item {num}
                    </TabPanel>
                )
            })} */}

        </Box>
    );
}