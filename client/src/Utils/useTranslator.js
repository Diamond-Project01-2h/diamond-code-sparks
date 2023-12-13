import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const TRANSLATE_API_URL = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';

export const useTranslator = () => {
  const { language } = useContext(LanguageContext);

  const translate = async (text) => {
    try {
      const response = await fetch(`${TRANSLATE_API_URL}&to=${language}`, {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': '68d9655c31ed4ebca9aec1fa49a4fb93', // Replace with your actual key
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Region': 'eastus', // Replace with your resource region
        },
        body: JSON.stringify([{ Text: text }]),
      });

      const data = await response.json();
      if (response.ok) {
        return data[0].translations[0].text;
      } else {
        throw new Error(data.error.message || 'Translation failed');
      }
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Fallback to the original text
    }
  };

  return translate;
};
