import React from 'react';
import { Box, Modal } from '@material-ui/core';

export const CustomModal = (props) => {
    const { open, onclose, classNameModal, classNameBox, child } = props;
    return (
        <Modal open={open} onClose={onclose} className={classNameModal}>
            <Box className={classNameBox}>
                {child}
            </Box>
        </Modal>
    );
};
