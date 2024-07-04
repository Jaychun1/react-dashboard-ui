import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import './setting.scss';

type Props = {
    setTheme: (theme: 'light' | 'dark') => void;
    theme: 'light' | 'dark';
};

const Setting: React.FC<Props> = ({ setTheme, theme }) => {
    const handleThemeChange = (e: SelectChangeEvent<'light' | 'dark'>) => {
        const selectedTheme = e.target.value as 'light' | 'dark';
        setTheme(selectedTheme); // Pass theme to parent component
        document.body.className = selectedTheme === 'dark' ? 'dark-mode' : '';
    };

    return (
        <div className="settings">
            <div className="settings-menu show">
                <FormControl variant="outlined" className={`theme-select ${theme}`}>
                    <InputLabel id="theme-select-label"></InputLabel>
                    <Select
                        labelId="theme-select-label"
                        id="theme-select"
                        value={theme}
                        onChange={handleThemeChange}
                        label="Theme"
                    >
                        <MenuItem value="light">Light</MenuItem>
                        <MenuItem value="dark">Dark</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default Setting;
