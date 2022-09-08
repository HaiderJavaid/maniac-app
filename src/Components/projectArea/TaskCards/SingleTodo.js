import React from 'react'
import { Checkbox, Box } from '@chakra-ui/react'

function SingleTodo({singleTask}) {
  return (
    <Box display={'flex'} >
        <Checkbox 
            spacing={5}
            borderColor={'teal.400'}
            iconSize='4rem'
            size={'sm'}
            colorScheme={'teal'} 
            paddingY={'10px'} 
            color={'gray.500'}>
            {singleTask.taskName}
        </Checkbox>
    </Box>
  )
}

export default SingleTodo