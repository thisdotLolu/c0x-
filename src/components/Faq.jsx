import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box} from '@chakra-ui/react'
import styles from './Faq.module.css'



const Faq = () => {
  return (
    <div 
    id='/faq'
    className={styles.container}>
    <div className={styles.inner}>
<div className={styles.header}>
    <h2>FREQUENTLY ASKED QUESTIONS</h2>
</div>

<Accordion 
className={styles.accordion_container}
allowToggle>
  <AccordionItem
  className={styles.accordion_item}
  >
    <h2>
      <AccordionButton
      className={styles.item_text}
      >
        <Box 
        as="span" flex='1' textAlign='left'>
          Question 1
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel 
    className={styles.item_response}
    pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem
   className={styles.accordion_item}
  >
    <h2>
      <AccordionButton
       className={styles.item_text}>
        <Box 
        as="span" flex='1' textAlign='left'>
          Question 2
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel 
    className={styles.item_response}
    pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  
  <AccordionItem
   className={styles.accordion_item}
  >
    <h2>
      <AccordionButton
       className={styles.item_text}>
        <Box 
        as="span" flex='1' textAlign='left'>
         Question 3
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel 
    className={styles.item_response}
    pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  
  <AccordionItem
   className={styles.accordion_item}
  >
    <h2>
      <AccordionButton
       className={styles.item_text}>
        <Box 
        as="span" flex='1' textAlign='left'>
          Question 4
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel 
    className={styles.item_response}
    pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem
   className={styles.accordion_item}
  >
    <h2>
      <AccordionButton
       className={styles.item_text}>
        <Box 
        as="span" flex='1' textAlign='left'>
          Question 5
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel 
    className={styles.item_response}
    pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion> 
        </div>
    </div>
  )
}

export default Faq