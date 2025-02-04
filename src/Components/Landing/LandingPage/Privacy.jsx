import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Privacy = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 text-wrap">
      <h1 className="text-2xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-center text-sm text-gray-500 mb-8">
        This Privacy Policy was last modified on 08th Dec 2023.
      </p>
      <p className="text-gray-800 mb-6">
        Fox Pilots Wear Private Limited ("us", "we", or "our") operates www.rwdy.in (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.
      </p>
      <p className="text-gray-800 mb-6">
        We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at www.rwdy.in.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Information Collection And Use</h2>
      <p className="text-gray-800 mb-6">
        While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include but is not limited to, your name, email address, postal address, and phone number ("Personal Information").
      </p>
      <p className="text-gray-800 mb-6">
        We require this information to provide you with better services, and in that process, contact you or deliver certain information via email, message, phone, or facsimile.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Log Data</h2>
      <p className="text-gray-800 mb-6">
        Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookies</h2>
      <p className="text-gray-800 mb-6">
        Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive.
      </p>
      <p className="text-gray-800 mb-6">
        Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Analytics</h2>
      <p className="text-gray-800 mb-6">
        We may use third-party Service providers to monitor and analyze the use of our Service.
      </p>
      {/* <ul className="list-disc pl-6 mb-6">
        <li>
          <a href="https://clicky.com/terms" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Clicky: Clicky is a web analytics service. Read the Privacy Policy for Clicky here
          </a>
        </li>
        <li>
          <a href="https://marketingplatform.google.com/about/analytics/terms/us/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Google Analytics: Google Analytics is a web analytics service. Read the Privacy Policy for Google Analytics here
          </a>
        </li>
      </ul> */}

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Do Not Track</h2>
      <p className="text-gray-800 mb-6">
        We support the Do Not Track browser setting. Do Not Track (or DNT) is a preference you can set in your browser to let the websites you visit know that you do not want them collecting certain information about you.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Security</h2>
      <p className="text-gray-800 mb-6">
        The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Links To Other Sites</h2>
      <p className="text-gray-800 mb-6">
        Our Site may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third-party's site. We strongly advise you to review the Privacy Policy of every site you visit.
      </p>
      <p className="text-gray-800 mb-6">
        Fox Pilots Wear Private Limited has no control over and assumes no responsibility for, the content, privacy policies, or practices of any third-party sites or services.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes To This Privacy Policy</h2>
      <p className="text-gray-800 mb-6">
        Fox Pilots Wear Private Limited may update this Privacy Policy from time to time on the Site. You are advised to review this Privacy Policy periodically for any changes.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
      <p className="text-gray-800 mb-6">
        If you have any questions about this Privacy Policy, please contact us.
      </p>
    </div>
  );
};

export default Privacy;
