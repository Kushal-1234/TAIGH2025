import React, { useState } from "react";
import "./Login.scss";
import {
  Alert,
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = ({ loginCred, handleChange, handleSubmit, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-main">
      <div className="custom-modal-overlay">
        <Typography variant="h4" align="center" gutterBottom color={"#fff"}>
          NSF Research Website
        </Typography>{" "}
        {error && (
          <Alert severity="error" style={{ marginBottom: "1rem" }}>
            {error}
          </Alert>
        )}
        <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
          <Box className="signin-form-container">
            <form onSubmit={handleSubmit} className="registration-form">
              <TextField
                fullWidth
                placeholder="Email"
                name="email"
                type="email"
                variant="outlined"
                value={loginCred.email}
                onChange={handleChange}
                required
                className="form-field"
              />
              <TextField
                fullWidth
                placeholder="Password"
                name="password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                value={loginCred.password}
                onChange={handleChange}
                required
                className="form-field"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                //   endIcon={<SendIcon />}
                fullWidth
                className="submit-button"
              >
                Login
              </Button>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
