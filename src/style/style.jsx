import styled from "styled-components";
import { Field } from "formik";
import { NavLink } from "react-router-dom";
import {Form, ErrorMessage} from 'formik';

export const StyledLabel = styled.label`
    margin-bottom: ${p => p.theme.space[2]}px;
    display: flex;
    align-items: center;
`

export const StyledInput = styled.input`
    display: flex;
    border-radius: ${p => p.theme.radii.normal};
    margin-left: auto;
    outline: none;
    padding: ${p => p.theme.space[2]}px;
`
export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    background: ${p => p.theme.colors.white};
    padding: ${p => p.theme.space[4]}px;
    margin: ${p => p.theme.space[2]}px;
    border: ${p => p.theme.borders.normal};
    width:100%;
    //align-items: center;
`

export const Button = styled.button`
    background: ${p => p.theme.colors.primary};
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[1]}px;
    outline: none;
    border: none;
    color: ${p => p.theme.colors.white};
    max-width: 100px;
    margin-left: auto;
    &:hover, &:focus{
        transform: scale(1.1);
    }
`

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${p => p.theme.space[2]}px;
    border-bottom: 1px solid #1a291a;
`

export const StyledField = styled(Field)`
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[2]}px;
    outline: none;
    border-color: ${p => p.theme.colors.primary};
    &:hover, &:focus{
        border-color: ${p => p.theme.colors.accent};
    }
`

export const StyledInputTwo = styled.input`
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[2]}px;
    outline: none;
    border-color: ${p => p.theme.colors.primary};
    &:hover, &:focus{
        border-color: ${p => p.theme.colors.accent};
    } 
`

export const StyledNavLink = styled(NavLink)`
    //text-decoration: underline;
    color: black;
    padding-bottom: 2px;
    gap: 10px;
    &.active{
        color: black;
        font-weight: 700;
    }
    
`

export const StyledFormFormik = styled(Form)`
    padding-bottom: 10px;
`
export const StyledError = styled(ErrorMessage)`
    color: red;
`
