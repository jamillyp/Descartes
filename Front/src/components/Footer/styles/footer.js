import styled from 'styled-components';

export const Container = styled.div`
    padding: 45px 60px;
    background: #6CB9AA;
    margin-top: auto;
`

export const Wrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    max-width: 1000px;
    margin-left: 20%;
    margin-right: 25%;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0 auto 30px;

    #IconEmail , #IconEndereco {
        margin-left: 30px;
    }
`

export const Row = styled.div`
    display: inline-flex;
    margin: 10px 0 10px 50px;

    #IconInstagram {
        margin-left: 80px;
        margin-right: 10px;
        margin-bottom: 30px;
    }
    a {
        text-decoration: none;
        font-size: 10pt;
        color: #352166;
    }

    a:hover {
        font-weight: bold;
        transition: 200ms ease-in;
    }
`

export const Link = styled.div`
    font-size: 10pt;
    color: #352166;

    
`

export const Title = styled.div`
    color: #352166;
    font-weight: bold;

    #TextOne {
        font-size: 14px;
        text-align: center;
        margin-left: 120px;
        margin-top: 30px;
        margin-bottom: 10px;
    }
`