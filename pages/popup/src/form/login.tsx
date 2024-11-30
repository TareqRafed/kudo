import '@src/index.css';
import { Button, Input } from '@extension/ui';
import { useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { supabaseStorage } from '@extension/storage';
import { useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

const Login = ({ setUser }) => {
  const supabase = useStorage(supabaseStorage);

  const { handleSubmit, register, formState } = useForm<FormValues>();

  const loginUser = async ({ email, password }: FormValues) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('Login Error:', error.message);
    } else {
      console.log('User logged in:', data);
      setUser(data.user.email);
    }
  };

  return (
    <form onSubmit={handleSubmit(loginUser)} className="flex flex-col">
      <div className="flex flex-col">
        <h2>Login</h2>
        <Input type="text" placeholder="email" {...register('email')} />
        <Input type="password" {...register('password')} placeholder="password" />
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default withErrorBoundary(withSuspense(Login, <div> Loading ... </div>), <div> Error Occur </div>);
