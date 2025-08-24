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

      {/* MUTA Image - First */}
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
            மறையா மாமணி<br />
            டாக்டர் சாமி கோவிந்தசாமி அவர்கள், மாணவர்களின் வாழ்வை உயர்த்திய அன்பும் ஒழுக்கமும் கொண்ட கல்விச் சேவகர்.<br />
            அவரது கல்விச் சேவை காரணமாக சிறந்த ஆசிரியர் (1975) எனப் பாராட்டப்பெற்று, பின்னர் பல பரிசுகள்—1984, 1990, 1992, 1997—ஆண்டு விழாக்களில் கௌரவிக்கப்பட்டார்.<br />
            தமிழ், அறிவு, சேவை—இவற்றை ஒன்றாகக் கூட்டி கல்லூரி/பள்ளி வளர்ச்சிக்காக உழைத்தவர்.<br />
            மாணவர்களை நல்ல மனிதர்களாக உருவாக்க வேண்டும் என்பதே அவரது குறிக்கோள்; அதற்காக அவர் வாழ்க்கையே ஒரு மாதிரி.<br />
            அவரது நினைவு என்றும் வாழ்க!
          </Typography>
        </Box>
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
            <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'serif',
                  lineHeight: 1.8,
                  textAlign: 'center',
                  fontSize: '1rem',
                  color: '#333'
                }}
              >
                நிறைந்து வாழ்கீர்!<br />
                முனைவர் [சரஸ்வதி] பன்னீர்செல்வம் அவர்களின் வாழ்த்து.<br />
                கல்வி என்பது வாழ்வின் ஒளி; இன்று பெற்ற வெற்றி உங்கள் உழைப்பின் பலன்.<br />
                மாணவர்களின் முயற்சிக்கும், ஆசிரியர்கள் அளித்த வழிகாட்டுதலுக்கும், பெற்றோர் தந்த ஆதரவுக்கும் என் நன்றி.<br />
                இவ்வெற்றி தொடரட்டும்; நல்ல எண்ணங்களோடு உயர்ந்து செல்லுங்கள்!<br />
                நம் பள்ளியின் புகழை உலகம் அறியச் செய்வோம்!
              </Typography>
            </Box>
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
            <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'serif',
                  lineHeight: 1.8,
                  textAlign: 'center',
                  fontSize: '1rem',
                  color: '#333'
                }}
              >
                (தொடரும் வாழ்த்து உரை)<br />
                பணத்தைச் குவிக்காமல் குணத்தைச் குவித்தவர்;<br />
                எப்போதும் நம்பிக்கையுடன் நெஞ்சம் நிரப்பியவர்.<br />
                நாம் இன்று எட்டிய உச்சிக்கு ஆசிரியர்களின் உழைப்பு காரணம்.<br />
                போதித்த முத்துக்கள்<br />
                அறிவையும் ஆர்வத்தையும் ஒழுங்காக வளர்த்துக் கொள்ளுங்கள்.<br />
                கேள்வி கேட்டு விவாதங்களைப் புரிந்து செயல்படுங்கள்.<br />
                நல்லவர்களின் தோழமையை வளர்த்துக் கொள்ளுங்கள்.<br />
                தோல்வியை பயப்படாதீர்கள்; அதை வெற்றிக்கான படியாகக் கொள்ளுங்கள்.<br />
                நேர்மையும் பொறுப்பும் உங்கள் வாழ்வின் அடித்தளம் ஆகட்டும்.
              </Typography>
            </Box>
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
            <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'serif',
                  lineHeight: 1.8,
                  textAlign: 'center',
                  fontSize: '1rem',
                  color: '#333'
                }}
              >
                உறவினராக<br />
                இயலாமையே நீங்கள் இல்லாமல் செய்கிறீர்கள் என்று நாங்கள் நினைக்கிறோம்—<br />
                சோம்பல் இல்லை; எதையும் எடுத்துச் செய்து விடும் உறுதி உங்களுக்கு உண்டு.<br />
                துயரம் உங்களைத் தொடாவிடினும், அயர்ச்சி உங்களை அளைப்பதில்லை;<br />
                ஆனால், உங்களுக்காக நாங்கள் ஒவ்வொரு நாளும் பெருமை கொள்கிறோம்.<br />
                நீங்கள் வீட்டுச் செலவையும் சமூகச் சேவையும் சேர்த்து நடத்தினீர்கள்;<br />
                அதற்காக உங்களுக்கு நன்றி கூற எங்கள் கண்கள் கண்ணீர் விடுகின்றன.<br />
                எப்போதும் அன்போடு நிற்கும் எங்கள் வாழ்த்துகள்!
              </Typography>
            </Box>
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
