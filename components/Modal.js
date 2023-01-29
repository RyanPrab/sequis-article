import { AiOutlineClose } from 'react-icons/ai';

export default function Modal(props) {
  const { shown, children, hideModal } = props;

  if (!shown) {
    return null;
  }

  return (
    <div className="fixed z-20 bg-current flex items-center justify-center w-full">
      <div className="flex flex-col space-y-4 bg-white rounded-lg w-full min-h-screen items-center">
        <div
          className="flex flex-row justify-end px-2 pt-2 w-full text-lg text-orange-500"
          onClick={hideModal}
        >
          <AiOutlineClose className='w-6 h-6'/>
        </div>
        <div className="flex py-4 px-2 w-full">
          {children}
        </div>
      </div>
    </div>
  )
}
