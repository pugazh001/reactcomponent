import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FaShoppingCart, FaBox, FaUsers, FaCog, FaChartLine } from 'react-icons/fa';
import CountUp from 'react-countup';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// === Static Sample Data ===
const staticChartData = {
  line: {
    labels: ['May 3', 'May 4', 'May 5', 'May 6', 'May 7', 'May 8', 'May 9'],
    datasets: [
      {
        label: 'Daily Bookings',
        data: [3, 5, 8, 4, 7, 6, 9],
        fill: false,
        borderColor: '#3f51b5',
        tension: 0.1,
      },
    ],
  },
  bar: {
    labels: ['Flight', 'Hotel', 'TravelPackage', 'Visa'],
    datasets: [
      {
        label: 'Booking Types',
        data: [12, 8, 5, 3],
        backgroundColor: '#3f51b5',
      },
    ],
  },
  stats: [
    { icon: 'dashboard', title: 'Total Bookings', value: 28 },
    { icon: 'shopping', title: 'Flight', value: 12 },
    { icon: 'box', title: 'Hotel', value: 8 },
    { icon: 'users', title: 'Travel', value: 5 },
    { icon: 'cog', title: 'Visa', value: 3 },
  ],
};

// === Card UI Component ===
const StatCard = ({ icon, title, value }) => (
  <Paper elevation={3} sx={{ p: 2, borderRadius: 2, display: 'flex', alignItems: 'center' }}>
    <Box sx={{ mr: 2, fontSize: 30, color: 'primary.main' }}>{icon}</Box>
    <Box>
      <Typography variant="subtitle2" fontWeight={600}>
        {title}
      </Typography>
      <Typography variant="h6" fontWeight={700}>
        <CountUp end={value} duration={2} separator="," />
      </Typography>
    </Box>
  </Paper>
);

// === Main Static Dashboard ===
const WelcomeDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Welcome, ...!
      </Typography>

      {/* Stat Cards */}
      <Grid container spacing={2} sx={{ mb: 3, justifyContent: 'center' }}>
        {staticChartData.stats.map((item, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={2.4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 300 }}>
              <StatCard
                icon={
                  item.icon === 'dashboard' ? <FaChartLine /> :
                  item.icon === 'shopping' ? <FaShoppingCart /> :
                  item.icon === 'box' ? <FaBox /> :
                  item.icon === 'users' ? <FaUsers /> :
                  <FaCog />
                }
                title={item.title}
                value={item.value}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Charts */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Daily Bookings
            </Typography>
            <Line data={staticChartData.line} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Booking Types Distribution
            </Typography>
            <Bar data={staticChartData.bar} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeDashboard;
