import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  LocalHospital as LocalHospitalIcon,
  Accessibility as AccessibilityIcon,
  VpnKey as VpnKeyIcon,
  LocalPharmacy as LocalPharmacyIcon,
  Event as EventIcon
} from '@mui/icons-material';



const AnnouncementCard: React.FC<{ title: string; images: string[]; innerRef: React.RefObject<HTMLDivElement> }> = ({ title, images, innerRef }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        color: 'white' 
      }}
      ref={innerRef}
    >
      <Carousel 
        showArrows={true}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        swipeable
        emulateTouch
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%' }} />
          </div>
        ))}
      </Carousel>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Découvrez nos nouveautés et nos annonces sur notre site.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          plus
        </Button>
      </CardActions>
    </Card>
  );
};

const ScientificArticleCard: React.FC<{ title: string; image: string; authors: string; publicationDate: string; innerRef: React.RefObject<HTMLDivElement> }> = ({
  title, image, authors, publicationDate, innerRef
}) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        color: 'white' 
      }}
      ref={innerRef}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Createur : {authors}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Publier: {publicationDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Plus
        </Button>
      </CardActions>
    </Card>
  );
};


const ObjectCard: React.FC<{ title: string; image: string; description: string }> = ({ title, image, description }) => {
  return (
    <Card sx={{ 
      maxWidth: 300, 
      margin: 2, 
      borderRadius: 2, 
      boxShadow: 3,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      color: 'white' 
    }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};



const imageUrls = [
  'https://outremers360.com/wp-media/uploads/2020/08/CHU-Sud-Reunion-1.jpg',
  'https://th.bing.com/th/id/R.def6ed4273125af85bbeecfa28e7c212?rik=LdNiWugCe4BKtw&riu=http%3a%2f%2fsaintpierre.delareunion.net%2ffiles%2f2012%2f02%2fghsr-saint-pierre-1024x390.jpg&ehk=cGxS43%2b%2fCdQ83H5POWJXKZr3H480lBJnY6xVPHISDbM%3d&risl=&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/R.407fad4dd70ff2a650c99975681275cf?rik=TMBqU7sbnZK12w&riu=http%3a%2f%2fmedia.beam.usnews.com%2f8d%2f54%2fb93256134c9782148fc03484d795%2f160816-editorial.JPG&ehk=y37XvzcWLeJeu%2f96WpLhbUSRUjcV1U6rHNClCxmJ%2fQc%3d&risl=&pid=ImgRaw&r=0',
  'https://www.thechicagoschool.edu/insightadmin/2019/08/How-to-BSN-1024x538.jpg'
];

// Composant NewCard1
const NewCard1: React.FC<{ height: number }> = ({ height }) => {
  return (
    <Card
      sx={{
        margin: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond noir transparent
        color: 'white', // Texte blanc pour contraste
        height: 370,
        width: 990,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{ 
          padding: 0, // Enlever les marges internes pour le contenu
          height: '100%' 
        }}
      >
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={5000} // Changer d'image toutes les 5 secondes
          swipeable
          emulateTouch
          dynamicHeight
        >
          {imageUrls.map((image, index) => (
            <div key={index} style={{ height: '100%' }}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', // Couvrir tout l'espace sans déformation
                  borderRadius: '8px' 
                }}
              />
            </div>
          ))}
        </Carousel>
        
      </CardContent>
      
    </Card>
  );
};






const NewCard2: React.FC = () => {
  return (
    <Card 
      sx={{
        margin: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: 'black',
        height: 600,
        width: 990,
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
      }}
    >
      <CardContent>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          CHU Mohammed VI - Oujda
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ fontWeight: 'bold', marginBottom: 4 }}>
          Il est soumis à la tutelle du Ministère de la Santé et du ministère des finances, il a été créé le 23 juillet 2018 ( décret n°2-17-589) en application de la loi 70-13 relative aux centres hospitalo-universitaires. Il prodigue des soins de niveau tertiaire, dispense des soins généraux, spécialisés et de sur spécialisés aux patients. Il ambitionne de faire de sa région un pôle médical d’excellence nationale et contribue, de façon significative, aux enjeux dans les domaines de la santé, de la science, du partage du savoir et du développement économique et social.
        </Typography>

      
        <Grid container spacing={2} sx={{ marginTop: 2, justifyContent: 'center' }}>
          <Grid item xs={12}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              Services
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocalHospitalIcon sx={{ fontSize: 60, color: 'primary.main', marginRight: 1 }} />
                  Hospital Services
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessibilityIcon sx={{ fontSize: 60, color: 'primary.main', marginRight: 1 }} />
                  Rehabilitation
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <VpnKeyIcon sx={{ fontSize: 60, color: 'primary.main', marginRight: 1 }} />
                  Security
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocalPharmacyIcon sx={{ fontSize: 60, color: 'primary.main', marginRight: 1 }} />
                  Pharmacy
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <EventIcon sx={{ fontSize: 60, color: 'primary.main', marginRight: 1 }} />
                  Appointment Scheduling
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Voir Détails
        </Button>
      </CardActions>
    </Card>
  );
};


const CardContainer: React.FC = () => {
  const [newCardHeight, setNewCardHeight] = useState<number>(0);

  const announcementRef = useRef<HTMLDivElement>(null);
  const scientificArticleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (announcementRef.current && scientificArticleRef.current) {
      const announcementHeight = announcementRef.current.offsetHeight;
      const scientificArticleHeight = scientificArticleRef.current.offsetHeight;
      setNewCardHeight(announcementHeight + scientificArticleHeight);
    }
  }, []);

  return (
    <Grid container spacing={2}>
       <Grid item xs={3}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <AnnouncementCard 
              title="Announcement"
              images={[
                'https://th.bing.com/th/id/R.bc9d1dcdd1a476c8894d40e50cd4225f?rik=kQc4KxCi9nioaA&riu=http%3a%2f%2fwww.cabinetvandamme.fr%2fwp-content%2fuploads%2f2020%2f08%2fsante.jpg&ehk=AFTzNXa%2bQ9oi%2fTh0tPdxDs9j5grx5aksj%2fT8BjYrM%2fc%3d&risl=&pid=ImgRaw&r=0',
                'https://sante-pratique-paris.fr/wp-content/uploads/2018/12/sante-jeannelight-adobestock-201932606-1024x681.jpg',
                'https://essahraa.net/sites/default/files/styles/large/public/xf0e77874-db9b-4dd5-baae-7fa9e12f0b7f.jpg,qitok=GQroW0MY.pagespeed.ic.DlOU2JUN8X.jpg',
              ]}
              innerRef={announcementRef}
            />
          </Grid>
          <Grid item>
            <ScientificArticleCard 
              title="Articles scientifique"
              image="https://i.pinimg.com/originals/ef/bd/28/efbd283570e07af34214ffbdf5066995.jpg"
              authors="crfeateur "
              publicationDate="2024-08-16"
              innerRef={scientificArticleRef}
            />
          </Grid>
          <Grid item>
            <ObjectCard 
              title="Offre de recrutement"
              image="https://th.bing.com/th/id/R.d0cea4003fe73e4bd3daf34adae24040?rik=TJN6Yn2OtyzXiw&riu=http%3a%2f%2fwww.ville-serignan.fr%2fwp-content%2fuploads%2f2018%2f02%2fOffres-d-emploi.jpg&ehk=z03RLG79Yeh1Gz%2bLGuAPi%2fs0dQHJqR0qDdahjTk9ejM%3d&risl=&pid=ImgRaw&r=0"
              description="Découvrez notre offre d'emploi et rejoignez-nous."
            />
          </Grid>
        </Grid>
      </Grid>

     
      <Grid item xs={6} container direction="column" spacing={2}>
        <Grid item>
          <NewCard1 height={newCardHeight} />
        </Grid>
        <Grid item>
          <NewCard2 />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardContainer;
