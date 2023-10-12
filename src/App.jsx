import { useState } from 'react';
import PersonalDetails from './components/PersonalDetails';
import EducationDetails from './components/EducationDetails';
import ExperienceDetails from './components/ExperienceDetails';
import Preview from './components/Preview';
import Footer from './components/Footer';
import html2canvas from 'html2canvas';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [educationInfo, setEducationInfo] = useState([]);

  const [expInfo, setExpInfo] = useState([]);

  function handleSetPersonalInfo(key, value) {
    setPersonalInfo({ ...personalInfo, [key]: value });
  }

  console.log(personalInfo);
  console.log(educationInfo);
  return (
    <>
      <div className='md:container m-auto mt-4 flex gap-x-20'>
        <div className='flex flex-col gap-9'>
          <PersonalDetails
            details={personalInfo}
            handler={handleSetPersonalInfo}
          />
          <EducationDetails
            details={educationInfo}
            setEducationInfo={setEducationInfo}
          />
          <ExperienceDetails details={expInfo} setExpInfo={setExpInfo} />
          <div className='flex justify-center'>
            <button
              className='flex items-center rounded-full bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-indigo-600'
              onClick={() => {const windowElement = document.getElementById('resume');

              // Use html2canvas to capture the screenshot
              html2canvas(windowElement).then(function (canvas) {
                // Create a temporary link element
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'screenshot.png';

                // Programmatically click the link to trigger the download
                link.click();
              });
}}
            >
              <svg
                className='mr-2 h-4 w-4 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
              </svg>
              Download
            </button>
          </div>
        </div>
        <Preview
          personal={personalInfo}
          educational={educationInfo}
          expInfo={expInfo}
        />
      </div>
      <Footer />
    </>
  );
}
export default App;
