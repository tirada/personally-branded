import React from 'react';
import './App.css';
import { OptionsPanel } from './components/OptionsPanel';
import { Dialog, DialogTitle, DialogContent, createMuiTheme, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { SelectedContent } from './components/SelectedContent';

const App: React.FC = () => {
  const theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
    <Dialog open={true} scroll='paper' >
      <DialogTitle>Create Video</DialogTitle>
      <DialogContent dividers>
        <Grid container>
          <Grid item xs={8}>
            <OptionsPanel />
          </Grid>
          <Grid item xs={4}>
            <SelectedContent />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
    </ThemeProvider>
  );
}

export default App;
