import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Card, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import LogoutIcon from '@mui/icons-material/Logout';
import HearingIcon from '@mui/icons-material/Hearing';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import PeopleIcon from '@mui/icons-material/People';
import { useRecoilValue } from 'recoil';
import { setLoggedUser, useLoggedUser } from '../common/user';
import { useNavigate } from 'react-router';

export function MainDrawer(props: { open: boolean, setOpen: (v: boolean) => void }) {
    const user = useLoggedUser();
    const navigate = useNavigate();
    return (<Drawer variant='temporary' anchor="left" open={props.open} onClose={() => props.setOpen(false)}>
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => { }}
            onKeyDown={() => { }}
        >
            <Box style={{ padding: 20 }}>
                {user?.name} {user?.role !== "user" ? `[${user?.role}]` : ""}
            </Box>

            <List component="nav">
                <ListItem disablePadding onClick={() => navigate("/record")}>
                    <ListItemButton>
                        <ListItemIcon>
                            <MicIcon />
                        </ListItemIcon>
                        <ListItemText primary="New recording" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => navigate("/myrecordings")}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AudioFileIcon />
                        </ListItemIcon>
                        <ListItemText primary="My recordings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HearingIcon />
                        </ListItemIcon>
                        <ListItemText primary="Give feedback" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding onClick={() => setLoggedUser(null)}>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
            {/* /        </Toolbar> */}
        </Box>
    </Drawer>);
}