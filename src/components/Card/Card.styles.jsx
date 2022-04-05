import styled from "@emotion/styled";

export const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`

export const OrganizationType = styled.p``

export const Name = styled.p``

export const Actions = styled.div`
display: flex;
justify-content: space-between;
width: 90px;

`
export const Icon = styled.div`
&svg{
width:30px;
}

&:hover{
    & svg{
    fill: #ff6b0a;
}
}
`

export const Image = styled.img`
height: 80px;
width:80px;
`