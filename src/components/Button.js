import styled from "styled-components";

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background:${props => 
    props.cart? "var(--mainYellow)": "var(--mainRed)"};
border: 0.05rem solid var(--lightRed);
border-color: ${props => 
    props.cart ? "var(--mainYellow)" : "var(--mainRed)"};
color:${prop =>
    prop.cart ? "var(--mainWhite)" : "var(--mainWhite)"};
border-radius: 0.2rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.5 ease-in-out;
&:hover{
background:${prop =>
    prop.cart ? "var(--mainYellow)" : "var(--mainRed)"};
color:var(--mainWhite);
}
&:focus{
    outline: none;
}
`


export const NavButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: var(--mainDark);
border: 0.05rem solid var(--lightRed);
color: var(--mainWhite);
border-radius: 0.2rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.5 ease-in-out;
&:hover{
background: var(--mainRed);
}
&:focus{
    outline: none;
}
`


export const AddButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: var(--mainDark);
border: 0.05rem solid var(--lightRed);
color: var(--mainWhite);
border-radius: 0.2rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.5 ease-in-out;
&:focus{
    outline: none;
}
`