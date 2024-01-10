import { create } from "zustand";

export enum STEPS {
	INITIAL = 1,
	LEVEL = 2,
	AUTH = 3,
	USERNAME = 4,
}

interface RegisterStepStore {
	step: number;
	incStep: () => void;
	decStep: () => void;
	resetStep: () => void;
	setStep: (step: number) => void;
}

export const useRegisterStep = create<RegisterStepStore>((set, get) => ({
	step: STEPS.INITIAL,
	resetStep: () => set({ step: 1 }),
	incStep: () => {
		if (get().step !== STEPS.USERNAME) {
			set({ step: get().step + 1 });
		}
	},
	decStep: () => {
		if (get().step !== STEPS.INITIAL) {
			set({ step: get().step - 1 });
		}
	},
	setStep: (step: number) => {
		if (step <= STEPS.USERNAME && step >= STEPS.INITIAL) {
			set({ step });
		}
	},
}));
