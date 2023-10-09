import { useState } from 'react';

import PersonalDetails from './components/PersonalDetails';
import EducationDetails from './components/EducationDetails';
import ExperienceDetails from './components/ExperienceDetails';
import Preview from './components/Preview';
import Footer from './components/Footer';

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
      <div className='container m-auto mt-4 flex gap-x-20'>
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
