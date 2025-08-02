# Content Strategy & Data Models
## Professor's Legacy Website - Content Structure and Guidelines

### 📋 Overview
This document defines the exact data structures, content guidelines, and sample data for the professor's website.

---

## 🗂️ Data Structure Definitions

### 1. Student Data Model
**File**: `/public/data/core/students.json`

```json
{
  "students": [
    {
      "id": "student_001",
      "slug": "rajesh-kumar-1995",
      "name": {
        "en": "Dr. Rajesh Kumar",
        "ta": "டாக்டர் ராஜேஷ் குமார்"
      },
      "photo": "/media/images/students/individual/rajesh-kumar-1995.jpg",
      "graduationYear": 1995,
      "dissertationTopic": {
        "en": "Machine Learning Applications in Agricultural Prediction Systems",
        "ta": "விவசாய முன்னறிவிப்பு அமைப்புகளில் இயந்திர கற்றல் பயன்பாடுகள்"
      },
      "dissertationAbstract": {
        "en": "This research explores the application of machine learning algorithms...",
        "ta": "இந்த ஆராய்ச்சி இயந்திர கற்றல் வழிமுறைகளின் பயன்பாட்டை ஆராய்கிறது..."
      },
      "currentPosition": {
        "en": "Professor of Computer Science",
        "ta": "கணினி அறிவியல் பேராசிரியர்"
      },
      "currentInstitution": {
        "en": "Massachusetts Institute of Technology",
        "ta": "மாசசூசெட்ஸ் தொழில்நுட்ப நிறுவனம்"
      },
      "currentLocation": {
        "en": "Boston, Massachusetts, USA",
        "ta": "பாஸ்டன், மாசசூசெட்ஸ், அமெரிக்கா"
      },
      "country": "USA",
      "achievements": [
        {
          "en": "IEEE Fellow (2010)",
          "ta": "IEEE பெல்லோ (2010)"
        },
        {
          "en": "Best Paper Award at ICML 2015",
          "ta": "ICML 2015 இல் சிறந்த ஆய்வுக்கட்டுரை விருது"
        }
      ],
      "linkedIn": "https://linkedin.com/in/rajeshkumar",
      "email": "rajesh.kumar@mit.edu",
      "personalWebsite": "https://rajeshkumar.mit.edu",
      "researchInterests": [
        {
          "en": "Machine Learning",
          "ta": "இயந்திர கற்றல்"
        },
        {
          "en": "Agricultural Technology",
          "ta": "விவசாய தொழில்நுட்பம்"
        }
      ],
      "publications": [
        {
          "id": "pub_001",
          "title": {
            "en": "Deep Learning for Crop Yield Prediction",
            "ta": "பயிர் விளைச்சல் முன்னறிவிப்புக்கான ஆழ்ந்த கற்றல்"
          },
          "journal": "Nature Machine Intelligence",
          "year": 2023,
          "coAuthors": ["Dr. Sarah Johnson", 
          "doi": "10.1038/s42256-023-00123-4",
          "citationCount": 156
        }
      ],
      "careerTimeline": [
        {
          "id": "career_001",
          "year": 1995,
          "title": {
            "en": "PhD in Computer Science",
            "ta": "கணினி அறிவியலில் முனைவர் பட்டம்"
          },
          "institution": {
            "en": "Anna University",
            "ta": "அண்ணா பல்கலைக்கழகம்"
          },
          "location": "Chennai, India",
          "type": "education"
        },
        {
          "id": "career_002",
          "year": 1996,
          "title": {
            "en": "Assistant Professor",
            "ta": "உதவி பேராசிரியர்"
          },
          "institution": {
            "en": "Stanford University",
            "ta": "ஸ்டான்ஃபோர்ட் பல்கலைக்கழகம்"
          },
          "location": "California, USA",
          "type": "position"
        }
      ],
      "mentorshipStory": {
        "en": "Under the professor's guidance, I learned not just technical skills but also the importance of perseverance and ethical research practices...",
        "ta": "பேராசிரியரின் வழிகாட்டுதலின் கீழ், நான் தொழில்நுட்ப திறன்களை மட்டுமல்ல, விடாமுயற்சி மற்றும் நெறிமுறை ஆராய்ச்சி நடைமுறைகளின் முக்கியத்துவத்தையும் கற்றுக்கொண்டேன்..."
      },
      "testimonial": {
        "en": "Professor's mentorship transformed my understanding of research and life. His guidance continues to inspire my work today.",
        "ta": "பேராசிரியரின் வழிகாட்டுதல் ஆராய்ச்சி மற்றும் வாழ்க்கை பற்றிய எனது புரிதலை மாற்றியது. அவரது வழிகாட்டுதல் இன்றும் எனது பணியை ஊக்குவிக்கிறது."
      },
      "gallery": [
        "/media/images/students/individual/rajesh-kumar-graduation-1995.jpg",
        "/media/images/students/individual/rajesh-kumar-mit-2010.jpg"
      ],
      "featured": true,
      "lastUpdated": "2025-08-02"
    }
  ]
}
```

### 2. Timeline Data Model
**File**: `/public/data/core/timeline.json`

```json
{
  "timeline": [
    {
      "id": "timeline_001",
      "year": 1950,
      "date": "1950-03-15",
      "title": {
        "en": "Birth in Rural Village",
        "ta": "கிராமத்தில் பிறப்பு"
      },
      "description": {
        "en": "Born in a small village in Tamil Nadu, beginning a journey that would inspire generations of students.",
        "ta": "தமிழ்நாட்டின் ஒரு சிறிய கிராமத்தில் பிறந்தார், இது மாணவர்களின் தலைமுறைகளை ஊக்குவிக்கும் பயணத்தின் தொடக்கம்."
      },
      "category": "personal",
      "image": "/media/images/timeline/1950-birth-village.jpg",
      "location": {
        "en": "Rural Tamil Nadu, India",
        "ta": "கிராமப்புற தமிழ்நாடு, இந்தியா"
      },
      "significance": {
        "en": "Humble beginnings that shaped his understanding of education's transformative power",
        "ta": "கல்வியின் மாற்றும் சக்தி பற்றிய அவரது புரிதலை வடிவமைத்த எளிய தொடக்கம்"
      }
    },
    {
      "id": "timeline_002",
      "year": 1975,
      "date": "1975-06-20",
      "title": {
        "en": "Move to City for Higher Education",
        "ta": "உயர் கல்விக்காக நகரத்திற்கு இடம்பெயர்தல்"
      },
      "description": {
        "en": "Left village to pursue higher education in Chennai, marking the beginning of academic journey.",
        "ta": "சென்னையில் உயர் கல்வியைத் தொடர கிராமத்தை விட்டு வெளியேறினார், இது கல்வி பயணத்தின் தொடக்கமாக அமைந்தது."
      },
      "category": "academic",
      "image": "/media/images/timeline/1975-move-to-city.jpg",
      "location": {
        "en": "Chennai, Tamil Nadu, India",
        "ta": "சென்னை, தமிழ்நாடு, இந்தியா"
      }
    }
  ]
}
```

### 3. Gallery Image Data Model
**File**: `/public/data/gallery/images.json`

```json
{
  "images": [
    {
      "id": "gallery_001",
      "filename": "graduation-ceremony-1995.jpg",
      "title": {
        "en": "PhD Graduation Ceremony 1995",
        "ta": "1995 முனைவர் பட்டமளிப்பு விழா"
      },
      "description": {
        "en": "Annual graduation ceremony where 8 students received their PhD degrees under the professor's supervision.",
        "ta": "பேராசிரியரின் மேற்பார்வையில் 8 மாணவர்கள் முனைவர் பட்டம் பெற்ற வருடாந்திர பட்டமளிப்பு விழா."
      },
      "story": {
        "en": "This was a particularly memorable graduation as it marked the largest batch of PhD students to graduate in a single year. The ceremony was held in the main auditorium with families traveling from across the country to attend.",
        "ta": "இது குறிப்பாக நினைவுகூரத்தக்க பட்டமளிப்பு ஏனெனில் இது ஒரே ஆண்டில் பட்டம் பெற்ற மிகப்பெரிய முனைவர் மாணவர் குழுவைக் குறித்தது."
      },
      "category": "academic",
      "subcategory": "graduation_ceremonies",
      "dateTaken": "1995-06-15",
      "dateDescription": {
        "en": "June 15, 1995 - Annual Graduation Day",
        "ta": "ஜூன் 15, 1995 - வருடாந்திர பட்டமளிப்பு நாள்"
      },
      "location": {
        "en": "University Main Auditorium, Chennai",
        "ta": "பல்கலைக்கழக பிரதான அரங்கம், சென்னை"
      },
      "venue": {
        "en": "Dr. A.P.J. Abdul Kalam Auditorium",
        "ta": "டாக்டர் ஏ.பி.ஜே. அப்துல் கலாம் அரங்கம்"
      },
      "occasion": {
        "en": "Annual PhD Graduation Ceremony",
        "ta": "வருடாந்திர முனைவர் பட்டமளிப்பு விழா"
      },
      "people": [
        {
          "name": "Dr. Rajesh Kumar",
          "relationship": "PhD Graduate",
          "position": "Graduating PhD in Computer Science",
          "currentStatus": "Professor at MIT, USA",
          "isMainSubject": true
        },
        {
          "name": "Mrs. Priya Kumar",
          "relationship": "Family member",
          "description": "Dr. Rajesh's wife",
          "isMainSubject": false
        }
      ],
      "photographer": "University Photography Department",
      "tags": ["graduation", "phd", "ceremony", "students", "1995"],
      "featured": true,
      "thumbnail": "/media/images/thumbnails/medium/graduation-ceremony-1995.jpg",
      "fullSize": "/media/images/gallery/academic/graduation-ceremony-1995.jpg",
      "historicalSignificance": {
        "en": "Marked the beginning of the professor's most productive period in PhD supervision",
        "ta": "பேராசிரியரின் முனைவர் மேற்பார்வையில் மிகவும் பயனுள்ள காலகட்டத்தின் தொடக்கத்தைக் குறித்தது"
      },
      "relatedPhotos": ["gallery_002", "gallery_003"]
    }
  ]
}
```

---

## 📝 Content Guidelines

### Tamil Content Standards
- **Respectful Titles**: Use appropriate Tamil honorifics (டாக்டர், பேராசிரியர்)
- **Academic Terms**: Maintain English terms for technical concepts with Tamil explanations
- **Cultural Context**: Include cultural references and local context
- **Font Requirements**: Use Tamil Unicode (UTF-8) with Noto Sans Tamil font

### English Content Standards
- **Academic Tone**: Professional, scholarly language appropriate for international audience
- **Accessibility**: Clear, concise language for non-native speakers
- **Technical Accuracy**: Precise academic and technical terminology
- **International Context**: Consider global academic audience

### Image Naming Conventions
```
Format: category-subcategory-year-description.jpg
Examples:
- academic-graduation-1995-phd-ceremony.jpg
- personal-family-1980-village-home.jpg
- students-individual-rajesh-kumar-1995.jpg
- timeline-1975-move-to-city.jpg
```

### Data Validation Rules
- All dates in ISO format (YYYY-MM-DD)
- Required fields: id, name, category
- Image paths must start with /media/
- All user-facing content must have both en and ta versions
- URLs must be valid and accessible
- Email addresses must be valid format

---

## 🔄 Content Update Workflow

### Adding New Student
1. Create student photos in `/media/images/students/individual/`
2. Add student data to `/students.json`
3. Create individual student page content
4. Update student statistics
5. Test multilingual display

### Adding New Photos
1. Upload original to appropriate category folder
2. Generate thumbnails (small: 150x150, medium: 300x300, large: 600x600)
3. Add metadata to `/gallery/images.json`
4. Include people identification
5. Add Tamil and English descriptions

### Content Review Process
1. **Technical Review**: Validate JSON structure
2. **Language Review**: Check Tamil and English accuracy
3. **Cultural Review**: Ensure cultural sensitivity
4. **Academic Review**: Verify academic accuracy
5. **Final Approval**: Stakeholder sign-off

---

**Last Updated**: August 2, 2025  
**Version**: 1.0
