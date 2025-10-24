import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';

const AdminSidebarPage = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Admin Navigation</h1>
        <div className="bg-white rounded-lg shadow-md p-4">
          <AdminSidebar />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebarPage;