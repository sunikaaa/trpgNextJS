import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';


type Anchor = 'left'
type ListObject = {
  name:string
  JSX:JSX.Element
  url:string
}

const ListObjectArr:ListObject[] = [{
  name:"test",
  JSX:<MenuIcon></MenuIcon>,
  url:"/"
}]

export default function TemporaryDrawer():JSX.Element {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div

      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {ListObjectArr.map((v) => (
          <ListItem  key={v.name}>
            <ListItemIcon>{v.JSX}</ListItemIcon>
            
            <ListItemText primary={v.name} />
          </ListItem>
        ))}
      </List>
      <Divider />

    </div>
  );

  return (
        <>
          <Button edge="start"  onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
          <Drawer anchor='left' open={state.left} onClose={toggleDrawer("left", false)}>
            {list('left')}
          </Drawer>
        </>
  );
}