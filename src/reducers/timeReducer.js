export const timeReducer = (state = { currentStep: 7000 }, action) => {
	switch (action.type) {
		case "CURRENT_STEP_CHANGE": {
			return { ...state, currentStep: action.payload };
		}
		default: {
			return state;
		}
	}
};
