import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loading() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <span className="animate-spin">
        <AiOutlineLoading3Quarters size={24} />
      </span>
    </div>
  );
}
