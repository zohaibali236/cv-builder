import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({
  details,
  handleSetShowForm,
  setHeight,
  setEducationInfo,
  edit,
  setEdit,
}) {
  const [data, SetData] = useState({
    instituteName: edit !== -1 ? details[edit].instituteName : '',
    degreeName: edit !== -1 ? details[edit].degreeName : '',
    start: edit !== -1 ? details[edit].start : '',
    end: edit !== -1 ? details[edit].end : '',
  });
  console.log(edit);
  console.log(details);

  return (
    <form
      className='mt-2 grid grid-cols-1 gap-y-4'
      action='#'
      onSubmit={(e) => e.preventDefault()}
    >
      <div className='flex flex-col'>
        <label className='text-lg font-semibold' htmlFor='institutename'>
          Institute Name
        </label>
        <input
          id='institutename'
          className='border-0 border-b-2 border-gray-200 bg-slate-50 ps-0 pt-2 focus-within:border-gray-800  focus:ring-0'
          type='text'
          placeholder='Example University'
          value={data.instituteName}
          onChange={(e) => {
            SetData({ ...data, instituteName: e.target.value });
          }}
        />
      </div>

      <div className='flex flex-col'>
        <label className='text-lg font-semibold' htmlFor='degree'>
          Degree Name
        </label>
        <input
          id='degree'
          className='border-0 border-b-2 border-gray-200 bg-slate-50 ps-0 pt-2 focus-within:border-gray-800  focus:ring-0'
          type='email'
          placeholder='Bachelors in Software Engineering'
          value={data.degreeName}
          onChange={(e) => {
            SetData({ ...data, degreeName: e.target.value });
          }}
        />
      </div>

      <div className='flex flex-col'>
        <label className='text-lg font-semibold' htmlFor='start'>
          Start Date
        </label>
        <input
          id='start'
          className='border-0 border-b-2 border-gray-200 bg-slate-50 ps-0 pt-2 focus-within:border-gray-800  focus:ring-0'
          type='text'
          placeholder='2021'
          value={data.start}
          onChange={(e) => {
            SetData({ ...data, start: e.target.value });
          }}
        />
      </div>

      <div className='flex flex-col'>
        <label className='text-lg font-semibold' htmlFor='end'>
          End Date
        </label>
        <input
          id='end'
          className='border-0 border-b-2 border-gray-200 bg-slate-50 ps-0 pt-2 focus-within:border-gray-800  focus:ring-0'
          type='text'
          placeholder='2025'
          value={data.end}
          onChange={(e) => {
            SetData({ ...data, end: e.target.value });
          }}
        />
      </div>
      <div className={'flex gap-4' + (edit === -1 ? ' justify-center' : '')}>
        {edit !== -1 && (
          <button
            type='button'
            className='w-24 select-none rounded-full bg-red-600 p-2 text-white outline duration-500 hover:bg-inherit hover:text-red-700 hover:outline-1'
            onClick={() => {
              details.splice(edit, 1);
              setEducationInfo([...details]);
              handleSetShowForm();
              setEdit(-1);
            }}
          >
            Remove
          </button>
        )}
        <div className='flex gap-3'>
          <button
            type='button'
            className='w-24 select-none rounded-full bg-green-500 p-2 text-white outline duration-500 hover:bg-inherit hover:text-green-500 hover:outline-1'
            onClick={() => {
              if (edit !== -1) {
                details[edit].instituteName = data.instituteName;
                details[edit].degreeName = data.degreeName;
                details[edit].start = data.start;
                details[edit].end = data.end;

                setEducationInfo([...details]);
                setEdit(-1);
              } else {
                data.id = uuidv4();
                setEducationInfo([...details, data]);
              }

              SetData({
                instituteName: '',
                degreeName: '',
                start: '',
                end: '',
              });
              setHeight('initial');
              handleSetShowForm();
            }}
          >
            {edit !== -1 ? 'Save' : 'Add'}
          </button>
          <button
            type='button'
            className='w-24 select-none rounded-full bg-red-500 p-2 text-white outline duration-500 hover:bg-inherit hover:text-red-500 hover:outline-1'
            onClick={() => {
              handleSetShowForm();
              setHeight('initial');
              setEdit(-1);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default function EducationDetails({
  className,
  details,
  setEducationInfo,
}) {
  const [edit, setEdit] = useState(-1);
  const [height, setHeight] = useState('initial');
  const [expandEducation, setExpandEducation] = useState(false);
  const [showForm, setShowForm] = useState(false);

  console.log(edit);

  function handleSetShowForm() {
    setShowForm(!showForm);
  }
  return (
    <div
      className='ml-4 flex w-96 flex-grow-0 flex-col justify-between rounded-xl border-2 bg-slate-50 p-8'
      style={{ height }}
    >
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>
          <FontAwesomeIcon className='mr-2' icon={faUserGraduate} />
          Education
        </h1>
        <div
          className='flex cursor-pointer items-center'
          onClick={() => {
            setExpandEducation(!expandEducation);
            setHeight('initial');
          }}
        >
          <svg
            className='h-8 w-6 transform fill-current transition duration-150 ease-in-out hover:-rotate-180'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'></path>
          </svg>
        </div>
      </div>
      {expandEducation &&
        (showForm === true ? (
          <Form
            details={details}
            setEducationInfo={setEducationInfo}
            handleSetShowForm={handleSetShowForm}
            setHeight={setHeight}
            edit={edit}
            setEdit={setEdit}
          />
        ) : (
          <>
            {details.length > 0 && (
              <div className='grid-col-1 mb-4 mt-4 grid gap-y-2'>
                {details.map((detail, index) => (
                  <div
                    className='cursor-pointer border-2 bg-white p-2 text-sm font-semibold hover:scale-105'
                    key={detail.id}
                    onClick={() => {
                      setShowForm(true);
                      setEdit(index);
                    }}
                  >
                    {detail.instituteName}
                  </div>
                ))}
              </div>
            )}
            <div className='mt-8 flex justify-center'>
              <button
                className='w-24 select-none rounded-full bg-blue-500 p-2 text-white outline duration-500 hover:bg-inherit hover:text-blue-500 hover:outline-1'
                onClick={() => {
                  setShowForm(true);
                  setHeight('30rem');
                }}
              >
                Add
              </button>
            </div>
          </>
        ))}
    </div>
  );
}
