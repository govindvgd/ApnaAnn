import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const languages = [
  { code: "as", name: "অসমীয়া" },
  { code: "bn", name: "বাংলা" },
  { code: "bho", name: "भोजपुरी" },
  { code: "gu", name: "ગુજરાતી" },
  { code: "hi", name: "हिन्दी" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "ks", name: "كٲشُر" },
  { code: "kok", name: "कोंकणी" },
  { code: "ml", name: "മലയാളം" },
  { code: "mr", name: "मराठी" },
  { code: "ne", name: "नेपाली" },
  { code: "or", name: "ଓଡ଼ିଆ" },
  { code: "pa", name: "ਪੰਜਾਬੀ" },
  { code: "sa", name: "संस्कृतम्" },
  { code: "sd", name: "سنڌي" },
  { code: "ta", name: "தமிழ்" },
  { code: "te", name: "తెలుగు" },
  { code: "ur", name: "اردو" }
];

const translations = {
  en: { title: "Welcome to", description: "We connect farmers directly with consumers for fair trade." },
  hi: { title: " में आपका स्वागत है!", description: "हम किसानों को उपभोक्ताओं से सीधे जोड़ते हैं।" },
  bn: { title: "-এ আপনাকে স্বাগতম!", description: "আমরা কৃষকদের সরাসরি ভোক্তাদের সাথে সংযুক্ত করি।" },
  ta: { title: " அன்னுக்கு வரவேற்கிறோம்!", description: "நாங்கள் விவசாயிகளை நேரடியாக நுகர்வோருடன் இணைக்கிறோம்." },
  as: { title: "লৈ স্বাগতম!", description: "আমি কৃষকদের গ্ৰাহকৰ সৈতে প্ৰত্যক্ষভাৱে সংযোগ কৰোঁ।" },
  bho: { title: " में राउर स्वागत बा!", description: "हम किसान लोगन के सीधा ग्राहक से जोड़तानी।" },
  gu: { title: " માં આપનું સ્વાગત છે!", description: "અમે ખેડૂતને સીધા ગ્રાહકો સાથે જોડીએ છીએ." },
  kn: { title: " ಗೆ ಸ್ವಾಗತ!", description: "ನಾವು ರೈತರನ್ನು ನೇರವಾಗಿ ಗ್ರಾಹಕರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ." },
  ks: { title: " ہٲے خوش آمدید!", description: "سٲنہ کسانس مٲز نسیامون کھریدارنس کٲے جڑیو۔" },
  kok: { title: " कडे तुमचं स्वागत आहे!", description: "आमचं शेतकरी थेट ग्राहकांशी जोडतो." },
  ml: { title: "-ലേക്ക് സ്വാഗതം!", description: "ഞങ്ങൾ കർഷകരെ നേരിട്ട് ഉപഭോക്താക്കളുമായി ബന്ധിപ്പിക്കുന്നു." },
  mr: { title: " मध्ये आपले स्वागत आहे!", description: "आम्ही शेतकऱ्यांना थेट ग्राहकांशी जोडतो." },
  ne: { title: " मा स्वागत छ!", description: "हामी किसानहरूलाई प्रत्यक्ष रूपमा उपभोक्तासँग जोड्दछौं।" },
  or: { title: " ରେ ସ୍ଵାଗତ!", description: "ଆମେ କୃଷକମାନଙ୍କୁ ଗ୍ରାହକମାନଙ୍କ ସହିତ ଯୋଡ଼ିଥାଉ।" },
  pa: { title: " ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ!", description: "ਅਸੀਂ ਕਿਸਾਨਾਂ ਨੂੰ ਸਿੱਧਾ ਗ੍ਰਾਹਕਾਂ ਨਾਲ ਜੋੜਦੇ ਹਾਂ।" },
  sa: { title: " इत्यस्मिन् स्वागतम्!", description: "वयम् कृषकान् उपभोक्तृभिः सह सीधे संयोजयामः।" },
  sd: { title: " ۾ ڀليڪار!", description: "اسان هارين کي سڌو صارفين سان ڳنڍيون ٿا." },
  te: { title: " కు స్వాగతం!", description: "మేము రైతులను నేరుగా వినియోగదారులతో అనుసంధానం చేస్తాము." },
  ur: { title: " میں خوش آمدید!", description: "ہم کسانوں کو براہ راست صارفین سے جوڑتے ہیں۔" }
};

const Onboarding = () => {
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>


      <div className="onboarding-input-field-container flex flex-col">
        <div className="h-15"></div>
        <h3 className='onboarding-header'>{translations[language]?.title || translations.en.title}</h3>
        <h1 className="onboarding-welcome-title">ApnaAnn</h1>
        <h3 className="onboarding-welcome-subtitle">{translations[language]?.description || translations.en.description}</h3>
        <select
          className="onboarding-language-selector"
          onChange={handleLanguageChange}
          value={language}
        >
          <option value="en">English</option>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>

        <button
          className="onboarding-button"
          onClick={() => navigate("/onboarding/details")}
        >
          Continue
        </button>

      </div>
    </>
  );
};

export default Onboarding;
