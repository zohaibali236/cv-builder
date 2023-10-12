import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocation,
} from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';

export default function Preview({ personal, educational, expInfo }) {
  return (
    <div className='container mr-4 max-h-[1200px] min-h-[1200px] max-w-[800px] border-2 text-white'>
      <header className='flex h-40 flex-col items-center justify-center gap-y-4 bg-sky-600'>
        {personal.name !== '' && (
          <h1 className='text-3xl font-semibold '>{personal.name}</h1>
        )}
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {personal.email !== '' && (
            <div className='flex items-end gap-1 text-lg'>
              <FontAwesomeIcon className='self-center' icon={faEnvelope} />
              <p>{personal.email}</p>
            </div>
          )}
          {personal.phone !== '' && (
            <div className='flex items-end gap-1 text-lg'>
              <FontAwesomeIcon className='self-center' icon={faPhone} />
              <p>{personal.phone}</p>
            </div>
          )}
          {personal.address !== '' && (
            <div className='flex items-end gap-1 text-lg'>
              <FontAwesomeIcon className='self-center' icon={faLocation} />
              <p>{personal.address}</p>
            </div>
          )}
        </div>
      </header>
      <main className='p-10 text-black'>
        {educational.length > 0 && (
          <>
            <h2 className='bg-slate-100 p-2 text-center text-xl font-bold text-sky-600'>
              Education
            </h2>
            <div className='mt-4 grid grid-cols-[1fr_3fr]'>
              {educational.map((i) => {
                return (
                  <Fragment key={i.id}>
                    <div className='row-span-2 self-center justify-self-center'>
                      {i.start} - {i.end}
                    </div>
                    <div className='font-semibold'>{i.instituteName}</div>
                    <div className='col-start-2 mb-3'>{i.degreeName}</div>
                  </Fragment>
                );
              })}
            </div>
          </>
        )}
        {expInfo.length > 0 && (
          <>
            <h2 className='bg-slate-100 p-2 text-center text-xl font-bold text-sky-600'>
              Experience
            </h2>
            <div className='mt-4 grid grid-cols-[1fr_3fr]'>
              {expInfo.map((i) => {
                return (
                  <Fragment key={i.id}>
                    <div className='row-span-3 self-center justify-self-center'>
                      {i.start} - {i.end}
                    </div>
                    <div className='font-semibold'>{i.name}</div>
                    <div className='col-start-2'>{i.position}</div>
                    <div className='col-start-2 mb-3'>{i.desc}</div>
                  </Fragment>
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
