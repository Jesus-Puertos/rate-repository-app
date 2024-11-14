import { Text, View, TextInput, Button, StyleSheet } from "react-native"
import {Formik, useField} from "formik"
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";
import { loginValidationSchema } from "../validationSchemas/login";

const initialValues = {
    email: '',
    password: ''

}

const styles = StyleSheet.create({
    form:{
        margin: 12,
        
    },
    error:{
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5
    }
})

const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name);
    return (
        <>
        <StyledTextInput
        error={meta.error}
        values={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
        />
        {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

export default function LoginInPage (){
return (
<Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
    {({ handleSubmit})=> {
        return (
        <View style={styles.form}>
            <FormikInputValue
            name="email"
            placeholder="Correo Electronico"  
            />
             <FormikInputValue
            name="password"
            placeholder="Contraseña" 
            secureTextEntry 
            />
           <Button onPress={handleSubmit} title="Iniciar Sesion" />
        </View>
        )
    }}
</Formik>
);
}