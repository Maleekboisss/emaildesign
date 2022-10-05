import React from 'react'
import styled from 'styled-components'
import { GrFacebook } from 'react-icons/gr'
import { FaTwitter } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { SiLinkedin } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'
import sunrise from '../Assets/Images/sunrise.png'
import whitekeyboard from '../Assets/Images/whitekeyboard.png'
import { HiOutlineMail } from 'react-icons/hi'
import { BsPaintBucket } from 'react-icons/bs'
import { HiOutlineHome } from 'react-icons/hi'



function Emaill() {
  return (
    <Page>
      <Navbar>
        <h1>Modern</h1>
        <div class="container">
        <li><a href='#'><GrFacebook class='icons' /></a></li>
        <li><a href='#'><FaTwitter class='icons' /></a></li>
        <li><a href='#'><IoLogoYoutube class='icons' /></a></li>
        <li><a href='#'><SiLinkedin class='icons' /></a></li>
        <li><a href='#'><BsInstagram class='icons' /></a></li>
        </div>
      </Navbar>

      <Header>
        <div class='container'>
        <img src={sunrise} />  
        <div class='content'>    
        <h1> A Modern Design Agency </h1>
        <h2> Minim fugiat magna esse dolor dolore sint nisi tempor cupidatat nulla incididunt ullamco cupidatat.Sit ex ipsum consectetur cillum nulla dolor officia dolore culpa. </h2>
        <button> Get Started </button>
        </div>
        </div>
      </Header>

      <Body>
        <div class='container'>
          <h1><HiOutlineMail class='icons' /></h1>
            <h2>Ecommerce</h2>
          <p> Enim qui proident excepteur et est laborum quis proident laborum velit est non culpa Lorem. </p>
        </div>
        <div class='container'>
         <h1><BsPaintBucket class='icons' /></h1>
            <h2>Web Design</h2>
          <p> Enim qui proident excepteur et est laborum quis proident laborum velit est non culpa Lorem. </p>
        </div>
        <div class='container'>
          <h1><HiOutlineHome class='icons' /></h1>
            <h2>HTML Email</h2>
          <p> Enim qui proident excepteur et est laborum quis proident laborum velit est non culpa Lorem. </p>
        </div>
      </Body>

      <Bottom>
      <div class='container'>
        <img src={whitekeyboard} />  
      </div>
      <div class='container'>
        <h1> Consectetur eiusmod et </h1>
          <p>Eu laborum sunt velit sunt.Consequat laboris aliquip mollit eiusmod eu occaecat aliqua elit et sunt eiusmod.</p>
        <button> Read More </button>
      </div>
      </Bottom>

      <Footer>
      <div class='container'>
        <h1> Consectetur eiusmod et irure  Lorem. </h1>
          <p> Aute elit aliquip laborum consectetur sunt cillum. Aute elit aliquip laborum consectetur sunt cillum. Aute elit aliquip laborum consectetur sunt cillum. Aute elit aliquip laborum consectetur sunt cillum. Aute elit aliquip laborum consectetur sunt cillum. Do laborum culpa elit culpa aliquip anim ad tempor Lorem aliquip voluptate adipisicing minim ullamco.</p>
        <button> View Now </button>
      </div>
      </Footer> 

      <ContactFooter>
        <h1> MODERN </h1>
          <p> Modern HTML Email </p>
        <p>North Las Vegas, Nevada 89081 </p>
        <div class="container">
          <li><a href='#'><GrFacebook class='icons' /></a></li>
            <li><a href='#'><FaTwitter class='icons' /></a></li>
              <li><a href='#'><IoLogoYoutube class='icons' /></a></li>
            <li><a href='#'><SiLinkedin class='icons' /></a></li>
          <li><a href='#'><BsInstagram class='icons' /></a></li>
        </div>
        <hr />
        <h2> Designed by <span> @MaleekBoisseau </span></h2>
      </ContactFooter>
    </Page>
  )
}

export default Emaill

const Page = styled.div`
  margin: auto;
  height: 54rem;
  overflow: auto;
  max-width: 40rem;
  border: 3px solid pink;
  background-color: white;
  font-family: 'Roboto', sans-serif;`

const Navbar = styled.div`
  h1 {
    font-size: 50p;
    text-align: center;
  }

  .container {
    justify-content: center;
    text-decoration: none;
    list-style-type: none;
    display: flex;
  }
  
  li {
    margin: 1rem;
  }

  .icons {
    font-size: 1.5rem;
    color: RosyBrown;
    transition: ease 0.4s;
  }

  .icons:hover {
    width: 3rem;
    color: white;
    font-size: 1.5rem;
    border-radius: 1rem;
    background-color: LightBlue;
}
`

const Header = styled.div`
  height: 21rem;

.content {
  position: relative;
  margin-top: -65%;
  text-align: center;
}

img {
  width: 100%;
}

h1 {
  width: 80%;
  color: black;
  font-size: 200%;
  margin: 50px auto;
}

h2 {
  width: 80%;
  color: black;
  font-size: 100%;
  margin: auto;
}

button {
  color: white;
  height: 2rem;
  width: 9rem;
  margin-top: 10%;
  margin-bottom: 5%;
  border-radius: 1rem;
  transition: ease 0.4s;
  background-color: RosyBrown;
}

button:hover {
  letter-spacing: 2px;
  color: pink;
}
`

const Body = styled.div`
display: flex;
height: 22rem;
margin-top 6.1rem;
flex-wrap: nowrap;
justify-content: center;

.container {
  height: 22rem;
  width: 213.3px;
  text-align: center;
  margin: auto;
}

h1 {
  font-size: 4rem;
}

h2 {
  margin-top: -1rem;
  margin-bottom: 2rem;
}

p {
  width: 9rem;
  text-align: center;
  margin: auto;
}
`

const Bottom = styled.div`
  display: flex;
  height: 20rem;
  background-color: RosyBrown;

.container {
  width: 31rem;
  margin-top: 2.2rem;
  text-align: center;

}

img {
    width: 90%;
}

h1 {
  font-size: 1.5rem;
  color: black;
}

p {
  font-size: 1.1rem;
  margin: auto;
  color: black;
  width: 15rem;
}

button {
  color: white;
  height: 2rem;
  width: 9rem;
  margin-top: 10%;
  border-radius: 1rem;
  transition: ease 0.4s;
  background-color: LightBlue;
}

button:hover {
  letter-spacing: 2px;
  color: RosyBrown;
}
`

const Footer = styled.div`
  height: 18rem;
  text-align: center;

  h1 {
    font-size: 1.6rem;
    margin-top: 3rem;
  }

  p {
    width: 30rem;
    margin: auto;
  }

  button {
    color: white;
    height: 2rem;
    width: 9rem;
    margin-top: 2rem;
    border-radius: 1rem;
    transition: ease 0.4s;
    background-color: RosyBrown;
  }

  button:hover {
    letter-spacing: 2px;
    color: LightCyan;
  }  
`

const ContactFooter = styled.div`
  text-align: center;
  display: grid;
  height: 27rem;
  background-color: RosyBrown;
  
h1 {
  color: black;
  margin-top: 3rem;
}

p {
  color: black;
  margin-top: -1rem;
}

li {
  margin: 1rem;
}

.container {
  justify-content: center;
  text-decoration: none;
  list-style-type: none;
  margin-top: -1rem;
  display: flex;
}

.icons {
  transition: ease 0.4s;
  color: white
}

.icons:hover {
  width: 3rem;
  color: white;
  font-size: 1.3rem;
  border-radius: 1rem;
  background-color: LightBlue;
}

h2 {
  color: black;
  margin-bottom: 4rem;
}

span {
  color: red;
}

hr {
  width: 35rem;
  height: 0.1rem;
}
`
