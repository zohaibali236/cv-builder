import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({
  details,
  handleSetShowForm,
  setHeight,
  setExpInfo,
  edit,
  setEdit,
}) {
  const [data, SetData] = useState({
    name: edit !== -1 ? details[edit].name : '',
    position: edit !== -1 ? details[edit].position : '',
    start: edit !== -1 ? details[edit].start : '',
    end: edit !== -1 ? details[edit].end : '',
    desc: edit !== -1 ? details[edit].desc : '',
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
        <label className='text-lg font-semibold' htmlFor='company'>
          Company Name
        </label>
        <input
          id='company'
          className='border-0 border-b-2 border-gray-200 bg-slate-50 ps-0 pt-2 focus-within:border-gray-800  focus:ring-0'
          type='text'
          placeholder='Example Company'
          value={data.name}
          onChange={(e) => {
            SetData({ ...data, name: e.target.value });
          }}
        />
      </div>

      <div className='flex flex-col'>
        <label className='text-lg font-semibold' htmlFor='pos'>
          Position Name
        </label>
        <input
          id='pos'
          className='border-0 border-b-2 border-gray-200 bg-slate-50 ps-0 pt-2 focus-within:border-gray-800  focus:ring-0'
          type='text'
          placeholder='AI/ML Engineer'
          value={data.position}
          onChange={(e) => {
            SetData({ ...data, position: e.target.value });
          }}
        />
      </div>

      <div className='flex flex-col'>
        <label className='text-lg font-semibold' htmlFor='jobstart'>
          Start Date
        </label>
        <input
          id='jobstart'
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
        <label className='text-lg font-semibold' htmlFor='jobend'>
          End Date
        </label>
        <input
          id='jobend'
          className='border-0 border-b-2 border-gray-200 bg-slate-50 ps-0 pt-2 focus-within:border-gray-800  focus:ring-0'
          type='text'
          placeholder='2025'
          value={data.end}
          onChange={(e) => {
            SetData({ ...data, end: e.target.value });
          }}
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-lg font-semibold' htmlFor='desc'>
          Description
        </label>
        <textarea
          id='desc'
          className='border-0 border-b-2 border-gray-200 bg-slate-50 ps-0 pt-2 focus-within:border-gray-800  focus:ring-0'
          type='text'
          placeholder='Your Contributions'
          value={data.desc}
          onChange={(e) => {
            SetData({ ...data, desc: e.target.value });
          }}
        ></textarea>
      </div>
      <div className={'flex gap-4' + (edit === -1 ? ' justify-center' : '')}>
        {edit !== -1 && (
          <button
            type='button'
            className='w-24 select-none rounded-full bg-red-600 p-2 text-white outline duration-500 hover:bg-inherit hover:text-red-700 hover:outline-1'
            onClick={() => {
              details.splice(edit, 1);
              setExpInfo([...details]);
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
                details[edit].name = data.name;
                details[edit].position = data.position;
                details[edit].start = data.start;
                details[edit].end = data.end;
                details[edit].desc = data.desc;

                setExpInfo([...details]);
                setEdit(-1);
              } else {
                data.id = uuidv4();
                setExpInfo([...details, data]);
              }

              SetData({
                name: '',
                position: '',
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

export default function EducationDetails({ details, setExpInfo }) {
  const [edit, setEdit] = useState(-1);
  const [minHeight, setMinHeight] = useState('initial');
  const [showExpList, setShowExpList] = useState(false);
  const [showForm, setShowForm] = useState(false);

  console.log(edit);

  function handleSetShowForm() {
    setShowForm(!showForm);
  }
  return (
    <div
      className='ml-4 flex w-96 flex-grow-0 flex-col justify-between rounded-xl border-2 bg-slate-50 p-8'
      style={{ minHeight }}
    >
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>
          <FontAwesomeIcon className='mr-2' icon={faBriefcase} />
          Experience
        </h1>
        <div
          className='flex cursor-pointer items-center'
          onClick={() => {
            setShowExpList(!showExpList);
            setMinHeight('initial');
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
      {showExpList &&
        (showForm === true ? (
          <Form
            details={details}
            setExpInfo={setExpInfo}
            handleSetShowForm={handleSetShowForm}
            setHeight={setMinHeight}
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
                    {detail.name}
                  </div>
                ))}
              </div>
            )}
            <div className='mt-8 flex justify-center'>
              <button
                className='w-24 select-none rounded-full bg-blue-500 p-2 text-white outline duration-500 hover:bg-inherit hover:text-blue-500 hover:outline-1'
                onClick={() => {
                  setShowForm(true);
                  setMinHeight('30rem');
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
