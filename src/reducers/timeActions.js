import store from "../store";

export const currentStepChange = currentStep => {
	return store.dispatch({
		type: "CURRENT_STEP_CHANGE",
		payload: currentStep
	});
};
