import React, { useState } from "react";
import Button from 'components/button';
import CookieTabButton from "./CookieTabButton";

function CookieMessage({selectedTab}){
  switch (selectedTab) {
    case 'consent':
        return(
          <>
            <h3 className="text-3xl font-medium	leading-6 text-gray-900 mb-5" id="modal-title">Cookie Consent</h3>
            <div className="mt-2">
            <p className="text-sm text-gray-500">
              This privacy statement applies to miniorange websites describing how we handle the personal information. When you visit any website, it may store or retrieve the
              information on your browser, mostly in the form of the cookies. This information might be about you, your preferences or your device and is mostly used to make the
              site work as you expect it to. The information does not directly identify you, but it can give you a more personalized web experience. Click on the category headings to check how we handle the cookies. For the
              privacy statement of our solutions you can refer to the <a href="https://www.miniorange.com/terms-and-policies/privacy-policy" className="text-blue-500">privacy policy.</a>
            </p>
            </div>
          </>
        );
    case 'mandatory':
        return(
          <>
            <h3 className="text-3xl font-medium	leading-6 text-gray-900 mb-5" id="modal-title">Strictly Necessary Cookies</h3>
            <div className="mt-2">
            <p className="text-sm text-gray-500">
              Necessary cookies help make a website fully usable by enabling the basic functions like site navigation, logging in, filling forms, etc. The cookies used for the functionality do not store any personal identifiable information. 
              However, some parts of the website will not work properly without the cookies.
            </p>
            </div>
          </>
        );
    case 'performance':
        return(
          <>
            <h3 className="text-3xl font-medium	leading-6 text-gray-900 mb-5" id="modal-title">Performance Cookies</h3>
            <div className="mt-2">
            <p className="text-sm text-gray-500">
              These cookies only collect aggregated information about the traffic of the website including - visitors, sources, page clicks and views, etc. This allows us to know more about our most and least popular pages along with user interaction on the actionable elements and hence letting us improve the performance of our website as well as our services.
            </p>
            </div>
          </>
        );
    default:
        return(
          <>
            <h3 className="text-3xl font-medium	leading-6 text-gray-900 mb-5" id="modal-title"> Cookie Consent</h3>
            <div className="mt-2">
            <p className="text-sm text-gray-500">
              This privacy statement applies to miniorange websites describing how we handle the personal information. When you visit any website, it may store or retrieve the
              information on your browser, mostly in the form of the cookies. This information might be about you, your preferences or your device and is mostly used to make the
              site work as you expect it to. The information does not directly identify you, but it can give you a more personalized web experience. Click on the category headings to check how we handle the cookies. For the
              privacy statement of our solutions you can refer to the <a href="https://www.miniorange.com/terms-and-policies/privacy-policy" className="text-blue-500">privacy policy.</a>
            </p>;
            </div>
          </>
        );
    }
}

export default function CookiePreferences({ closeCookieDialog }) {
  const [selectedTab, setSelectedTab] = useState('consent');

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="flex flex-col relative rounded-lg bg-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl" style={{minHeight: "70vh"}}>
            <div className="modal-heading p-5 bg-inverted">
              <h3 className="text-slate-50 font-normal text-center text-2xl">Cookie Preferences</h3>
            </div>
            <div className="modal-body sm:flex grow bg-white border-b-2">
              <div className="modal-sidebar sm:border-r-2 sm:w-1/4 min-w-max flex flex-col">
                <CookieTabButton tabName="consent" tabText='Cookie Consent' setSelectedTab={setSelectedTab}/>
                <CookieTabButton tabName="mandatory" tabText='Strictly Necessary Cookies' setSelectedTab={setSelectedTab}/>
                <CookieTabButton tabName="performance" tabText='Performance Cookies' setSelectedTab={setSelectedTab}/>
              </div>
              <div className="modal-content border-t-2 sm:border-t-0 p-5">
                <div className="mt-3 sm:mt-0 sm:text-left">
                  <CookieMessage selectedTab={selectedTab}/>
                </div>
              </div>
            </div>
            <div className="modal-btncontainer bg-gray-50 px-4 py-3 sm:flex sm:px-6">
              <Button text='I understand' onClick={closeCookieDialog} className='my-sm mx-auto' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
