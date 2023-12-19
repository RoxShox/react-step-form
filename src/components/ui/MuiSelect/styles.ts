import { FormControl, styled } from "@mui/material"

export const StyledFormControl = styled(FormControl)`
	width: 100%;
	max-width: 300px;
	& span {
		color: #333;
		font-size: 14px;
		font-weight: 500;
		margin-bottom: 8px;
		display: inline-block;
	}
	& .select-error {
		color: red;
		text-align: center;
		padding-top: 10px;
	}
	& .MuiInputBase-root {
		border-radius: 4px;
		border: 1px solid var(--light-blue-gray);
		height: 44px;
		background: white;
		border: 1px solid rgba(0, 0, 0, 0.16);
		max-width: 300px;
	}
	& .MuiOutlinedInput-notchedOutline {
		display: none;
	}
	,
	& .MuiOutlinedInput-input {
		font-size: 14px;
		letter-spacing: -0.02em;
		color: rgba(0, 0, 0, 0.48);
	}
	,
	.MuiPaper-root .MuiList-root {
		padding-top: 0;
		background: red;
	}
`
