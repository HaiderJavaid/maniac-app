import React, {useState, useRef, useEffect} from 'react'
import { Flex, Input, InputGroup, Button, InputRightElement, Box, Heading, list } from '@chakra-ui/react'
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react'
import CardList from './TaskCards/CardList'
import { nanoid } from 'nanoid';



function SingleProject({index}) {

    const [taskCard, setTaskCard] = useState([]);
    const refName = useRef();

  
    function addTaskCard(e) {
       const name = refName.current.value
       if( name === "") return
       setTaskCard(prevTaskCard => {
        return[...prevTaskCard, {id: nanoid(), taskCardName: name, completed: false,}] 
       })
       refName.current.value = null;
    }

    // function handleDel(singleCard, par){
    //   // setTaskCard(taskCard.filter(taskCard => taskCard.id !== singleCard.id))
    //   // alert(`${singleCard.taskCardName} is removed`)

    //     // const updatedList = taskCard.filter(taskcard => !taskcard.id )
    //     // setTaskCard(updatedList)
    //     // // console.log(taskCard)

    //     var updatedList = taskCard;
    //     updatedList.splice(index, 1);
    //     setTaskCard([...updatedList])

       

    // }


  return (
    <Box textAlign="center" fontSize="xl" background={'#F7FAFC'} padding={'5vh 3vh 10vh 3vh'} >
        <Heading> <Editable defaultValue={index}>
                  <EditablePreview color={'teal'} />
                  <EditableInput color={'teal'} />
                  </Editable>
        </Heading>
        <Flex>
    <InputGroup mx={200} mt={5}>
      <Input 
      background={'#F7FAFC'} boxShadow={'inset 5px 5px 4px #dee1e3, inset -5px -5px 4px #ffffff'}
        ref={refName}
        placeholder={'Add Categories'} 
        variant='outlined' 
        borderTopColor={"gray.400"} 
        m='2'
        px={'10'}
        _placeholder={{ color: 'gray.400' }} />

        <InputRightElement>
        <Button
          onClick={addTaskCard}
          m={'2'} 
          px={10}
          mt={6}
          color='white' 
          bgColor={'teal'}>ADD</Button>
        </InputRightElement>

    </InputGroup>
  </Flex>
      <Box display={'flex'}>
         <CardList  taskCard={taskCard}/>
      </Box>
      </Box>

  
  )
}

export default SingleProject