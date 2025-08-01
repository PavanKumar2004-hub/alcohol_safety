import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { RiLiveFill } from 'react-icons/ri';
import { CgMediaLive } from 'react-icons/cg';
const Header = () => {
  const [openModal, setOpenModel] = useState(false);
  const carOwnersNames = [
    'Putta.J.C.P.Pavan Kumar',
    'Putta.Lavanya',
    'Putta.Ganapathi Rao',
  ];
  const familyMembers = [
    'Putta.J.C.P.Pavan Kumar',
    'Putta.Vishnu Vardhan',
    'Putta.Lavanya',
    'Putta.Ganapathi Rao',
  ];
  // const userFriends = ['Ashok', 'karthik', 'satish'];

  const [isLive, setIsLive] = useState(false);

  const handleChange = (name) => {
    setIsLive(name);
  };
  return (
    <nav className=' w-full bg-blue-800 !px-5 !shadow-2xl  !sticky top-0 left-0'>
      <div className=' relative flex justify-between items-center h-[3rem] text-white'>
        <button>
          {openModal ? (
            <IoClose size={28} onClick={() => setOpenModel(false)} />
          ) : (
            <FiMenu size={28} onClick={() => setOpenModel(true)} />
          )}
        </button>
        <div className='text-white text-center text-sm h-auto'>
          <h2>Alcohol Car Safety System (ACSC)</h2>
        </div>
        <button>
          <MdAccountCircle size={30} />
        </button>
      </div>

      {/* modal window */}

      {openModal && (
        <div className='absolute left-0 w-full h-[100vh] bg-gray-200 !px-6 !py-2 modal_window  '>
          <div className='flex flex-col gap-2 !mt-4'>
            <h2 className='text-center text-lg font-semibold text-blue-900 border border-blue-400 bg-blue-200 rounded-md !py-2'>
              No.of Family Members :{' '}
              <span className=' font-bold'>{familyMembers.length}</span>
            </h2>
            <h2 className='text-center text-lg font-semibold bg-blue-200 border border-blue-400 text-blue-900 rounded-md !py-2'>
              No.of Cars :{' '}
              <span className=' font-bold'>{carOwnersNames.length}</span>
            </h2>
          </div>
          <br />
          <hr className='w-[20rem] !mx-auto text-gray-400 ' />
          <br />
          <h2 className='text-left text-lg font-bold  text-gray-700'>
            Vehicle Owned Members
          </h2>
          <div className=' flex flex-col gap-2 text-center text-md font-semibold text-gray-800  border-3 border-blue-400 !px-4 !py-5 !mt-2 rounded-md bg-blue-200'>
            {carOwnersNames.map((Name, i) => (
              <button
                className=' bg-blue-600 text-white !px-3 !py-2 rounded-lg hover:bg-blue-500 '
                key={i}
                onClick={() => handleChange(Name)}
              >
                {Name}{' '}
              </button>
            ))}
          </div>
          <br />
          <h2 className='text-left  text-lg font-bold !mt-4 text-gray-700'>
            Currently Monitoring
          </h2>
          {isLive && (
            <p className='!mt-4 flex justify-between text-red-600 items-center text-lg font-semibold bg-red-200 !px-5 !py-2 rounded-lg'>
              {isLive} {isLive && <RiLiveFill color='red' size={25} />}{' '}
              {isLive && (
                <CgMediaLive
                  color='green'
                  size={20}
                  className='animate-pulse'
                />
              )}
            </p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
