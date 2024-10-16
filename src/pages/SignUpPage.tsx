import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../components/atoms/Button';
import { TextInput } from '../components/atoms/TextInput';

export const SignUpPage = () => {
  const methods = useForm();
  
  const onSubmit = (data: any) => {
    console.log('Form submitted', data);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl mb-6">Sign Up</h1>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full max-w-md">
          <TextInput
            name="name"
            label="Full Name"
            placeholder="Enter your name"
            variant="outlined"
            size="large"
          />
          <TextInput
            name="email"
            label="Email"
            placeholder="Enter your email"
            variant="outlined"
            size="large"
          />

          <Button
            variant="primary"
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
