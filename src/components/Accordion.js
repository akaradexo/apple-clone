import React from 'react'
import styled from 'styled-components';

function Accordion() {
  return (
    <Accordion_section>
      <Accordion_button>
        <h5>{props.title}</h5>
      </Accordion_button>
      <Accordion_text>
        <p></p>
      </Accordion_text>
    </Accordion_section>
  )
}

export default Accordion

const Accordion_section = styled.div`

`