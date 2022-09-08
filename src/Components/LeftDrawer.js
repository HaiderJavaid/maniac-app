import React, {useEffect, useState} from 'react'
import { Divider, Box, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SingleProject from './projectArea/SingleProject';
import {useAuth} from '../Contexts/AuthContext'
import {useNavigate} from 'react-router-dom'

const LOCAL_STORAGE_KEY = 'maniacApp.tabs'

function LeftDrawer() {

    const [tabs, setTabs] = useState([]);
    const [panels, setPanels] = useState([]);
    const [index, setIndex] = useState(1);

    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()
    
    // function clearMemory(){

    localStorage.clear()
    // }



    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(data) {
            setTabs(data)
            setPanels(data)
        }
    }, [])
    

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({tabs, panels}))
    }, [tabs, panels]
    )


    function createNewTab() {
        const newTab = {
            id: index,
            name: 'Project ' + index
        }
        const newPanel ={
            id: index,
            child: () => <SingleProject index={newTab.name} />  //This is a function. INPUT index={index} later
        }

        setTabs([...tabs, newTab])
        setPanels([...panels, newPanel])
        setIndex(index + 1);
    }

    async function handleLogout() {
        setError('')

        try{
            await logout()
            navigate("/")
        } catch(e) {
            setError('Failed to logout!')
            console.log(e.message)

        }
    }

  return (
    
    <Box  p={'0'} height={'100vh'} width={'100%'} background={'#F7FAFC'} pt={0}>
    <Button color={'white'} bgColor={'teal'} position={'absolute'} onClick={createNewTab} m={'40px 20px 20px 30px'}>Add New Project</Button>

    <Tabs orientation='vertical' colorScheme='teal' value={2}>
        <TabList color={'gray.400'} mt={'100px'} mb={'120px'} width={'40vh'}>
            {tabs.map(tab => (
                <Tab key={tab.id}>{tab.name}</Tab>
                
            ))}
         </TabList>

        <TabPanels>
            {panels.map(panel => (
                <TabPanel key={panel.id}>
                    {panel.child()}
                </TabPanel>  
            ))}
        </TabPanels>
  </Tabs>
  <Box display={'flex'} flexDirection={'column'}>
  <Button w={'10%'} m={'0px 5px 10px 30px'} variant={'outline'} onClick={handleLogout} colorScheme={'teal'}>Log Out</Button>
  <Button w={'10%'} ml={'30px'} bg={'outline'} color={'teal'}>Clear All</Button>
  </Box>
  </Box>
  )
}

export default LeftDrawer