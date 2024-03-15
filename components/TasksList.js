import Link  from 'next/link';

// Imported components 
import RemoveBtn from "./RemoveBtn";
//Imported Icons 
import { FaEdit } from "react-icons/fa";


export default function TasksList() {
  return (
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
      <div>
        <h1 className='font-bold text-xl'>Task title</h1>
        <div>Task description</div>
      </div>

      <div className='flex gap-x-4 items-center '>
        <RemoveBtn/>
        <Link href={'/edit_task/123'}>
            <FaEdit size={22}/>
        </Link>
      </div>
    </div>
  );
}
