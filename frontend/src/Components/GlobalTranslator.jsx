import React, { useEffect, useState } from 'react';

const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'mr', label: 'Marathi' },
];

function GlobalTranslator() {
  const [language, setLanguage] = useState(localStorage.getItem('app_lang') || 'en');

  const hideGoogleBanner = () => {
    const selectors = [
      'iframe.goog-te-banner-frame',
      '.goog-te-banner-frame',
      '.goog-te-ftab',
      '#goog-gt-tt',
      '.goog-tooltip',
      '.goog-text-highlight',
      'body > .skiptranslate',
    ];

    selectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        element.style.display = 'none';
        element.style.visibility = 'hidden';
      });
    });

    document.body.style.top = '0px';
    document.documentElement.style.top = '0px';
  };

  const applyGoogleTranslation = (langCode) => {
    const combo = document.querySelector('.goog-te-combo');
    if (!combo) return false;
    combo.value = langCode;
    combo.dispatchEvent(new Event('change'));
    return true;
  };

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: SUPPORTED_LANGUAGES.map((item) => item.code).join(','),
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    const existingScript = document.querySelector('script[data-google-translate="true"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.setAttribute('data-google-translate', 'true');
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
    }

    const intervalId = window.setInterval(() => {
      hideGoogleBanner();
      if (applyGoogleTranslation(language)) {
        window.clearInterval(intervalId);
      }
    }, 500);

    const observer = new MutationObserver(() => {
      hideGoogleBanner();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('app_lang', selectedLanguage);

    if (!applyGoogleTranslation(selectedLanguage)) {
      const retryId = window.setInterval(() => {
        hideGoogleBanner();
        if (applyGoogleTranslation(selectedLanguage)) {
          window.clearInterval(retryId);
        }
      }, 300);
      window.setTimeout(() => window.clearInterval(retryId), 7000);
    }

    window.setTimeout(() => hideGoogleBanner(), 200);
    window.setTimeout(() => hideGoogleBanner(), 1000);
  };

  return (
    <>
      <div id="google_translate_element" className="hidden" />

      <div className="fixed right-4 bottom-4 z-[1000]">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm shadow-md"
          aria-label="Select language"
        >
          {SUPPORTED_LANGUAGES.map((item) => (
            <option key={item.code} value={item.code}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default GlobalTranslator;