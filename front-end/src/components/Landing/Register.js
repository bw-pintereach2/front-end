import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import svg from "../../utils/coach_monochromatic.svg";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Pintrest
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	image: {
		backgroundImage: `url(${svg})`,
		backgroundRepeat: "no-repeat",
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: "cover",
		backgroundPosition: "center",
		boxShadow: "1px 2px 3px rgba(0,0,0,.5)",
	},
	paper: {
		margin: theme.spacing(20, 4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: "#68E1FD",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignUp(props) {
	const [formState, SetFormState] = useState({
		username: "",
		password: "",
		first_name: "",
		last_name: "",
		email: "",
	});
	const handleChange = (e) => {
		SetFormState({ ...formState, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		props.signup(formState);
		SetFormState({
			username: "",
			password: "",
			first_name: "",
			last_name: "",
			email: "",
		});
	};
	const classes = useStyles();

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />

			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Typography component="h1" variant="h2">
						Pintrest
					</Typography>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Register
					</Typography>
					<form className={classes.form} noValidate onSubmit={handleSubmit}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="first_name"
							label="First Name"
							name="first_name"
							autoComplete="email"
							autoFocus
							onChange={handleChange}
							value={formState.first_name}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="last_name"
							label="Last Name"
							name="last_name"
							autoComplete="email"
							autoFocus
							onChange={handleChange}
							value={formState.last_name}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={handleChange}
							value={formState.email}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="email"
							autoFocus
							onChange={handleChange}
							value={formState.username}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={handleChange}
							value={formState.password}
						/>
						{/* <FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/> */}
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="inherit"
							className={classes.submit}
							style={{ backgroundColor: "#68E1FD", color: "white" }}
						>
							Register
						</Button>
						<Grid container>
							<Grid item xs></Grid>
							<Grid item>
								<Link to="/Signup" variant="body2">
									{"Already have an account with us? Login"}
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
		</Grid>
	);
}
