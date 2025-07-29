import { FiArrowRightCircle } from 'react-icons/fi';
import { FaLocationCrosshairs } from 'react-icons/fa6';
const Requesting = () => {
  return (
    <section>
      <div className='flex flex-col gap-10'>
        <div className='w-[20rem] bg-white shadow-md rounded-lg !p-4 flex flex-col items-center justify-center gap-4 !mx-auto'>
          <h2 className=' text-lg font-bold '>Requesting...</h2>
          <button className='flex gap-5 items-center justify-center bg-red-600 hover:bg-red-500 text-white font-semibold !text-[1rem] !py-1 !px-4 !rounded-md'>
            ACV is HIGH...
            <FiArrowRightCircle size={20} />
          </button>
        </div>
        <div className='w-[20rem] bg-white shadow-md rounded-lg !p-4 flex flex-col items-center justify-center gap-4 !mx-auto'>
          <h2 className=' text-lg font-bold flex gap-2 items-center'>
            Location <FaLocationCrosshairs />
          </h2>
          <div className='h-[15rem]'>
            {/* https://maps.app.goo.gl/Pyr1vtcmFPU8FkWS9 */}
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7654.198026286351!2d81.66318663425447!3d16.41979702897514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI1JzEyLjAiTiA4McKwMzknNDkuOCJF!5e0!3m2!1sen!2sin!4v1753799825747!5m2!1sen!2sin'
              allowfullscreen=''
              width={'100%'}
              height={'100%'}
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requesting;
