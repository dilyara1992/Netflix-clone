import React from 'react';
import { Container, Input, Submit, Title, TextSmall, Link, Text, Error, Base } from './styles/form';


//Base
Form.Base = function FormBase({children, ...restProps}){
    return <Base {...restProps}>{children}</Base>;
}

//Container
export default function Form({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

//Input
Form.Input = function FormInput({children, ...restProps}){
    return <Input {...restProps}>{children}</Input>;
}

//Text
Form.Text = function FormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>;
}

//Link
Form.Link = function FormLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>;
}

//Title
Form.Title = function FormTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
}

//TextSmall
Form.TextSmall = function FormTextSmall({children, ...restProps}){
    return <TextSmall {...restProps}>{children}</TextSmall>;
}

//Button
Form.Submit = function FormSubmit({children, ...restProps}){
    return <Submit {...restProps}>{children}</Submit>;
}

//Error
Form.Error = function FormError({children, ...restProps}){
    return <Error {...restProps}>{children}</Error>;
}





