'use client';

import { useRouter } from 'next/navigation';
import LoginPage from '@/components/gaming-login';

export default function Login() {
  const router = useRouter();

  function handleLogin(email: string, password: string, remember: boolean) {
    // TODO: replace with real auth
    router.push('/dashboard');
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 py-12">
      <LoginPage.VideoBackground videoUrl="https://videos.pexels.com/video-files/8128311/8128311-uhd_2560_1440_25fps.mp4" />

      <div className="relative z-20 w-full max-w-md">
        <LoginPage.LoginForm onSubmit={handleLogin} />
      </div>

      <footer className="absolute bottom-4 left-0 right-0 text-center text-white/60 text-sm z-20">
        © {new Date().getFullYear()} Haramaya University Cyber Security Club. All rights reserved.
      </footer>
    </div>
  );
}
