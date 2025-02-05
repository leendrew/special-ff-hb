import { computed, ref } from 'vue';

interface UseStepperProps {
  max: number;
}

export function useStepper({ max }: UseStepperProps) {
  const currentStep = ref(0);
  const isFirstStep = computed(() => currentStep.value === 0);
  const isLastStep = computed(() => currentStep.value === max);

  const nextStep = () => {
    if (isLastStep.value) {
      return;
    }

    currentStep.value += 1;
  };

  const prevStep = () => {
    if (isFirstStep.value) {
      return;
    }

    currentStep.value -= 1;
  };

  const resetStep = () => {
    currentStep.value = 0;
  };

  return {
    currentStep,
    nextStep,
    prevStep,
    resetStep,
    isFirstStep,
    isLastStep,
  };
}
