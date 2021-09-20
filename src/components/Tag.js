import React from 'react'
import styled from 'styled-components'

function Tag() {
  return (
    <Wrap>
      <p>We look forward to welcoming you to our stores. Whether you <a href="https://apple-clone-qop.netlify.app/"> shop in a store</a> or <a href="https://apple-clone-qop.netlify.app/"> shop online</a> our Specialists can help you buy the products you love.</p>
    </Wrap>
  )
}

export default Tag

const Wrap = styled.div`
color:#565656
;
background:#f5f5f7;
padding:0.9rem;
display:flex;
justify-content:center;
align-items:center;
p{
  font-size:0.9rem
}
`
