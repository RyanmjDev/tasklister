import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

import api from '../utils/api'


const CreateTask = ({addTask}) => {

    const [newTask, setNewTask] = useState('');

    const handleInput = (event) => {
        setNewTask(event.target.value);
    }

    const handleSubmit = async () => {
      if(newTask)
      {
        try {
          api.post('/api/tasks/', { description: newTask })
          .then((res) => {
            console.log(res.data)
                   addTask(res.data);
                   setNewTask('');
          })
        } catch(error)
        {
          console.log(error);
        }
      }
    }


    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            handleSubmit();
        }
      };
    

      return (
        <div className='flex justify-center mt-4 mb-4 align-middle'>
            <div className='flex justify-start items-center w-full '>
                <input type="text"
                value={newTask}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                placeholder="Write a new task..."
                maxlength="250"
                 className='flex-grow border border-gray-400 p-1 mr-2 create-task'/>
                 <button 
                 className='bg-blue-500 text-white rounded-full
                 py-2 px-2 text-lg
                 hover:bg-blue-600'
                 onClick={handleSubmit}
                 >
                  <AiOutlinePlus/>
                 </button>
            </div>
        </div>
    )
    }

export default CreateTask