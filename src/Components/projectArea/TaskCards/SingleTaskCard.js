import React, {useState, useRef} from 'react'
import { Box, Heading, Divider, Input, InputGroup, Flex, InputRightElement, Button } from '@chakra-ui/react'
import TodoList from './TodoList'
import { nanoid } from 'nanoid'

function SingleTaskCard({singleCard, handleDel}) {

    const [task, setTask] = useState([]);
    
    const refName = useRef();

    

    function handleEnterKey(e) {    //// This is to submit input using Enter button
      if(e.key === "Enter" ) {
        addTodo()
      }
    }

    function addTodo(e) {           //// This is to submit input on Button Clicked
        const name = refName.current.value
        if ( name === "") return
        setTask(prevTask =>{
          return [...prevTask, {id: nanoid(), taskName: name, completed: false,}]
        })
        refName.current.value = null //// This is to clear input after submbiting
        }

    
       

  return (
    <Box justifyContent={'center'} margin='5' mt={'20'} bg={'#F7FAFC'} width={'40vh'} borderRadius={'3%'} p={'4'} pl={'8'} background={'#F7FAFC'} boxShadow={'5px 5px 5px #d2d5d6, -5px -5px 5px #ffffff'}>
     <Heading fontSize={'20px'} display={'flex'} color={'gray.600'} mb={'4'} fontWeight={'600'}>{singleCard.taskCardName}</Heading>
     {/* <Button onClick={() => handleDel()} bgColor={'red'}>X</Button>  */}
     <Divider colorScheme={''} ml='-7' mb={'5'} width={'280px'}/>

     <TodoList taskList={task} />
       <Flex>
         <InputGroup mt={5}>
           <Input 
           onKeyDown={handleEnterKey}
             ref={refName} 
             placeholder={'Add Tasks..'} 
             variant='unstyled' 
             borderTopColor={"gray.400"} 
             m='2'
             pl={'0'}
             _placeholder={{ color: 'gray.400' }} />

             <InputRightElement>
             <Button 
             border={'1px Solid Teal'}
               m={'2'} 
               onClick={addTodo} 
               color='teal' 
               bgColor={'#F7FAFC'}>+</Button>
             </InputRightElement>

         </InputGroup>
       </Flex>
</Box>
  )
}

export default SingleTaskCard