import { FiMenu } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';
const Header = () => {
  return (
    <nav className=' w-full bg-blue-800 !px-5 !shadow-2xl'>
      <div className='flex justify-between items-center h-[3rem] text-white'>
        <button className=''>
          <FiMenu size={28} />
        </button>
        <div className='text-white text-center text-sm h-auto'>
          <h2>Alcohol Car Safety System (ACSC)</h2>
        </div>
        <button>
          <MdAccountCircle size={30} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
