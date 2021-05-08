import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core';
import {
  TimePicker,
  DatePicker,
  DateTimePicker,
} from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import PtBrLocale from 'date-fns/locale/pt-BR'
import axios from 'axios';

export default function ClientForm({ closeModal }) {
  return (
    <MuiPickersUtilsProvider locale={PtBrLocale} utils={DateFnsUtils}>
      <Formik
        initialValues={{ 
          Name: "",
          lastName: "",
          cpf: "",
          birthDate: new Date()
          // Appointment: [] 
        }}
        onSubmit={(values, { setSubmitting }) => {
          closeModal();
          // axios.post('', JSON.stringify(values, null, 2)).then(a => alert(a));
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting, values, errors, handleReset, setFieldTouched, setFieldValue }) => (
          <Form>
            <Field
              component={TextField} 
              name="Name"
              label="Nome"
              values={values.Name}
              onChange={e => setFieldValue('Name', e.target.value)}
              >Nome</Field>
            <Field
              component={TextField} 
              name="lastName"
              label="Sobrenome"
              values={values.lastName}
              onChange={e => setFieldValue('lastName', e.target.value)}
              >Sobrenome</Field>
            <Field
              component={TextField} 
              name="cpf"
              label="CPF"
              values={values.cpf}
              onChange={e => setFieldValue('cpf', e.target.value)}
              >CPF</Field>
            <Field component={DatePicker}
              name="birthDate" label="Data De Nascimento" disableFuture
              format="dd/MM/yyyy" />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Salvar
                    </Button>
            {isSubmitting && <LinearProgress />}
          </Form>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  );
}