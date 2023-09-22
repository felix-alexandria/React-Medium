import React, {useState} from 'react'
import styled from 'styled-components'
import img from "../Asset/MediumLogo.png"
import {BiMenu} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"
import {NavLink} from "react-router-dom"


const Header = () => {
    const [hamburger, setHamburger] = useState(false)
    const Drop = () => {
        setHamburger(!hamburger)
    }

    const [header, setHeader] = useState(false)

    const ChangeHeader = () => {
        const scroll=window.pageYOffset;
        if(scroll >= 200){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }
    window.addEventListener("scroll", ChangeHeader)
  return (
    <div>
        {header?(
            <Container bg="1" po="fixed">
            <Wrapper>
            <Logo>
                <img src={img} alt="" />
            </Logo>
            <Navigate>
            <Icon onClick={Drop}> {hamburger ?(<BiMenu/>) : (<BiMenu/>)}</Icon>
              <NavHold>
              <Nav>Our Story</Nav>
              <Nav>Membership</Nav>
              <Nav>Write</Nav>
              <Nav>Sign In</Nav>
              </NavHold>
            <Button bcc="black">Get Started</Button>
            </Navigate>
            {hamburger ? ( <Card>
                <Icon onClick={Drop}>{hamburger ?(<AiOutlineClose style={{color: "#fff"}}/>) : (<AiOutlineClose style={{color: "#fff"}}/>)}</Icon>
                <NavLink to="" style={({isActive})=>{
                    return{
                        backgroundColor: isActive ? "#000" : "white", borderBottom: isActive ? "3px solid gold" : "none", textDecoration: "none", width: isActive? "100%" : "100%"
                    }
                }}>
                <DropNav >Our Story</DropNav>
                </NavLink>
              <NavLink to="" style={({isActive})=>{
                    return{
                        backgroundColor: isActive ? "#000" : "white", borderBottom: isActive ? "3px solid gold" : "none", textDecoration: "none", width: isActive? "100%" : "100%"
                    }
                }}>
                    <DropNav>Membership</DropNav>
              </NavLink>
              <NavLink to="" style={({isActive})=>{
                    return{
                        backgroundColor: isActive ? "#000" : "white", borderBottom: isActive ? "3px solid gold" : "none", textDecoration: "none", width: isActive? "100%" : "100%"
                    }
                }}>
                    <DropNav>Write</DropNav>
              </NavLink>
              <NavLink to="" style={({isActive})=>{
                    return{
                        backgroundColor: isActive ? "#000" : "white", borderBottom: isActive ? "3px solid gold" : "none", textDecoration: "none", width: isActive? "100%" : "100%"
                    }
                }}>
                    <DropNav>Sign In</DropNav>
              </NavLink>
            </Card>) : null}
            </Wrapper>
        </Container>
        ):(
            <Container bg="" po="fixed">
            <Wrapper>
            <Logo>
                <img src={img} alt="" />
            </Logo>
            <Navigate>
            <Icon onClick={Drop}> {hamburger ?(<BiMenu/>) : (<BiMenu/>)}</Icon>
              <NavHold>
              <Nav>Our Story</Nav>
              <Nav>Membership</Nav>
              <Nav>Write</Nav>
              <Nav>Sign In</Nav>
              </NavHold>
            <Button bcc="black">Get Started</Button>
            </Navigate>
            {hamburger ? ( <Card>
                <Icon onClick={Drop}>{hamburger ?(<AiOutlineClose style={{color: "#fff"}}/>) : (<AiOutlineClose style={{color: "#fff"}}/>)}</Icon>
                <NavLink to="" style={({isActive})=>{
                    return{
                        backgroundColor: isActive ? "#000" : "white", borderBottom: isActive ? "3px solid gold" : "none", textDecoration: "none", width: isActive? "100%" : "100%"
                    }
                }}>
                <DropNav >Our Story</DropNav>
                </NavLink>
              <NavLink to="" style={({isActive})=>{
                    return{
                        backgroundColor: isActive ? "#000" : "white", borderBottom: isActive ? "3px solid gold" : "none", textDecoration: "none", width: isActive? "100%" : "100%"
                    }
                }}>
                    <DropNav>Membership</DropNav>
              </NavLink>
              <NavLink to="" style={({isActive})=>{
                    return{
                        backgroundColor: isActive ? "#000" : "white", borderBottom: isActive ? "3px solid gold" : "none", textDecoration: "none", width: isActive? "100%" : "100%"
                    }
                }}>
                    <DropNav>Write</DropNav>
              </NavLink>
              <NavLink to="" style={({isActive})=>{
                    return{
                        backgroundColor: isActive ? "#000" : "white", borderBottom: isActive ? "3px solid gold" : "none", textDecoration: "none", width: isActive? "100%" : "100%"
                    }
                }}>
                    <DropNav>Sign In</DropNav>
              </NavLink>
            </Card>) : null}
            </Wrapper>
        </Container>
        )}
    </div>
  )
}

export default Header;
const DropNav = styled.div`
width: 100%;
height: 50px;
background-color: white;
display: flex;
align-items: center;
`
const Card = styled.div`
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    height: 300px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

`
const NavHold = styled.div`
display: none;
@media (min-width: 1026px){
width: 350px;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between
}
`
const Nav = styled.nav`
font-size: 16px;
color: black;
cursor: pointer;
`
const Button=styled.button<{bcc: string}>`
width: 100px;
height: 50px;
background-color: ${({bcc}) => bcc};
color: #fff;
border-radius: 30px;
border: none;
cursor: pointer;
&:hover{
    background-color: grey;
}
`
const Icon = styled.div`
width: 30px;
height: 30px;
font-size: 30px;
cursor: pointer;
@media (min-width: 1026px){
    display: none;
}

`

const Navigate = styled.div`
width: 130px;
display: flex;
justify-content: space-between;
align-items: center;
@media (min-width: 1026px){
width: 500px;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
}
`

const Logo = styled.div`
width: 150px;
height: 50px;
display: flex;
align-items: center;justify-content: center;
`

const Wrapper = styled.div`
width: 95%;
height: 95%;
display: flex;
align-items: center;
justify-content: space-between;

`

const Container = styled.div<{bg: string, po: string}>`
width: 100%;
height: 70px;
background-color: ${({bg}) => bg? "white" : "gold"};
position: ${({po}) => po};
display: flex;
justify-content: center;
align-items: center;
border-bottom: 2px solid black;
z-index: 5;
position: relative;
`