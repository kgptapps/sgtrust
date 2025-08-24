import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  Box,
  Grid
} from '@mui/material';

const SGTrustPage: React.FC = () => {

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: 'primary.main',
          fontWeight: 600,
          mb: 4
        }}
      >
        Memorial Tribute
      </Typography>

      {/* New Top Image - First */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Box
          component="img"
          src="/media/images/memorialphotos/topofthepage.jpeg"
          alt="Memorial Tribute - Top of Page"
          onClick={() => window.open('/media/images/memorialphotos/topofthepage.jpeg', '_blank')}
          sx={{
            cursor: 'pointer',
            maxWidth: '100%',
            width: '800px',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 1
          }}
        />
      </Box>

      {/* MUTA Image - Second */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Box
          component="img"
          src="/media/images/memorialphotos/MUTA.jpeg"
          alt="Memorial Tribute - MUTA"
          onClick={() => window.open('/media/images/memorialphotos/MUTA.jpeg', '_blank')}
          sx={{
            cursor: 'pointer',
            maxWidth: '100%',
            width: '800px',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 1
          }}
        />
      </Box>

      {/* Three Page Images Side by Side */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ cursor: 'pointer', boxShadow: 2 }} onClick={() => window.open('/media/images/memorialphotos/page1.jpeg', '_blank')}>
              <CardMedia
                component="img"
                height="400"
                image="/media/images/memorialphotos/page1.jpeg"
                alt="Memorial Page 1"
                sx={{ objectFit: 'contain' }}
              />
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ cursor: 'pointer', boxShadow: 2 }} onClick={() => window.open('/media/images/memorialphotos/page2.jpeg', '_blank')}>
              <CardMedia
                component="img"
                height="400"
                image="/media/images/memorialphotos/page2.jpeg"
                alt="Memorial Page 2"
                sx={{ objectFit: 'contain' }}
              />
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ cursor: 'pointer', boxShadow: 2 }} onClick={() => window.open('/media/images/memorialphotos/page3.jpeg', '_blank')}>
              <CardMedia
                component="img"
                height="400"
                image="/media/images/memorialphotos/page3.jpeg"
                alt="Memorial Page 3"
                sx={{ objectFit: 'contain' }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* PDF Images at Bottom */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ cursor: 'pointer', boxShadow: 2 }} onClick={() => window.open('/media/images/memorialphotos/pdf1.jpeg', '_blank')}>
              <CardMedia
                component="img"
                height="400"
                image="/media/images/memorialphotos/pdf1.jpeg"
                alt="Memorial PDF Document 1"
                sx={{ objectFit: 'contain' }}
              />
            </Card>
            <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'serif',
                  lineHeight: 1.8,
                  textAlign: 'center',
                  fontSize: '1.1rem',
                  color: '#333'
                }}
              >
                உயர்நிலை பெற்றுள்ளர்!<br />
                சாதி, மதம் பாராமல் சரிநிகராய் எல்லோர்க்கும்<br />
                நீதியுடன் உதவி செய்த நிகரற்ற நித்திலமே!<br />
                பாதியிலே உம் வாழ்வு பரிதவிக்கப் போனதையா!<br />
                ஆதியெனத் திகழ்ந்திட்ட ஆசானே! வாழியேவே!<br />
                மீண்டும் பிறப்பெடுத்து வாழ்வளிக்க வருவாயா?<br />
                வேண்டும் கல்வியினை வேண்டுவோர்க்குத் தருவாயா?<br />
                வேண்டாக் கோட்டை கோவிந்த சாமியே!<br />
                அண்டாது உம்புகழ் இனி இந்த பூமியே!<br />
                🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏<br />
                நீங்கா நினைவுகளுடன்,<br />
                ஆ. இரா. பாரதராஜா
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ cursor: 'pointer', boxShadow: 2 }} onClick={() => window.open('/media/images/memorialphotos/pdf2.jpeg', '_blank')}>
              <CardMedia
                component="img"
                height="400"
                image="/media/images/memorialphotos/pdf2.jpeg"
                alt="Memorial PDF Document 2"
                sx={{ objectFit: 'contain' }}
              />
            </Card>
            <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'serif',
                  lineHeight: 1.8,
                  textAlign: 'center',
                  fontSize: '1.1rem',
                  color: '#333'
                }}
              >
                டாக்டர் சா.கோ.சாமி கவிதை<br />
                டாக்டர். சாமி. கோவிந்தசாமி<br />
                அவர்களுக்குப் புகழ் அஞ்சலி!<br />
                💐💐💐💐💐💐💐💐💐💐<br />
                கல்வித்துறை பெற்ற கலங்கரை விளக்கம்!<br />
                கோவிந்தசாமி வாழ்வு அதை விளக்கும்!<br />
                செல்வச் சீமானாய் வாழ்ந்திட்ட மாமா!<br />
                சென்னைப் பல்கலைச் செயலர் கோமான்!<br />
                சாந்தமனப் பாராமல் சோர்ந்து உதவியே,<br />
                வந்தார்க்குக் கல்வி தந்த வள்ளல்! குருவே!<br />
                அமுதசுரபி நிகரான அன்பான மனையாளாம்<br />
                குமுதமலர்ச் சிரிப்புக் குணவதி மணிமேகலை<br />
                குன்றாத ஒளிவிளக்காய், குடும்பத்துத் தரவிளக்காய்,<br />
                நன்றாக உபசரிக்கும் நற்றமிழ் அறவிளக்காய்,<br />
                ஒன்றாக விளங்கிட்ட மனைவளைப் பெற்றவேர்!<br />
                வென்றாளும் பிள்ளைகளைக் வித்தகராய் செய்தவேர்!<br />
                கல்விஇயல் வள்ளலோர்கள்!<br />
                கருத்தான பிள்ளைகளாம் செல்வி, சந்திரா, சாமிநாதன்<br />
                சிறப்புற வைத்தவேர்!<br />
                முனைவர் பட்டம் பெற்ற உம்முடைய மாணவர்கள்<br />
                அனைவருமே உலகெங்கும் உயர்நிலை பெற்றுள்ளனர்!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SGTrustPage;
