import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from 'react-i18next';

function Others() {
  const { t } = useTranslation()

  return (
    <Box sx={{textAlign:'center', margin:8,fontSize:30}}>
    </Box>
  );
}

export default Others