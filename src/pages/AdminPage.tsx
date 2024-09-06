
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Card, CardContent, Grid, Paper } from '@mui/material';
import { RootState } from '../store/store';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { EmojiEvents, SentimentDissatisfied, SentimentNeutral, SentimentSatisfied, SentimentVeryDissatisfied } from '@mui/icons-material';

const AdminPage: React.FC = () => {
  const ratings = useSelector((state: RootState) => state.ratings.ratings);

  const ratingCounts = {
    veryDissatisfied: ratings.filter((r: number) => r === 1).length,
    dissatisfied: ratings.filter((r: number) => r === 2).length,
    neutral: ratings.filter((r: number) => r === 3).length,
    satisfied: ratings.filter((r: number) => r === 4).length,
    verySatisfied: ratings.filter((r: number) => r === 5).length,
  };

  const chartData = [
    { rating: 'Très insatisfaits', count: ratingCounts.veryDissatisfied },
    { rating: 'Insatisfaits', count: ratingCounts.dissatisfied },
    { rating: 'Neutres', count: ratingCounts.neutral },
    { rating: 'Satisfaits', count: ratingCounts.satisfied },
    { rating: 'Très satisfaits', count: ratingCounts.verySatisfied },
  ];

 
  const barColors = ['#ff6f61', '#ffb74d', '#fdd835', '#4caf50', '#2196f3'];

 
  const pieColors = ['#ff6f61', '#ffb74d', '#fdd835', '#4caf50', '#2196f3'];

  return (
    <Box sx={{ padding: 3, bgcolor: 'background.default', minHeight: '100vh' }}>
      

     
      <Box sx={{ marginTop: 6 }}> 
        
        <Grid container spacing={2} justifyContent="center">
          
          <Grid item xs={12} sm={6} md={2} display="flex" justifyContent="center">
            <Card sx={{ 
              width: 150, 
              height: 150,
              borderRadius: '50%', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 3, 
              bgcolor: '#f8d7da', 
              border: '1px solid #f5c6cb',
              ':hover': {
                boxShadow: 6,
                transform: 'scale(1.02)',
                transition: 'transform 0.3s',
              }
            }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <SentimentVeryDissatisfied color="error" fontSize="large" />
                <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
                  Très Insatisfaits
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#721c24' }}>
                  {ratingCounts.veryDissatisfied}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2} display="flex" justifyContent="center">
            <Card sx={{ 
              width: 150, 
              height: 150,
              borderRadius: '50%', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 3, 
              bgcolor: '#fff3cd', 
              border: '1px solid #ffeeba',
              ':hover': {
                boxShadow: 6,
                transform: 'scale(1.02)',
                transition: 'transform 0.3s',
              }
            }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <SentimentDissatisfied color="warning" fontSize="large" />
                <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
                  Insatisfaits
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#856404' }}>
                  {ratingCounts.dissatisfied}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2} display="flex" justifyContent="center">
            <Card sx={{ 
              width: 150, 
              height: 150,
              borderRadius: '50%', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 3, 
              bgcolor: '#e2e3e5', 
              border: '1px solid #d6d6d6',
              ':hover': {
                boxShadow: 6,
                transform: 'scale(1.02)',
                transition: 'transform 0.3s',
              }
            }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <SentimentNeutral color="disabled" fontSize="large" />
                <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
                  Neutres
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6c757d' }}>
                  {ratingCounts.neutral}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2} display="flex" justifyContent="center">
            <Card sx={{ 
              width: 150, 
              height: 150,
              borderRadius: '50%', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 3, 
              bgcolor: '#d4edda', 
              border: '1px solid #c3e6cb',
              ':hover': {
                boxShadow: 6,
                transform: 'scale(1.02)',
                transition: 'transform 0.3s',
              }
            }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <SentimentSatisfied color="success" fontSize="large" />
                <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
                  Satisfaits
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#155724' }}>
                  {ratingCounts.satisfied}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2} display="flex" justifyContent="center">
            <Card sx={{ 
              width: 150, 
              height: 150,
              borderRadius: '50%', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 3, 
              bgcolor: '#cce5ff', 
              border: '1px solid #b8daff',
              ':hover': {
                boxShadow: 6,
                transform: 'scale(1.02)',
                transition: 'transform 0.3s',
              }
            }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <EmojiEvents color="primary" fontSize="large" />
                <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
                  Très Satisfaits
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#004085' }}>
                  {ratingCounts.verySatisfied}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

     
      <Box sx={{ marginTop: 6 }}> 
      
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <BarChart width={500} height={300} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rating" />
                <YAxis />
                <Tooltip />
                <Legend />
                {chartData.map((_, index) => (
                  <Bar key={index} dataKey="count" fill={barColors[index % barColors.length]} />
                ))}
              </BarChart>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PieChart width={500} height={300}>
                <Pie
                  data={chartData}
                  dataKey="count"
                  nameKey="rating"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill={pieColors[0]}
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminPage;
