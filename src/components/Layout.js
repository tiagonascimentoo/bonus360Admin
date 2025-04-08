import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Collapse,
  Avatar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Campaign,
  CardGiftcard,
  LocalOffer,
  Inventory,
  Loyalty,
  Share,
  AccountBalanceWallet,
  EmojiEvents,
  Dashboard as DashboardIcon,
  ExpandLess,
  ExpandMore,
  Logout as LogoutIcon,
} from '@mui/icons-material';

// Importação das páginas
import Dashboard from '../pages/Dashboard';
import CriarCampanha from '../pages/campanhas/CriarCampanha';
import ListarCampanhas from '../pages/campanhas/ListarCampanhas';
import GerarCupons from '../pages/cupons/GerarCupons';
import GerenciarCupons from '../pages/cupons/GerenciarCupons';
// ... outras importações de páginas

const drawerWidth = 280;

const menuItems = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard',
  },
  {
    title: 'Campanhas',
    icon: <Campaign />,
    children: [
      { title: 'Criar Campanhas', path: '/campanhas/criar' },
      { title: 'Listar/Editar Campanhas', path: '/campanhas/listar' },
    ],
  },
  {
    title: 'Cupons',
    icon: <LocalOffer />,
    children: [
      { title: 'Gerar Cupons', path: '/cupons/gerar' },
      { title: 'Gerenciar Cupons', path: '/cupons/gerenciar' },
    ],
  },
  {
    title: 'Gift Cards',
    icon: <CardGiftcard />,
    children: [
      { title: 'Criar Gift Cards', path: '/gift-cards/criar' },
      { title: 'Consultar/Atualizar Gift Cards', path: '/gift-cards/consultar' },
    ],
  },
  {
    title: 'Product Bundling',
    icon: <Inventory />,
    children: [
      { title: 'Criar Bundles', path: '/bundles/criar' },
      { title: 'Gerenciar Bundles', path: '/bundles/gerenciar' },
    ],
  },
  {
    title: 'Programas de Fidelidade',
    icon: <Loyalty />,
    children: [
      { title: 'Configurar Programa', path: '/fidelidade/configurar' },
      { title: 'Visualizar Métricas', path: '/fidelidade/metricas' },
    ],
  },
  {
    title: 'Programas de Indicação',
    icon: <Share />,
    children: [
      { title: 'Configurar Programas', path: '/indicacao/configurar' },
      { title: 'Monitorar Indicações', path: '/indicacao/monitorar' },
    ],
  },
  {
    title: 'Carteiras Digitais',
    icon: <AccountBalanceWallet />,
    children: [
      { title: 'Gerenciar Carteiras', path: '/carteiras/gerenciar' },
      { title: 'Resgates e Recargas', path: '/carteiras/operacoes' },
    ],
  },
  {
    title: 'Gamificação',
    icon: <EmojiEvents />,
    children: [
      { title: 'Configurar Mecânicas', path: '/gamificacao/configurar' },
      { title: 'Visualizar Leaderboards', path: '/gamificacao/leaderboards' },
    ],
  },
];

function Layout() {
  const [open, setOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState({});
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  const handleSubmenuToggle = (title) => {
    setExpandedItems({
      ...expandedItems,
      [title]: !expandedItems[title],
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Bonus360 Admin
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar>{user?.name?.charAt(0)}</Avatar>
            <IconButton color="inherit" onClick={logout}>
              <LogoutIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            ...(open ? {} : { width: theme => theme.spacing(7) }),
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menuItems.map((item) => (
              <React.Fragment key={item.title}>
                <ListItem
                  button
                  onClick={() =>
                    item.children
                      ? handleSubmenuToggle(item.title)
                      : handleMenuItemClick(item.path)
                  }
                >
                  <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                  {item.children && (
                    expandedItems[item.title] ? <ExpandLess /> : <ExpandMore />
                  )}
                </ListItem>
                {item.children && (
                  <Collapse in={expandedItems[item.title]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((child) => (
                        <ListItem
                          button
                          key={child.title}
                          sx={{ pl: 4 }}
                          onClick={() => handleMenuItemClick(child.path)}
                        >
                          <ListItemText primary={child.title} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campanhas/criar" element={<CriarCampanha />} />
          <Route path="/campanhas/listar" element={<ListarCampanhas />} />
          <Route path="/cupons/gerar" element={<GerarCupons />} />
          <Route path="/cupons/gerenciar" element={<GerenciarCupons />} />
          {/* Adicione as outras rotas aqui */}
        </Routes>
      </Box>
    </Box>
  );
}

export default Layout; 