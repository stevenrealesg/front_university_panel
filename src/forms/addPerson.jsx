import Title from "../components/Title";
import { Box, TextField } from "@mui/material";

function AddPerson() {
    return (
      <>
        <Title>Registrar persona</Title>
        <Box component="form" noValidate sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
            <div>
                <TextField
                    label="Documento"
                    name="idNum"
                    size="small"
                />
            </div>
            <div>
                <TextField
                    label="Nombre"
                    name="name"
                    size="small"
                />
            </div>
            <div>
                <TextField
                    label="Apellido"
                    name="lastName"
                    size="small"
                />
            </div>
        </Box>
      </>
    );
  }
  
  export default AddPerson;