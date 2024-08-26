import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface MotivationBoxProps {
  onOpenForm: () => void;
}

const MotivationBox: React.FC<MotivationBoxProps> = ({ onOpenForm }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '250px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '0px',
        borderLeft: '5px solid transparent',
        position: 'relative',
        height: '150px',
        width: '940px',
        marginRight: 0,
        zIndex: 1,
        borderTopLeftRadius: '400px',
        borderBottomLeftRadius: '400px',
        backgroundImage: `
          linear-gradient(rgba(64, 155, 212, 0.5), rgba(64, 155, 212, 0.5)),
          url('https://emfps.fr/content/uploads/2021/04/Hopital.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Typography
        sx={{
          color: 'white',
          fontSize: '1.2rem',
          marginRight: '20px',
          flexGrow: 1,
          lineHeight: 1.5,
          textAlign: 'justify',
          fontWeight: 'bold',
          maxWidth: '70%',
        }}
      >
        Vos plaintes ne sont pas juste des déclarations, mais aussi des conseils et des remarques qui nous permettent de mieux vous servir ainsi que de nous améliorer. Si quelque chose ne vous satisfait pas, n'hésitez pas à déposer une plainte. Nous sommes là pour écouter et améliorer notre service pour vous et pour nous.
      </Typography>
      <Button variant="contained" color="primary" onClick={onOpenForm}>
        Ajouter une Plainte
      </Button>
    </Box>
  );
};

export default MotivationBox;
