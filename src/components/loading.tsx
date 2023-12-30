import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loading() {
  return (
    <div className='absolute w-screen h-screen flex items-center justify-center'>
      <span className="animate-spin">
        <AiOutlineLoading3Quarters size={24} />
      </span>
    </div>
  );
}
