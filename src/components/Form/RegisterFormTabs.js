import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import AppForm from '../../modules/views/AppFormLarge'
import Typography from '../../modules/components/Typography'
import Grid from '@material-ui/core/Grid'
import { email, required } from '../../modules/form/validation'
import FormButton from '../../modules/form/FormButton'

const countries = [
  {
    value: 'MXN',
    label: 'México'
  },
  {
    value: 'USA',
    label: 'Estados Unidos'
  },
  {
    value: 'ESP',
    label: 'España'
  }
]

const grades = [
  {
    value: '1st',
    label: 'Primaria'
  },
  {
    value: '2nd',
    label: 'Secundaria'
  },
  {
    value: '3rd',
    label: 'Preparatoria'
  },
  {
    value: '4th',
    label: 'Superior'
  },
  {
    value: '5th',
    label: 'Postgrado'
  }
]

const specialists = [
  {
    value: 'Sist',
    label: 'Sistemas'
  },
  {
    value: 'Cht',
    label: 'Quimica'
  },
  {
    value: 'Med',
    label: 'Medicina'
  }
]

const levels = [
  {
    value: '3',
    label: 'Conocedor'
  },
  {
    value: '4',
    label: 'Experto'
  },
  {
    value: '5',
    label: 'Master'
  }
]

const languages = [
  {
    value: 'ESP',
    label: 'Español'
  },
  {
    value: 'ENG',
    label: 'Ingles'
  }
]

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}))

export default function RegisterForm () {
  const classes = useStyles()
  const [sent, setStateSent] = React.useState(false)
  const [submitting, setStateSubmit] = React.useState(false)
  const [values, setValues] = React.useState({
    email: 'leon.garcia.usana@gmail.com',
    name: 'Leon',
    lastName: 'Leon',
    grade: '4th',
    age: '',
    multiline: 'Controlled',
    currency: 'MXN'
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const handleSubmit = () => {}

  const validate = (values, props) => {
    const errors = required(['email', 'password'], values, props)

    if (!errors.email) {
      const emailError = email(values.email, values, props)
      if (emailError) {
        errors.email = email(values.email, values, props)
      }
    }

    return errors
  }

  return (
    <AppForm>
      <React.Fragment>
        <Typography variant='h4' gutterBottom marked='center' align='center'>
          Datos Generales
        </Typography>
      </React.Fragment>

      <form className={classes.container} noValidate autoComplete='off'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id='outlined-name-input'
              label='Nombre'
              className={classes.textField}
              value={values.name}
              type='name'
              name='name'
              onChange={handleChange('name')}
              margin='normal'
              variant='outlined'
            />

            <TextField
              required
              id='outlined-name-input'
              label='Apellido Paterno'
              className={classes.textField}
              value={values.lastName}
              onChange={handleChange('lastName')}
              margin='normal'
              variant='outlined'
            />

            <TextField
              required
              id='outlined-name-input'
              label='Apellido Materno'
              className={classes.textField}
              value={values.lastName}
              onChange={handleChange('lastName2')}
              margin='normal'
              variant='outlined'
            />

            <TextField
              id='outlined-email-input'
              label='Email'
              className={classes.textField}
              type='email'
              name='email'
              value={values.email}
              autoComplete='email'
              margin='normal'
              variant='outlined'
              InputProps={{
                readOnly: true
              }}
            />

            <TextField
              id='outlined-select-country'
              select
              label='Pais de Residencia'
              className={classes.textField}
              value={values.country}
              onChange={handleChange('country')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText='Por favor selecciona pais...'
              margin='normal'
              variant='outlined'
            >
              {countries.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

            <TextField
              id='outlined-select-grade'
              select
              label='Grado de Estudios'
              className={classes.textField}
              value={values.grade}
              onChange={handleChange('grade')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText='Selecciona grado de estudios...'
              margin='normal'
              variant='outlined'
            >
              {grades.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

            <TextField
              id='outlined-dense-multiline'
              label='Título o certificado oficial'
              className={clsx(classes.textField, classes.dense)}
              margin='dense'
              variant='outlined'
              multiline
              rowsMax='4'
            />
            {/* }
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax="4"
        value={values.multiline}
        onChange={handleChange('multiline')}
        className={classes.textField}
        margin="normal"
        helperText="hello"
        variant="outlined"
      />
     */}
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='outlined-select-specialist'
              select
              label='Especialidad'
              className={classes.textField}
              value={values.grade}
              onChange={handleChange('specialist')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText='Selecciona especialidad...'
              margin='normal'
              variant='outlined'
            >
              {specialists.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

            <TextField
              id='outlined-select-level'
              select
              label='NIvel de Competencia'
              className={classes.textField}
              value={values.level}
              onChange={handleChange('level')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText='Selecciona nivel de competencia...'
              margin='normal'
              variant='outlined'
            >
              {levels.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

            <TextField
              id='outlined-select-language'
              select
              label='Lenguaje'
              className={classes.textField}
              value={values.language}
              onChange={handleChange('language')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText='Selecciona Idioma...'
              margin='normal'
              variant='outlined'
            >
              {languages.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

            {/**
      <TextField
        id="outlined-textarea"
        label="Otro"
        placeholder="Escribe otro..."
        multiline
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />

*/}

            <TextField
              id='date'
              label='Fecha de Nacimiento'
              type='date'
              defaultValue='1980-05-24'
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='outlined-full-width'
              label='Otro'
              style={{ margin: 4 }}
              placeholder='Escribe otro...                           '
              width={1 / 3}
              fullWidth
              margin='normal'
              variant='outlined'
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            justify='flex-start'
            alignItems='flex-start'
            alignContent='flex-start'
          >
            <FormButton
              className={classes.button}
              disabled={submitting || sent}
              size='large'
              color='secondary'
            >
              {submitting || sent ? 'En progreso…' : '  Siguiente  '}
            </FormButton>
          </Grid>
        </Grid>
      </form>
    </AppForm>
  )
}
