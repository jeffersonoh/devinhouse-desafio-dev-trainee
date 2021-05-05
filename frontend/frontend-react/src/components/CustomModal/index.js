import React from 'react';
import { Box, Modal, Paper } from '@material-ui/core';

export const CustomModal = (props) => {
    const { text, open, onclose, classNameModal, classNameBox, child } = props;
    return (
        <Modal open={open} onClose={onclose} className={classNameModal}>
            <Box className={classNameBox}>
                {child}
            </Box>
            
        </Modal>
    );
};
