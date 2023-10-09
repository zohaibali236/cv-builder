import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function PersonalDetails({ details, handler }) {
  return (
    <div className='ml-4 w-96 flex-grow-0 rounded-xl border-2 bg-slate-50 p-8'>
      <h1 className='mb-4 text-2xl font-bold'>
        <FontAwesomeIcon icon={faCircleInfo} className='mr-2' />
        Personal Information
      </h1>

      <form
        className='grid grid-cols-1 gap-y-4'
        action='#'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='flex flex-col'>
          <label className='text-lg font-semibold' htmlFor='name'>
            Full Name
          </label>
          <input
            id='name'
            className='border-0 border-b-2 border-gray-200 bg-slate-50 ps-0 pt-2 focus-within:border-gray-800  focus:ring-0'
            type='text'
            placeholder='John Doe'
            value={details.name}
            onChange={(e) => {
              handler('name', e.target.value);
            }}
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-lg font-semibold' htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            className='border-0 border-b-2 border-gray-200 bg-slate-50 ps-0 pt-2 focus-within:border-gray-800  focus:ring-0'
            type='email'
            placeholder='someone@example.com'
            value={details.email}
            onChange={(e) => {
              handler('email', e.target.value);
            }}
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-lg font-semibold' htmlFor='phone'>
            Phone Number
          </label>
          <input
            id='phone'
            className='border-0 border-b-2 border-gray-200 bg-slate-50 ps-0 pt-2 focus-within:border-gray-800  focus:ring-0'
            type='tel'
            placeholder='John Doe'
            value={details.phone}
            onChange={(e) => {
              handler('phone', e.target.value);
            }}
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-lg font-semibold' htmlFor='addr'>
            Address
          </label>
          <input
            id='addr'
            className='border-0 border-b-2 border-gray-200 bg-slate-50 ps-0 pt-2 focus-within:border-gray-800  focus:ring-0'
            type='text'
            placeholder='John Doe'
            value={details.address}
            onChange={(e) => {
              handler('address', e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
}
