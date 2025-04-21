"use client";

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Profile = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    }
  });

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
              <p className="mt-2 text-gray-600">Welcome back, {session?.user?.name}!</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
              {session?.user?.name?.charAt(0).toUpperCase()}
            </div>
          </div>
          
          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Account Information</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="mt-1 text-gray-900">{session?.user?.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="mt-1 text-gray-900">{session?.user?.email}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;