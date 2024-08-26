import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { Lightbulb, Shield, Gavel } from '@mui/icons-material';

const values = [
  {
    title: 'Innovation',
    description: "L’innovation doit être promue dans nos actions afin de trouver de meilleures options pour l’amélioration du service rendu au patient et sa famille et à l’étudiant.",
    icon: <Lightbulb sx={{ fontSize: 40 }} />,
    backgroundImage: 'url(https://th.bing.com/th/id/OIP.ehjwAkXr3il4NzgeB0g8fgHaE7?rs=1&pid=ImgDetMain)'
  },
  {
    title: 'Intégrité',
    description: "Nous devons en permanence faire preuve de transparence et d’intégrité à tous les niveaux afin de conquérir la confiance des patients, de leurs familles et des citoyens en général.",
    icon: <Shield sx={{ fontSize: 40 }} />,
    backgroundImage: 'url(https://www.stmarysregional.com/sites/stmarysregional.com/files/styles/art_directed_banner__mobile_600x600/public/ER_hero_cropped3_1700_0.jpg?itok=itTC98LK)' 
  },
  {
    title: 'Éthique',
    description: "Les pratiques de soins, de recherche et d’enseignements sont porteurs de risques éthiques. Ce risque doit être évalué en permanence.",
    icon: <Gavel sx={{ fontSize: 40 }} />,
    backgroundImage: 'url(https://th.bing.com/th/id/R.407fad4dd70ff2a650c99975681275cf?rik=TMBqU7sbnZK12w&riu=http%3a%2f%2fmedia.beam.usnews.com%2f8d%2f54%2fb93256134c9782148fc03484d795%2f160816-editorial.JPG&ehk=y37XvzcWLeJeu%2f96WpLhbUSRUjcV1U6rHNClCxmJ%2fQc%3d&risl=&pid=ImgRaw&r=0)' 
  },
];

const ValuesCard = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '2rem' }}>
      {values.map((value, index) => (
        <Card 
          key={index} 
          sx={{ 
            maxWidth: 300, 
            margin: '1rem', 
            boxShadow: 3,
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <CardContent
            sx={{
              position: 'relative',
              backgroundImage: value.backgroundImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',  // Ensure text color is white for better contrast
              padding: '1rem',
              borderRadius: '8px',
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(34, 106, 151, 0.5)', 
                zIndex: 1
              }
            }}
          >
            <IconButton sx={{ color: 'white', zIndex: 2 }}> 
              {value.icon}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ marginTop: 1, zIndex: 2 }}>
              {value.title}
            </Typography>
            <Typography variant="body2" color="white" sx={{ textAlign: 'center', marginTop: 1, zIndex: 2 }}>
              {value.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ValuesCard;
